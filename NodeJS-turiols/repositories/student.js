import { print, OutputType } from '../helpers/print.js';

const getAllStudents = async ({ page, size, searchString }) => {
    console.log('get all students with paging');
};

// languages: "english-vietnamese"
const insertStudent = async ({ name, email, languages, gender, phoneNumber, address }) => {
    console.log('insert student');
};

export default {
    getAllStudents,
    insertStudent
};

// fzUYgkJfZ3zl5vig
// BINhLMKXogsbqgHu
// mongodb+srv://nodejs_tutotial:fzUYgkJfZ3zl5vig@cluster0.fnmwtbg.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0