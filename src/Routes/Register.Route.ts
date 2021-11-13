import express, { IRouter } from "express";
import { RegisterController } from "../Controllers/RegisterController";
import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";
import { RouteInterface } from "../Core/Interfaces/Route.Interface";
import { CheckDuplicatedUsernameMiddleware } from "../Middlewares/CheckDuplicatedUsername.Middleware";
import { CheckUsernameAndPasswordMiddleware } from "../Middlewares/CheckUsernameAndPassword.Middleware";

export class RegisterRoute implements RouteInterface {
  private readonly route = express.Router();
  getPath(): string {
    return "/register";
  }

  getRouter(): IRouter {
    this.Middleware(new CheckUsernameAndPasswordMiddleware());
    this.Middleware(new CheckDuplicatedUsernameMiddleware());
    this.route.post("/", RegisterController);
    return this.route;
  }

  Middleware(middleware: AppMiddlewareInterface) {
    this.route.use(middleware.getMiddleware());
  }
}
