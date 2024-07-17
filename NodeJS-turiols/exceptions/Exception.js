import { print,OutputType } from "../helpers/print.js";

export default class Exception extends Error {
    static WRONG_DB_USERNAME_PASSWORD = "Wrong database's username and password";
    static WRONG_CONNECTIN_STRING = "Wrong server name/connection string";
    static CANNOT_CONNECT_MONGODB = "Cannot connect to mongoDB";
    static USER_EXIST = "User already exists";
    static CANNOT_REGISTER_USER = "Cannot register user";

    constructor(message) {
        super(message);
        print(message, OutputType.ERROR);
    }
}