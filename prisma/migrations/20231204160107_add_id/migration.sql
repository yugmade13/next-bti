/*
  Warnings:

  - The primary key for the `ClassroomsOnStudents` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "ClassroomsOnStudents" DROP CONSTRAINT "ClassroomsOnStudents_pkey",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "ClassroomsOnStudents_pkey" PRIMARY KEY ("id");
