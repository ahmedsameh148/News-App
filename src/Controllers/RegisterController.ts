import { EncryptPassword } from "../Services/EncryptPassword";
import { User } from "../DB/Models/User";
import { UserToken } from "../DB/Models/UserToken";
import { Request, Response } from "express";
import mongoose from "mongoose";

async function connect() {
  await mongoose.connect("mongodb://localhost:27017/myapp");
}

async function userFound(username: string) {
  if (await User.findOne({ username })) return true;
  return false;
}

async function addToken(id: string, token: string) {
  await UserToken.deleteOne({ userID: id });
  await new UserToken({
    userID: id,
    token: token,
  }).save();
}

export async function RegisterController(req: Request, res: Response) {
  await connect();
  const body = req.body;
  const username = body.username;
  const password = body.password;

  const hashedPassword = new EncryptPassword()
    .setPlainPassword(password)
    .encrypt();

  if (await userFound(username)) {
    return res.json({ message: "The User Is Already Found" });
  }

  const user = await new User({ username, password: hashedPassword }).save();
  const token = new EncryptPassword()
    .setPlainPassword(user._id + new Date().toISOString())
    .encrypt();
  addToken(user._id, token);
  return res.json({ Token: token });
}
