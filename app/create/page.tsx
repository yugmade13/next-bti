"use client"

import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const gender = [
  { label: "Laki - laki", value: "male" },
  { label: "Perempuan", value: "female" },
];

const religions = [
  { label: "Islam", value: "islam" },
  { label: "Kristen", value: "kristen" },
  { label: "Katolik", value: "katolik" },
  { label: "Hindu", value: "hindu" },
  { label: "Budha", value: "budha" },
];

export default function CreateClassroom() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const date = new Date(data.dob as string).toISOString();

    await fetch("/api/students", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...data, dob: date})
    });

    router.push('/');
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input name="name" type="text" label="Nama" />
            <Input name="nisn" type="text" label="NISN" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input name="email" type="email" label="Email" />
            <Input name="phone" type="number" label="Telepon" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input name="pob" type="text" label="Tempat & Tanggal Lahir" />
            <Input name="dob" type="date" />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select
              name="gender"
              label="Jenis Kelamin"
            >
              {gender.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </Select>
            <Select
              name="religion"
              label="Agama"
            >
              {religions.map((religion) => (
                <SelectItem key={religion.value} value={religion.value}>
                  {religion.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Textarea
            name="address"
            label="Alamat"
            placeholder="Enter your description"
          />
          <div className="flex gap-x-4 justify-end items-center">
            <Button
              onPress={() => router.push("/")}
              color="danger"
              variant="flat"
            >
              Back
            </Button>
            <Button type="submit" color="primary">
              Submit
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}