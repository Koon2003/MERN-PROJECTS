import { print, OutputType } from "../helpers/print.js";
import { User } from "../models/index.js";
import Exception from "../exceptions/Exception.js";
import bcrypt from "bcrypt";

const login = async ({ email, password }) => {
  print("Login user in repositories!", OutputType.SUCCESS);
};

const register = async ({ name, email, password, phoneNumber, address }) => {
  try {
    const existingUser = await User.findOne({ email }).exec();
    if (!!existingUser) {
      throw new Exception(Exception.USER_EXIST);
    }
    // ecrypt passwoord, use brypt
    // const isMatched = await bcrypt.compare(password, existingUser.password);
    const hashPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS)
    );
    // insert to db
    const newUser = await User.create({
      name,
      email,
      phoneNumber,
      address,
      password: hashPassword,
    });

    return newUser;
  } catch (exception) {}
    // check model validation here
    throw new Exception(Exception.CANNOT_REGISTER_USER);
  // print(
  //   "regirter user with: name:" +
  //     name +
  //     " email: " +
  //     email +
  //     " password: " +
  //     password +
  //     " phone: " +
  //     phoneNumber +
  //     " address: " +
  //     address,
  //   OutputType.INFORMATION
  // );
};

export default {
  login,
  register,
};
