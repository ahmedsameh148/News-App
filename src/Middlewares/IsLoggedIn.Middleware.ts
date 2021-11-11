import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";
import express, { Request, Response } from "express";
import { UserToken } from "../DB/Models/UserToken";
import mongoose from "mongoose";

export class IsLoggedInMiddleware implements AppMiddlewareInterface {
  async connect() {
    await mongoose.connect("mongodb://localhost:27017/myapp");
  }

  async CheckToken(token: string) {
    const userToken = await UserToken.findOne({ token });
    if (userToken == undefined || userToken == null) return false;
    return true;
  }

  getMiddleware() {
    this.connect();
    return async (req: Request, res: Response, next: any) => {
      const token = req.query.token || "";
      if (!(await this.CheckToken(token as string)))
        return res.json({
          message: "Please Login First",
        });
      next();
    };
  }
}
