"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

import { signInSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { signIn } from "next-auth/react";

const Page = () => {
  //extract the inferred type from schema
  type ValidationSchemaType = z.infer<typeof signInSchema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ValidationSchemaType>({
    resolver: zodResolver(signInSchema),
  });

  // Form submit handler
  const onSubmit: SubmitHandler<ValidationSchemaType> = (mailData) => {
    const { email, password } = mailData;

    signIn("credentials", {
      email,
      password,
      callbackUrl: "/admin",
    });

    reset();
  };

  return (
    <div className="h-screen bg-gray-200 flex items-center justify-center p-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[500px] w-full mx-auto bg-white p-8 rounded-lg"
      >
        <h2 className="text-3xl mb-4">Sign In</h2>
        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@gmail.com"
            {...register("email")}
          />

          {errors.email && (
            <span className="text-rose-500 text-sm">
              {errors.email?.message}
            </span>
          )}
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="******"
            {...register("password")}
          />

          {errors.password && (
            <span className="text-rose-500 text-sm">
              {errors.password?.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
