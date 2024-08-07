"use client";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthUser } from "../../redux/features/user/userSlice";

const Login = () => {
  const router = useRouter();
  const dispatch = useDispatch();


  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await axios.post(
        "http://localhost:8000/api/v1/user/login",
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(setAuthUser(res?.data?.user))
      toast.success(res.data.message);
      router.push("/");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="h-full w-[25rem] bg-blue-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 p-7 shadow-2xl">
      <h2 className="text-3xl font-bold mb-6 text-center text-black underline">
        Log In
      </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-black text-sm mb-2">Username</label>
          <input
            {...register("username")}
            type="text"
            className="w-full px-3 text-[1rem] py-[0.47rem] border border-none outline-none rounded-md"
            placeholder="Enter your username"
          />
        </div>
        <div className="mb-8">
          <label className="block text-black text-sm mb-2">Password</label>
          <input
            {...register("password")}
            type="password"
            className="w-full px-3 text-[1rem] py-[0.47rem] border border-none outline-none rounded-md"
            placeholder="Enter your password"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#121212] text-[#A6ADBB] py-[0.6rem] rounded-md hover:bg-gray-900 transition duration-300"
        >
          log In
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-black">
        Don't have an account?{" "}
        <Link href="/register" className="text-black underline">
          Register
        </Link>
      </p>
    </div>
  );
};

export default Login;
