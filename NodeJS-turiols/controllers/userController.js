import { body, validationResult } from "express-validator";
import { userRepository } from "../repositories/index.js";
import HttpStatusCode from "../exceptions/HttpStatusCode.js";
import { EventEmitter } from "node:events";

const myEvent = new EventEmitter();
// listen
myEvent.on("event.register.user", (params) => {
  console.log(`Thay talk about: ${JSON.stringify(params)}`);
});

const login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(HttpStatusCode.BAD_REQUEST)
      .json({ errors: errors.array() });
  }
  const { email, password } = req.body;
  // call repository
  await userRepository.login({ email, password });
  // validation
  res.status(HttpStatusCode.OK).json({
    message: "Login user successfully!",
    data: "detail user here",
  });
};

const register = async (req, res) => {
  const { name, email, password, phoneNumber, address } = req.body;
  //
  myEvent.emit("event.register.user", { email, phoneNumber });

  try {
    // call repository
    const user = await userRepository.register({
      name,
      email,
      password,
      phoneNumber,
      address,
    });
    res
      .status(HttpStatusCode.INSERT_OK)
      .json({ message: "Register user successfully!", data: user });
  } catch (exception) {
    res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({
      
    });
  }
};

const getDetailUser = async (req, res) => {};

export default {
  login,
  register,
  getDetailUser,
};
