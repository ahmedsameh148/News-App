import express, { IRouter } from "express";
import { RegisterController } from "../Controllers/RegisterController";
import { RouteInterface } from "../Core/Interfaces/Route.Interface";

export class RegisterRoute implements RouteInterface {
  getPath(): string {
    return "/register";
  }

  getRouter(): IRouter {
    const route = express.Router();

    route.post("/", RegisterController);

    return route;
  }
}
