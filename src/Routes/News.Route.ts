import express, { IRouter } from "express";
import { NewsController } from "../Controllers/NewsController";
import { FilterNewsController } from "../Controllers/FilterNewsController";
import { RouteInterface } from "../Core/Interfaces/Route.Interface";
import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";
import { IsLoggedInMiddleware } from "../Middlewares/IsLoggedIn.Middleware";

export class NewsRoute implements RouteInterface {
  private readonly route = express.Router();
  getPath(): string {
    return "/news";
  }

  getRouter(): IRouter {
    this.Middleware(new IsLoggedInMiddleware());
    this.route.get("/", NewsController);
    this.route.post("/", FilterNewsController);

    return this.route;
  }
  Middleware(middleware: AppMiddlewareInterface) {
    this.route.use(middleware.getMiddleware());
  }
}
