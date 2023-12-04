/*
  Warnings:

  - You are about to drop the `ClassroomsOnStudents` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ClassroomsOnStudents" DROP CONSTRAINT "ClassroomsOnStudents_classroomId_fkey";

-- DropForeignKey
ALTER TABLE "ClassroomsOnStudents" DROP CONSTRAINT "ClassroomsOnStudents_studentId_fkey";

-- DropTable
DROP TABLE "ClassroomsOnStudents";

-- CreateTable
CREATE TABLE "_ClassroomToStudent" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ClassroomToStudent_AB_unique" ON "_ClassroomToStudent"("A", "B");

-- CreateIndex
CREATE INDEX "_ClassroomToStudent_B_index" ON "_ClassroomToStudent"("B");

-- AddForeignKey
ALTER TABLE "_ClassroomToStudent" ADD CONSTRAINT "_ClassroomToStudent_A_fkey" FOREIGN KEY ("A") REFERENCES "Classroom"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ClassroomToStudent" ADD CONSTRAINT "_ClassroomToStudent_B_fkey" FOREIGN KEY ("B") REFERENCES "Student"("id") ON DELETE CASCADE ON UPDATE CASCADE;
