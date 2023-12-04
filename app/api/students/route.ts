import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const data = await prisma.student.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    return NextResponse.json(data);
  } else {
    const data = await prisma.student.findMany();
    return NextResponse.json(data);
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const student = await prisma.student.create({ data: data });

  return NextResponse.json(student);
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const data = await request.json();

  if (id) {
    const student = await prisma.student.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name: data.name,
        nisn: data.nisn,
        phone: data.phone,
        email: data.email,
        pob: data.pob,
        dob: data.dob,
        gender: data.gender,
        religion: data.religion,
        address: data.address,
      }
    });

    return NextResponse.json(student);
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const student = await prisma.student.delete({
      where: {
        id: parseInt(id)
      }
    });

    return NextResponse.json(student);
  }
}