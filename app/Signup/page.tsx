"use client";
import React, { useState } from "react";
import Image from "next/image";
import signup from "@/public/signup.png";
import RedButton from "../Components/Buttons/RedButton";
import Link from "next/link";
import WhiteButton from "../Components/Buttons/WhiteButton";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("/api/UserExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });
      const { user } = await res.json();
      if (user) {
        setError("User already exists");
        return;
      }

      const response = await fetch("/api/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (response.ok) {
        setName("");
        setEmail("");
        setPassword("");
        setError("");
        router.push("/Cases");
      } else {
        setError("Failed to submit the form");
      }
    } catch (error) {
      setError("Error occurred while submitting the form");
      console.log("Error occurred while submitting the form", error);
    }
  };

  return (
    <div className="min-h-screen  flex items-center justify-center  bg-gray-200">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={signup}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-gray-900 opacity-75" />
      <div className="z-10 p-8 bg-white rounded-lg shadow-lg border-t-4 border-red-500">
        <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block tracking-widest text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Enter your username"
            />
          </div>
          <div className="mb-4">
            <label
              className="block tracking-widest text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow  appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-2">
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
            <RedButton text="Sign Up" />
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
          Have have an Account?
          <Link href="/Login" className="hover:text-blue-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
