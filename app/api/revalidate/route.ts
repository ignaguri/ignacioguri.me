import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.REVALIDATION_SECRET}`) {
    return Response.json({ error: "Unauthorized" }, { status: 401 });
  }

  revalidateTag("github-projects", "max");
  return Response.json({ revalidated: true });
}
