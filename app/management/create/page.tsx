"use client"

import { Button, Select, SelectItem } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { FormEvent } from 'react';
import { Classroom, Student } from '@/type';
import useStudents from '@/hooks/useStudents';
import useClassroom from '@/hooks/useClassroom';
import { filteredClassroom } from '@/utils';

export default function CreateManagement() {
  const router = useRouter();
  const { students, isLoading } = useStudents();
  const { classrooms } = useClassroom();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    await fetch("/api/management", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    router.push('/management');
  }

  if (isLoading) {
    return <div>Loading...</div>
  }

  const filtered = filteredClassroom(classrooms);

  return (
    <div className="w-full max-w-xl mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-y-4">
          <Select
            name="studentId"
            label="Select Student"
          >
            {students.map((student: Student) => (
              <SelectItem key={student.id} value={student.id}>
                {student.name}
              </SelectItem>
            ))}
          </Select>
          <Select
            name="classroomId"
            label="Select Classroom"
          >
            {filtered.map((classroom: Classroom) => (
              <SelectItem key={classroom.id} value={classroom.id}>
                {classroom.name}
              </SelectItem>
            ))}
          </Select>
          <div className="flex gap-x-4 justify-end items-center">
            <Button
              onPress={() => router.push("/management")}
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