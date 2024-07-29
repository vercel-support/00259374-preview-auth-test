import type { NextRequest } from "next/server";

const secret = process.env.SECRET;

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("Authorization");
  if (authHeader === `Bearer ${secret}`) {
    return new Response("Secret is correct", { status: 200 });
  } else {
    return new Response("Secret is incorrect", { status: 401 });
  }
}
