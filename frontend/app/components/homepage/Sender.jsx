import { useSelector } from "react-redux";

const Sender = ({ item }) => {
  const { authUser } = useSelector((state) => state.USER);
  const { selectedUser } = useSelector((state) => state.USER);
  return (
    <div
      className={`${
        item?.senderId === authUser?._id ? "chat-end" : "chat-start"
      } chat`}
    >
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS chat bubble component"
            src={`https://i.pravatar.cc/300`}
          />
        </div>
      </div>
      <div className="chat-header ">
        {/* {item?.senderId === authUser?._id
          ? authUser?.username
          : selectedUser?.username} */}
        <time className="text-xs text-black">12:45</time>
      </div>

      <div className="chat-bubble">{item?.message}</div>
    </div>
  );
};

export default Sender;

// _id(pin):"66aa5250c80249ff024e04e3"
// senderId(pin):"66aa5144c80249ff024e04b4"
// receiverId(pin):"66a765cf0c7709bae33837ab"
// message(pin):"You were the Chosen One!"
// createdAt(pin):"2024-07-31T15:03:44.700Z"
// updatedAt(pin):"2024-07-31T15:03:44.700Z"
// __v(pin):0

// _id(pin):"66aa5144c80249ff024e04b4"
// fullname(pin):"sumi"
// username(pin):"sumi"
// password(pin):"$2a$10$qBDrsUkORGD9DsyghPAvrucq6vyZrCVWBiF2yjww.suRSyPdikPve"
// profilePhoto(pin):"https://i.pravatar.cc/300"
// gender(pin):"male"
// createdAt(pin):"2024-07-31T14:59:16.330Z"
// updatedAt(pin):"2024-07-31T14:59:16.330Z"
// __v(pin):0
