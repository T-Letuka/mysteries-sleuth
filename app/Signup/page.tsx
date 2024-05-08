import Image from "next/image";
import signup from "@/public/signup.png";
import RedButton from "../Components/Buttons/RedButton";
import Link from "next/link";
import WhiteButton from "../Components/Buttons/WhiteButton";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={signup}
          alt="Background Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 bg-gray-900 opacity-75" />
      <div className="z-10 p-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
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
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email address"
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
            <RedButton text="Sign Up" />
            <Link href="/">
              <WhiteButton text="Back" />
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
