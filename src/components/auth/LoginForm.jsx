import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  return (
    <>
      <button className="w-full flex items-center justify-center border border-gray-300 rounded-lg py-2 mb-4 hover:bg-gray-100 transition">
        <img
          src="https://www.svgrepo.com/show/475656/google-color.svg"
          alt="Google"
          className="h-5 w-5 mr-2"
        />
        <span>Sign in with Google</span>
      </button>

      <div className="flex items-center justify-center mb-4">
        <div className="border-t w-1/4 border-gray-300"></div>
        <span className="mx-2 text-sm text-gray-400">or</span>
        <div className="border-t w-1/4 border-gray-300"></div>
      </div>

      <form className="space-y-4 text-left">
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div className="text-right text-sm">
          <a href="#" className="text-blue-600 hover:underline">
            Forgot password?
          </a>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          Sign in
        </button>
      </form>

      <p className="mt-6 text-sm text-gray-600 text-center">
        Don’t have an account?{" "}
        <Link to="/signup" className="text-blue-600 hover:underline">
          Sign up
        </Link>
      </p>
    </>
  );
};

export default LoginForm;
