const columns = [
  { name: "ID", uid: "id", sortable: true },
  { name: "NAME", uid: "name", sortable: true },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Active", uid: "active" },
  { name: "Inactive", uid: "inactive" },
];

const classrooms = [
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
  {
    id: 4,
    name: "Kelas VIII B",
    status: "active"
  },
  {
    id: 5,
    name: "Kelas IX A",
    status: "active"
  },
  {
    id: 6,
    name: "Kelas IX A",
    status: "active"
  }
]

export { classrooms, columns, statusOptions };
