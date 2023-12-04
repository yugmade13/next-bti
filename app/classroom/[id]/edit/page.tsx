"use client"

import { Button, Input, Select, SelectItem } from '@nextui-org/react';
import { useParams, useRouter } from 'next/navigation';
import useSWR from 'swr';
import { FormEvent } from 'react';

const statusOptions = [
  { label: "Active", value: "active" },
  { label: "Inactive", value: "inactive" },
];

const fetcher = (url: string) => fetch(url).then(res => res.json());

export default function EditClassroom() {
  const router = useRouter();
  const params = useParams();
  const { data, isLoading } = useSWR(`/api/classroom?id=${params.id}`, fetcher);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    await fetch(`/api/classroom?id=${params.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });

    router.push('/classroom');
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <Input name="name" type="text" label="Kelas" defaultValue={data.name} />
          <Select
            name="status"
            label="Select status"
            defaultSelectedKeys={[data.status]}
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