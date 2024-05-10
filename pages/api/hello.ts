/* eslint-disable sort-keys */
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.statusCode = 200;
  res.json({
    i: "love you",
    wont: "you tell",
    me: "your name?",
  });
}
