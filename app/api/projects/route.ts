import { fetchProjects } from "@lib/github";

export async function GET() {
  return Response.json(await fetchProjects());
}
