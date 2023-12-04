import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const data = await prisma.classroom.findUnique({
      where: {
        id: parseInt(id)
      }
    });
    return NextResponse.json(data);
  } else {
    const data = await prisma.classroom.findMany();
    return NextResponse.json(data);
  }
}

export async function POST(request: NextRequest) {
  const data = await request.json();

  const classroom = await prisma.classroom.create({ data: data });

  return NextResponse.json(classroom);
}

export async function PUT(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const data = await request.json();

  if (id) {
    const classroom = await prisma.classroom.update({
      where: {
        id: parseInt(id)
      },
      data: {
        name: data.name,
        status: data.status
      }
    });

    return NextResponse.json(classroom);
  }
}

export async function DELETE(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');

  if (id) {
    const classroom = await prisma.classroom.delete({
      where: {
        id: parseInt(id)
      }
    });

    return NextResponse.json(classroom);
  }
}