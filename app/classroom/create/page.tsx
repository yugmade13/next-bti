"use client"

import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

export default function CreateClassroom() {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    await fetch("/api/classroom", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    router.push('/classroom');
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <Input name="name" type="text" label="Kelas" />
          <Select
            name="status"
            label="Select status"
          >
            {statusOptions.map((status) => (
              <SelectItem key={status.value} value={status.value}>
                {status.label}
              </SelectItem>
            ))}
          </Select>
          <div className="flex gap-x-4 justify-end items-center">
            <Button
              onPress={() => router.push("/classroom")}
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