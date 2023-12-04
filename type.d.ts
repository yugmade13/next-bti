import { SVGProps } from 'react';

type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

type Student = {
  id: number,
  name: string,
  nisn: number,
  email: string,
  phone: string,
  pob: string,
  dob: string,
  religion: string,
  address: string,
  classroomName?: string
  classroomsOnStudentsId?: number
}

type Classroom = {
  id: number
  name: string
  status: string
}

type ClassroomsOnStudents = {
  classroomsOnStudentsId: number,
  classroomId: number,
  studentId: number,
  student: Student,
  classroom: Classroom
}

type Size = "md" | "xs" | "sm" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "full" | undefined