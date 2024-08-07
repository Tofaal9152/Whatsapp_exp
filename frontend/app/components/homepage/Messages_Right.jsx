"use client";
import axios from "axios";
import { IoSendSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import Sender from "./Sender";
import getMessageFromId from "../../hooks/getMessageFromId";
import { useDispatch, useSelector } from "react-redux";
import { setMessagesRedux } from "../../redux/features/user/userSlice";
import { useEffect, useRef } from "react";

export default () => {
  const dispatch = useDispatch();
  const { messagesRedux } = useSelector((state) => state.USER);
  const { selectedUser } = useSelector((state) => state.USER);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/sendmessage/${selectedUser?._id}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(setMessagesRedux([...messagesRedux, res?.data?.message]));
    } catch (error) {
      toast.error("data send failled");
    }
  };

  getMessageFromId();

  const scroll = useRef();
  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [messagesRedux]);

  return (
    <>
      {selectedUser ? (
        <div className="flex-1 flex flex-col px-1 relative">
          {/* hrader */}
          <section className="flex items-center justify-between p-2 w-full">
            <div className="flex items-center space-x-3">
              <div className="avatar online">
                <div className="rounded-full w-[3rem]">
                  <img src={selectedUser?.profilePhoto} alt="" />
                </div>
              </div>
              <p className="font-bold text-black">{selectedUser?.fullname}</p>
            </div>
            <div className="bg-black p-2 rounded-full cursor-pointer">
              <IoSettings size={22} />
            </div>
          </section>
          {/* line break */}
          <section>
            <hr className="bg-black border-none ml-1 h-[0.1rem]" />
          </section>
          {/* chat */}
          <section className=" overflow-y-auto mb-12">
            {messagesRedux?.map((item, index) => {
              return <Sender key={index} item={item} />;
            })}
            <div ref={scroll}></div>
          </section>
          {/* type Message */}
          <section className="absolute bottom-0 w-full mt-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <label className="input input-bordered flex items-center gap-2">
                <input
                  {...register("message")}
                  type="text"
                  className="grow"
                  placeholder="Type message..."
                />
                <button type="submit" className="cursor-pointer">
                  <IoSendSharp size={22} />
                </button>
              </label>
            </form>
          </section>
        </div>
      ) : (
        <div className="text-black flex items-center justify-center mx-auto text-3xl font-bold">
          Chat with your favourite one
        </div>
      )}
    </>
  );
};
