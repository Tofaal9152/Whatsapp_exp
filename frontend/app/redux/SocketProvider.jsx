"use client";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import io from "socket.io-client";

const SocketProvider = ({ children }) => {
  const { authUser } = useSelector((state) => state.USER);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    if (authUser) {
      const newSocket = io(`http://localhost:8000`);
      setSocket(newSocket);

      return () => {
        newSocket.close(); // Cleanup on unmount or authUser change
      };
    }
  }, [authUser]);


  return <>{children}</>;
};

export default SocketProvider;
