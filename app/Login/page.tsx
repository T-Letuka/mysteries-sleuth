"use client";

import Image from "next/image";
import backgroud from "@/public/background.png";
import { motion } from "framer-motion";
import RedButton from "../Components/Buttons/RedButton";
import WhiteButton from "../Components/Buttons/WhiteButton";
import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await signIn("credential", {
        email,
        password,
        redirect: false,
      });
      if (res?.error) {
        setError("Invallid Credetials");
        return;
      }
      router.push("/Cases");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={backgroud}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-gray-900 opacity-75"></div>
      <div className="z-10 p-8 bg-white rounded-lg shadow-lg">
        <motion.h1
          initial={{ color: "black" }}
          animate={{ color: "#FF0000" }}
          transition={{ delay: 1 }}
          className="text-3xl font-semibold mb-4"
        >
          Login
        </motion.h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Username
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <RedButton text="Sign In" />
            <Link href="/">
              <WhiteButton text="Back" />
            </Link>
          </div>
        </form>
        {error && (
          <div
            className="bg-red-500 text-white w-fit
          mt-2 mb-2 text-sm px-3 py-1 rounded-md"
          >
            {error}
          </div>
        )}
        <p className="mt-2 flex gap-2 items-center">
          Don't Have an Account?
          <Link href="/Signup" className="hover:text-blue-600">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
