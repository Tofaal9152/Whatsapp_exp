"use client";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { seGetAllUser } from "../redux/features/user/userSlice";


const getOtherUser = () => {
  const dispath = useDispatch();
  useEffect(() => {
    const getAllUser = async () => {
      try {
        axios.defaults.withCredentials = true;
        const res = await axios.get(
          `http://localhost:8000/api/v1/user/getotheruser`
        );
        const data = res?.data?.message
        dispath(seGetAllUser( data ));
        // console.log(res);
      } catch (error) {
        console.log(error);
      }
    };

    getAllUser();
  }, []);
};

export default getOtherUser;
