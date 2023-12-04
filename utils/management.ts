const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "EMAIL", uid: "email", sortable: true },
  { name: "ClASSROOM", uid: "classroom" },
  { name: "ACTIONS", uid: "actions" },
];

const classroomsOnStudents = [
  {
    studentId: 1,
    classroomId: 1,
    student: [
      {
        id: 1,
        name: "Robert Fox",
        nisn: 653518,
        email: "robert@gmail.com",
        phone: "(201) 555-0124",
      },
      {
        id: 2,
        name: "Annette Black",
        nisn: 653519,
        email: "anette@gmail.com",
        phone: "(201) 555-0125",
      },
      {
        id: 3,
        name: "Devan Lane",
        nisn: 653343,
        email: "devan@gmail.com",
        phone: "(201) 555-0125",
      },
    ],
    classroom: [
      {
        id: 1,
        name: "Kelas VII A",
        status: "active"
      },
      {
        id: 2,
        name: "Kelas VII B",
        status: "inactive"
      },
      {
        id: 3,
        name: "Kelas VIII A",
        status: "active"
      },
    ],
  },
]

export { classroomsOnStudents, columns };
