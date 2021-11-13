import { Request, Response } from "express";
const NewsAPI = require("newsapi");
require("dotenv").config();

export async function NewsController(req: Request, res: Response) {
  const newsapi = new NewsAPI(process.env.NewsApiKey);
  try {
    const data = await newsapi.v2.topHeadlines({ q: req.query.q });
    return res.json(data);
  } catch {
    return res.json({ message: "Please Enter A Value For q Parameter" });
  }
}
