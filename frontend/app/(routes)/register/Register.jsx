"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";

// form

const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    try {
      
    } catch (error) {
      
    }
    console.log(data);
  };
  return (
    <div className="h-full w-[25rem] bg-blue-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 p-7 shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-black underline">
        Register
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-black text-sm mb-2">Full Name</label>
          <input
            {...register("fullName")}
            type="text"
            className="w-full text-[1rem] px-3 py-[0.47rem] border border-none outline-none rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm mb-2">Username</label>
          <input
            {...register("username")}
            type="text"
            className="w-full px-3 text-[1rem] py-[0.47rem] border border-none outline-none rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm mb-2">Password</label>
          <input
            {...register("password")}
            type="password"
            className="w-full px-3 text-[1rem] py-[0.47rem] border border-none outline-none rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black text-sm mb-2">
            Confirm Password
          </label>
          <input
            {...register("confirmPassword")}
            type="password"
            className="w-full px-3 text-[1rem] py-[0.47rem] border border-none outline-none rounded-md"
            placeholder="Confirm your password"
          />
        </div>
        <div className="flex space-x-3 mb-4">
          <label className="block text-black text-sm mb-2">Gender:</label>
          <div className="flex space-x-3">
            <label htmlFor="male" className="text-black text-sm">
              Male
            </label>
            <input
             {...register("gender")}
              id="male"
              type="radio"
              name="gender"
              value="male"
              className="radio"
              defaultChecked
            />
            <label htmlFor="female" className="text-black text-sm">
              Female
            </label>
            <input
             {...register("gender")}
              id="female"
              type="radio"
              name="gender"
              value="female"
              className="radio"
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-[#121212] text-[#A6ADBB] py-[0.6rem] rounded-md hover:bg-gray-900 transition duration-300"
        >
          Register
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-black">
        Already have an account?{" "}
        <Link href="/login" className="text-black underline">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default Register;
