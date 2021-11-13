import { IRouter } from "express";
import { AppMiddlewareInterface } from "./AppMiddleware.Interface";

export interface RouteInterface {
  getPath(): string;
  getRouter(): IRouter;
  Middleware(middleware: AppMiddlewareInterface): void;
}
