import { EncryptPassword } from "../Services/EncryptPassword";

export function LoginController(req: Request, res: Response) {
  const body = { username: "", password: "" };
  const userName = body.username;
  const password = body.password;

  const hashedPassword = new EncryptPassword()
    .setPlainPassword(password)
    .encrypt();
}
