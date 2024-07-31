import { IoSendSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

import Sender from "./Sender";
import Receiver from "./Receiver";
export default () => {
  return (
    <div className="flex-1 flex flex-col px-1  relative">
      {/* hrader */}
      <section className="flex items-center justify-between p-2 w-full">
        <div className="flex items-center space-x-3">
          <div className="avatar online">
            <div className="rounded-full w-[3rem]">
              <img src="https://i.pravatar.cc/300   " alt="" />
            </div>
          </div>
          <p className="font-bold text-black">Md Tofaal Ahmed</p>
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
        <Sender />
        <Receiver />
        <Sender />
        <Receiver />
        <Sender />
        <Receiver />
        <Sender />
        <Receiver />
      </section>
      {/* type Message */}
      <section className="absolute bottom-0 w-full">
        <form className="">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Type message..." />
            <div className="cursor-pointer">
              <IoSendSharp size={22} />
            </div>
          </label>
        </form>
      </section>
    </div>
  );
};
