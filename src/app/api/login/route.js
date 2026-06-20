import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import connectDB from "@/lib/db";
import User from "@/models/User";

export async function POST(req) {
  try {
    await connectDB();

    const { email, password } =
      await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message:
            "All fields required",
        },
        {
          status: 400,
        }
      );
    }

    const user =
      await User.findOne({
        email,
      });

    if (!user) {
      return NextResponse.json(
        {
          message:
            "Invalid Email or Password",
        },
        {
          status: 400,
        }
      );
    }

    const isMatch =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isMatch) {
      return NextResponse.json(
        {
          message:
            "Invalid Email or Password",
        },
        {
          status: 400,
        }
      );
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    const response =
      NextResponse.json({
        message:
          "Login Successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
          role: user.role,
        },
      });

    response.cookies.set(
      "token",
      token,
      {
        httpOnly: true,
        secure:
          process.env.NODE_ENV ===
          "production",
        sameSite: "strict",
        maxAge:
          7 *
          24 *
          60 *
          60,
        path: "/",
      }
    );

    return response;
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message:
          "Server Error",
      },
      {
        status: 500,
      }
    );
  }
}