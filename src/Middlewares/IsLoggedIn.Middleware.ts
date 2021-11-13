import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";
import { Request, Response } from "express";
import { UserToken } from "../DB/Models/UserToken";

export class IsLoggedInMiddleware implements AppMiddlewareInterface {
  async CheckToken(token: string) {
    const userToken = await UserToken.findOne({ token });
    if (userToken == undefined || userToken == null) return false;
    return true;
  }

  getMiddleware() {
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
