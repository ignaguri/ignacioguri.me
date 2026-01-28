import { cacheLife } from "next/cache";

async function getData() {
  "use cache";
  cacheLife("max");

  return {
    i: "love you",
    wont: "you tell",
    me: "your name?",
  };
}

export async function GET() {
  const data = await getData();
  return Response.json(data);
}
