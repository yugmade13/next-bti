"use client"

import { Button, Input, Select, SelectItem, Textarea } from '@nextui-org/react';
import { useParams, useRouter } from 'next/navigation';
import useSWR from 'swr';
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

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function EditClassroom() {
  const router = useRouter();
  const params = useParams();
  const { data, isLoading, mutate } = useSWR(`/api/students?id=${params.id}`, fetcher);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    const date = new Date(data.dob as string).toISOString();

    await fetch("/api/students?id=${params.id}", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({...data, dob: date})
    });

    mutate()
    router.push('/');
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input name="name" type="text" label="Nama" defaultValue={data.name} />
            <Input name="nisn" type="text" label="NISN" defaultValue={data.nisn} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input name="email" type="email" label="Email" defaultValue={data.email} />
            <Input name="phone" type="number" label="Telepon" defaultValue={data.phone} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Input name="pob" type="text" label="Tempat & Tanggal Lahir" defaultValue={data.pob} />
            <Input name="dob" type="date" defaultValue={data.dob.split("T")[0]} />
          </div>
          <div className="flex w-full flex-wrap md:flex-nowrap gap-4">
            <Select
              name="gender"
              label="Jenis Kelamin"
              defaultSelectedKeys={[data.gender]}
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
              defaultSelectedKeys={[data.religion]}
            >
              {religions.map((religion) => (
                <SelectItem key={religion.value} value={religion.value}>
                  {religion.label}
                </SelectItem>
              ))}
            </Select>
          </div>
          <Textarea
            defaultValue={data.address}
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