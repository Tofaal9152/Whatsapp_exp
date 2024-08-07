"use client";
import { useSelector } from "react-redux";
import getOtherUser from "../../hooks/getOtherUser";
import People from "./People";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default () => {
  const router = useRouter();

  getOtherUser();

  const { getAllUser } = useSelector((e) => e.USER);

  const logOutSession = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/user/logout`);
      toast.success(res.data.message);
      router.push("/login");
      // console.log(res);
    } catch (error) {
      // console.log(error);
    }
  };

  return (
    <div className="flex flex-col space-y-3 px-2 border-r border-[#1D232A] relative">
      {/* search */}
      <form className="">
        <label className="input input-bordered flex items-center gap-2">
          <input type="text" className="grow w-[12rem]" placeholder="Search" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </form>
      {/* people */}
      <section className="overflow-y-auto flex-1">
        {getAllUser?.map((item, index) => {
          return <People key={item?._id} item={item} />;
        })}
      </section>
      {/* logout */}
      <section className="">
        <button onClick={logOutSession} className="btn btn-active">
          Log out
        </button>
      </section>
    </div>
  );
};
