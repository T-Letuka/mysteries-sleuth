"use client";
import React, { useState } from "react";
import ResponsiveNav from "../Components/ResponsiveNav";
import RedButton from "../Components/Buttons/RedButton";
import WhiteButton from "../Components/Buttons/WhiteButton";
import Link from "next/link";
import Footer from "../Components/Footer";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();
  const [error, setError] = useState("");

  return (
    <div>
      <ResponsiveNav />
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-black p-8 rounded-lg shadow-lg w-96">
          <h1 className="heading text-white">Login</h1>
          <form>
            <input
              type="email"
              className="w-full border border-gray-300 text-white px-3 rounded-md py-2 mb-4 focus:outline"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="w-full border border-gray-300 text-white px-3 rounded-md py-2 mb-4 focus:outline"
              placeholder="Enter Password"
              required
            />
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
