import HttpStatusCode from "../exceptions/HttpStatusCode.js";

async function getAllStudents(req, res) {
  res.status(HttpStatusCode.OK).json({
    message: "Get all students successfully!",
    data: [
      {
        name: "Nguyen Van A",
        age: 18,
        email: "nguyenvana@gmail.com",
      },
      {
        name: "Nguyen Van B",
        age: 21,
        email: "nguyenvanb@gmail.com",
      },
      {
        name: "Nguyen Van C",
        age: 35,
        email: "nguyenvanc@gmail.com",
      },
    ],
  });
  // res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
  //     message: 'Cannot get students!'
  // });
}

async function getStudentById(req, res) {
  res.send("GET detail student by id: " + req?.params?.id ?? "");
}

async function updateStudent(req, res) {}

async function insertStudent(req, res) {}

export default {
  getAllStudents,
  getStudentById,
  updateStudent,
  insertStudent,
};
