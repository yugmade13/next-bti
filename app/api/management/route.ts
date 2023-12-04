import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/prisma/client';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const data = await prisma.classroomsOnStudents.findUnique({
      where: {
        classroomsOnStudentsId: parseInt(id)
      },
      include: {
        student: true,
        classroom: true
      }
    });
    return NextResponse.json(data);
  } else {
    const data = await prisma.classroomsOnStudents.findMany({
      include: {
        student: true,
        classroom: true
      }
    });
    return NextResponse.json(data);
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();
  const { studentId, classroomId } = data;

  const classroomsOnStudents = await prisma.classroomsOnStudents.create({
    data: {
      studentId: parseInt(studentId),
      classroomId: parseInt(classroomId),
    },
  });

  return NextResponse.json(classroomsOnStudents);
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const { studentId, classroomId } = await request.json();

  if (id) {
    const classroom = await prisma.classroomsOnStudents.update({
      where: {
        classroomsOnStudentsId: parseInt(id)
      },
      data: {
        studentId: parseInt(studentId),
        classroomId: parseInt(classroomId)
      }
    });

    return NextResponse.json(classroom);
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const classroom = await prisma.classroomsOnStudents.delete({
      where: {
        classroomsOnStudentsId: parseInt(id)
      }
    });

    return NextResponse.json(classroom);
  }
}