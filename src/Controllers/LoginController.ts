import { EncryptPassword } from "../Services/EncryptPassword";
import { User } from "../DB/Models/User";
import { UserToken } from "../DB/Models/UserToken";
import { Request, Response } from "express";

async function addToken(id: string, token: string) {
  await UserToken.deleteOne({ userID: id });
  await new UserToken({
    userID: id,
    token: token,
  }).save();
}

export async function LoginController(req: Request, res: Response) {
  const body = { username: "", password: "" };
  const username: string = body.username;
  const password: string = body.password;

  const hashedPassword: string = new EncryptPassword()
    .setPlainPassword(password)
    .encrypt();

  const user = await User.findOne({ username, password: hashedPassword });
  if (!user) {
    return res.json({
      message: "Please Enter A Valid username and password",
    });
  }
  const token = new EncryptPassword()
    .setPlainPassword(user._id + new Date().toISOString())
    .encrypt();
  addToken(user._id, token);
  return res.json({ Token: token });
}
