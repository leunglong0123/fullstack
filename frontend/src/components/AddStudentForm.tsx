import { useState } from "react";

import { StudentType } from "../types/student.types";

const AddStudentForm = () => {
  const [student, setStudent] = useState<StudentType>({
    studentNumber: "12345",
    name: "Akeel",
    age: 78,
    course: "Data",
    semester: 2,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setStudent({
      ...student,
      [name]:
        name === "studentNumber" || name === "name" || name === "course"
          ? parseInt(value)
          : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(student);
  };

  return (
    <div>
      <h2>Add Student</h2>
      <p></p>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="studentNumber"
          onChange={handleChange}
          value={student.studentNumber}
          placeholder="Student Number"
          required
        />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={student.name}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="age"
          onChange={handleChange}
          value={student.age}
          placeholder="Age"
          required
        />
        <input type="text" name="course" placeholder="Course" required />
        <input
          type="number"
          name="semester"
          onChange={handleChange}
          value={student.semester}
          placeholder="Semester"
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default AddStudentForm;
