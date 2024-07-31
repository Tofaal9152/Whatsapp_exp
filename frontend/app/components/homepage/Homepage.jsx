import Messages_Right from "./Messages_Right";
import Sidebar_left from "./Sidebar_left";

export default () => {
  return (
    <div>
      <div className="w-[75vw] h-[85vh] flex bg-blue-500 rounded-lg bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 p-4 shadow-2xl">
        <Sidebar_left />
        <Messages_Right />
      </div>
    </div>
  );
};
