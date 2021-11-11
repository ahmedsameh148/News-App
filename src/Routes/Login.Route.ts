import express, { IRouter } from "express";
import { LoginController } from "../Controllers/LoginController";
import { RouteInterface } from "../Core/Interfaces/Route.Interface";

export class LoginRoute implements RouteInterface {
  getPath(): string {
    return "/login";
  }

  getRouter(): IRouter {
    const route = express.Router();

    route.post("/", LoginController);

    return route;
  }
}
