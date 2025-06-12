import React from "react";
import { Link } from "react-router-dom";
import useRegisterUserTan from "../../hooks/useRegisterUserTan";
import * as Yup from "yup";
import { useFormik } from "formik";
const SignupForm = () => {
  const { mutate, data, error, isPending, isSuccess, isError } =
    useRegisterUserTan();
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(8,"Password must be at least 8 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formik = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      mutate({
        fullName: values.fullName,
        email: values.email,
        password: values.password,
      });
    },
  });
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="space-y-4 text-left">
        <div>
          <label className="block text-sm text-gray-600">Name</label>
          <input
            type="text"
            name="fullName"
            value={formik.values.fullName}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.fullName && formik.errors.fullName && (
            <div className="text-red-500 text-sm">{formik.errors.fullName}</div>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-600">Email</label>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-sm">{formik.errors.email}</div>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-600">Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.password && formik.errors.password && (
            <div className="text-red-500 text-sm">{formik.errors.password}</div>
          )}
        </div>
        <div>
          <label className="block text-sm text-gray-600">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {formik.touched.confirmPassword && formik.errors.confirmPassword && (
            <div className="text-red-500 text-sm">
              {formik.errors.confirmPassword}
            </div>
          )}
        </div>
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
        >
          {isPending ? "Signing up..." : "Sign up"}
        </button>
        {isError && (
          <div className="text-red-600 text-sm mt-2">{error.message}</div>
        )}
        {isSuccess && (
          <div className="text-green-600 text-sm mt-2">
            Registered successfully!
          </div>
        )}
      </form>

      <p className="mt-6 text-sm text-gray-600 text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Sign in
        </Link>
      </p>
    </>
  );
};

export default SignupForm;
