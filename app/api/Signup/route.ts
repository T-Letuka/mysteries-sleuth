import { NextResponse } from "next/server";
import connectMongodb from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";

export const POST = async (request: any) => {
  const { email, password } = await request.json();

  await connectMongodb();
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return new NextResponse("User Exists", { status: 400 });
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({
    email,
    password: hashedPassword,
  });
  try {
    await newUser.save();
    return new NextResponse("User registed Succesfully", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, {
      status: 500,
    });
  }
};
