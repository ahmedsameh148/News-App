import { IRouter } from "express";

export interface RouteInterface {
  getPath(): string;
  getRouter(): IRouter;
}
