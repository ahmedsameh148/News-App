import { Request, Response } from "express";
const NewsAPI = require("newsapi");
require("dotenv").config();

export async function FilterNewsController(req: Request, res: Response) {
  const newsapi = new NewsAPI(process.env.NewsApiKey);
  try {
    const data = await newsapi.v2.everything({
      qInTitle: req.query.title,
    });
    return res.json(data);
  } catch {
    return res.json({
      message: "Please Enter Title Value in Query Parameters",
    });
  }
}
