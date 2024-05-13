import { NextResponse } from "next/server";
import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export async function POST(request) {
  try {
    const { name, email, password } = await request.json();
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectMongodb();
    await User.create({ name, email, password: hashedPassword });
    return NextResponse.json({ message: "User Signed Up" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Occured,Could not Signup User" },
      { status: 500 }
    );
  }
}
