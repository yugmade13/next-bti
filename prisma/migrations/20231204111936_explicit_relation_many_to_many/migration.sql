/*
  Warnings:

  - You are about to drop the `_ClassroomToStudent` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ClassroomToStudent" DROP CONSTRAINT "_ClassroomToStudent_A_fkey";

-- DropForeignKey
ALTER TABLE "_ClassroomToStudent" DROP CONSTRAINT "_ClassroomToStudent_B_fkey";

-- DropTable
DROP TABLE "_ClassroomToStudent";

-- CreateTable
CREATE TABLE "ClassroomsOnStudents" (
    "studentId" INTEGER NOT NULL,
    "classroomId" INTEGER NOT NULL,

    CONSTRAINT "ClassroomsOnStudents_pkey" PRIMARY KEY ("studentId","classroomId")
);

-- AddForeignKey
ALTER TABLE "ClassroomsOnStudents" ADD CONSTRAINT "ClassroomsOnStudents_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClassroomsOnStudents" ADD CONSTRAINT "ClassroomsOnStudents_classroomId_fkey" FOREIGN KEY ("classroomId") REFERENCES "Classroom"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
