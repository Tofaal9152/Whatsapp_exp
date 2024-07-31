"use client";
import axios from "axios";
import { useEffect } from "react";

const sendMessage = () => {
  useEffect(() => {
    const sendMessage = async () => {
      axios.defaults.withCredentials = true;
      const res = await axios.post(
        `http://localhost:8000/api/v1/message/sendmessage/66a76eb587111cd2bc8865b6`
      );
    };
    sendMessage();
  }, []);
};

export default sendMessage;
