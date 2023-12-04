import { Classroom } from '@/type';

export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
export function filteredClassroom(classrooms: Classroom[]) {
  return classrooms.filter((item: Classroom) => item.status === "active");
}