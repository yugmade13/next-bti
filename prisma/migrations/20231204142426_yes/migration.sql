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
