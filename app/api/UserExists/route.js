import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    await connectMongodb();
    const { email } = await req.json();
    const user = await User.findOne({ email }).select("_id");
    return NextResponse.json({ user });
  } catch (error) {
    console.log("Cannot Find User");
  }
}
