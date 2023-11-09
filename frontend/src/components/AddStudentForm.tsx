import { useState } from "react";
import { StudentType } from "../types/student.types";

const AddStudentForm = () => {
  const [student, setStudent] = useState<StudentType>({
    studentNumber: 12345,
    name: "Akeel",
    age: 78,
    course: "Data",
    semester: 2,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Determine the new value based on the input field's name
    const newValue =
      name === "studentNumber" || name === "age" || name === "semester"
        ? parseInt(value) // If the field should be a number, parse it
        : value; // Otherwise, use the value as is

    setStudent({
      ...student,
      [name]: newValue,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(student);
  };

  return (
    <>
      <h2>Add Student</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="studentNumber"
          onChange={handleChange}
          placeholder="Student Number"
          required
        />
        <input
          type="text"
          name="name"
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="number"
          name="age"
          onChange={handleChange}
          placeholder="Age"
          required
        />
        <input
          type="text"
          name="course"
          onChange={handleChange}
          placeholder="Course"
          required
        />
        <input
          type="number"
          name="semester"
          onChange={handleChange}
          placeholder="Semester"
          required
        />
        <button type="submit">Add Student</button>
      </form>
    </>
  );
};

export default AddStudentForm;

// import { useState } from "react";

// import { StudentType } from "../types/student.types";

// const AddStudentForm = () => {
//   const [student, setStudent] = useState<StudentType>({
//     studentNumber: "12345",
//     name: "Akeel",
//     age: 78,
//     course: "Data",
//     semester: 2,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;

//     setStudent({
//       ...student,
//       [name]:
//         name === "studentNumber" || name === "name" || name === "course"
//           ? parseInt(value)
//           : value,
//     });
//   };

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     console.log(student);
//   };

//   return (
//     <div>
//       <h2>Add Student</h2>
//       <p></p>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="number"
//           name="studentNumber"
//           onChange={handleChange}
//           value={student.studentNumber}
//           placeholder="Student Number"
//           required
//         />
//         <input
//           type="text"
//           name="name"
//           onChange={handleChange}
//           value={student.name}
//           placeholder="Name"
//           required
//         />
//         <input
//           type="number"
//           name="age"
//           onChange={handleChange}
//           value={student.age}
//           placeholder="Age"
//           required
//         />
//         <input type="text" name="course" placeholder="Course" required />
//         <input
//           type="number"
//           name="semester"
//           onChange={handleChange}
//           value={student.semester}
//           placeholder="Semester"
//           required
//         />
//         <button type="submit">Add Student</button>
//       </form>
//     </div>
//   );
// };

// export default AddStudentForm;

// isMale = false;

// if (isMale) {
//   ("Hello Male");
// } else {
//   ("not Male");
// }

// isMale ? "Hello Male" : "Not Male";

// isMale && "Hello Male ";
