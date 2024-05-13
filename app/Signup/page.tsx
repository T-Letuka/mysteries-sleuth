"use client";
import React, { useState } from "react";
import ResponsiveNav from "../Components/ResponsiveNav";
import RedButton from "../Components/Buttons/RedButton";
import WhiteButton from "../Components/Buttons/WhiteButton";
import Link from "next/link";
import Footer from "../Components/Footer";
import { useRouter } from "next/navigation";

const page = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    if (!isValidEmail(email)) {
      setError("Email is Invalid");
      return;
    }
    if (!password || password.length < 6) {
      setError("Invalid Password");
      return;
    }
    try {
      const res = await fetch("/api/Signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      if (res.status === 400) {
        setError("User is registered");
      }
      if (res.status === 200) {
        setError("");
        router.push("/Login");
      }
    } catch (error) {
      setError("Something Went Wrong,Please Try again");
      console.log(error);
    }
  };
  return (
    <div>
      <ResponsiveNav />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-black p-8 rounded-lg shadow-lg w-96">
          <h1 className="heading text-white">Sign Up</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              className="w-full border border-gray-300 text-black px-3 rounded-md py-2 mb-4 focus:outline"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="w-full border border-gray-300 text-black px-3 rounded-md py-2 mb-4 focus:outline"
              placeholder="Enter Password"
              required
            />
            <p className="text-red-500 text-[16px] mb-4">{error && error}</p>
            <div className="flex items-center justify-between mt-2">
              <RedButton text="Submit" />
              <WhiteButton text="Home" />
            </div>
            <p className="text-white mt-2 ">
              Don't Have An Account?{" "}
              <Link
                href="/Signup"
                className="hover:text-red-500 hover:underline hover:text-[18px]"
              >
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
