import express, { IRouter } from "express";
import { LoginController } from "../Controllers/LoginController";
import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";
import { RouteInterface } from "../Core/Interfaces/Route.Interface";
import { CheckUsernameAndPasswordMiddleware } from "../Middlewares/CheckUsernameAndPassword.Middleware";

export class LoginRoute implements RouteInterface {
  private readonly route = express.Router();

  getPath(): string {
    return "/login";
  }

  getRouter(): IRouter {
    this.Middleware(new CheckUsernameAndPasswordMiddleware());
    this.route.post("/", LoginController);
    return this.route;
  }

  Middleware(middleware: AppMiddlewareInterface) {
    this.route.use(middleware.getMiddleware());
  }
}
