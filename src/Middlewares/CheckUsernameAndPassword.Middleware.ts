import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";
import express, { Request, Response } from "express";

export class CheckUsernameAndPasswordMiddleware
  implements AppMiddlewareInterface
{
  getMiddleware() {
    return function (req: Request, res: Response, next: any) {
      const body = req.body;
      const username = body.username || "";
      const password = body.password || "";
      if (username === "" || password === "")
        return res.json({
          message: "Please Enter The (username) And (password)",
        });
      next();
    };
  }
}
