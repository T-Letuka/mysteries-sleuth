"use client";
import Image from "next/image";
import backgroud from "@/public/background.png";
import { motion } from "framer-motion";

export default function Login() {
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
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
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
              className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
