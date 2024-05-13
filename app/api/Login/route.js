import { NextResponse } from "next/server";
import { connectMongodb } from "@/lib/mongodb";
import User from "@/models/user";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const requestBody = await request.json();
    const { email, password } = requestBody;
    console.log(requestBody);
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User Does not exist" },
        { status: 400 }
      );
    }
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json(
        {
          error: "Invalid Password",
        },
        { status: 400 }
      );
    }
    const tokenData = {
      id: user._id,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.JWT_SECRET_KEY, {
      expiresIn: "1d",
    });
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });
    response.cookies.set("token", token, { httpOnly: true });
    return response;
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
