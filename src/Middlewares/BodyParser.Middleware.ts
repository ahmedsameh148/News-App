import { AppMiddlewareInterface } from "../Core/Interfaces/AppMiddleware.Interface";
import express from "express";

export class BodyParserMiddleware implements AppMiddlewareInterface {
  getMiddleware() {
    return express.json();
  }
}
