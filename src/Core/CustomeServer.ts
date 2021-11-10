import express from "express";
import { AppMiddlewareInterface } from "./Interfaces/AppMiddleware.Interface";
import { RouteInterface } from "./Interfaces/Route.Interface";

export class CustomeServer {
  private readonly server = express();

  public route(router: RouteInterface) {
    this.server.use(router.getPath(), router.getRouter());
  }

  public listen(port: number) {
    this.server.listen(port);
  }

  middleware(middleware: AppMiddlewareInterface) {
    this.server.use(middleware.getMiddleware());
  }
}
