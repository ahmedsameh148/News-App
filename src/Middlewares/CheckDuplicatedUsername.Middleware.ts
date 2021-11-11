import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";
import { Request, Response } from "express";
import { User } from "../DB/Models/User";
import mongoose from "mongoose";

export class CheckDuplicatedUsernameMiddleware
  implements AppMiddlewareInterface
{
  async connect() {
    await mongoose.connect("mongodb://localhost:27017/myapp");
  }

  async userFound(username: string) {
    if (await User.findOne({ username })) return true;
    return false;
  }

  getMiddleware() {
    return async (req: Request, res: Response, next: Function) => {
      this.connect();
      const body = req.body;
      const username = body.username;
      const user = await this.userFound(username);
      if (user) {
        return res.json({ message: "The User Is Already Found" });
      }
      next();
    };
  }
}
