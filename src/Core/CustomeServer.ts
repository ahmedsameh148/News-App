import express from "express";
import { AppMiddlewareInterface } from "./Interfaces/AppMiddleware.Interface";
import { RouteInterface } from "./Interfaces/Route.Interface";

export class CustomeServer {
  private readonly server = express();

  public Route(router: RouteInterface) {
    this.server.use(router.getPath(), router.getRouter());
  }

  public Listen(port: number) {
    this.server.listen(port, () => {
      console.log("listen at port " + port);
    });
  }

  Middleware(middleware: AppMiddlewareInterface) {
    this.server.use(middleware.getMiddleware());
  }
}
