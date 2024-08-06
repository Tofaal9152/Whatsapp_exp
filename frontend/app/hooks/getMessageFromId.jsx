import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMessagesRedux } from "../redux/features/user/userSlice";

const getMessageFromId = () => {
  const dispatch = useDispatch()
  const { selectedUser } = useSelector((state) => state.USER);

  useEffect(() => {
    const getMessageFromId = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8000/api/v1/message/getmessages/${selectedUser?._id}`
        );
        dispatch(setMessagesRedux(res?.data?.message?.messages));
        // console.log(res?.data?.message?.messages);
      } catch (error) {
        // console.log(error);
      }
    };
    getMessageFromId();
  }, [selectedUser]);
};

export default getMessageFromId;
