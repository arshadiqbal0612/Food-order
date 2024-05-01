import React, { useEffect, useState } from "react";

const useOnline = () => {
  const [status, setstatus] = useState(true);
  const handleonline = () => {
    setstatus(true);
  };

  const handleoffline = () => {
    setstatus(false);
  };

  useEffect(() => {

    window.addEventListener("online", handleonline);
    window.addEventListener("offline",handleoffline);
    // while unmounting
    return () => {
      window.removeEventListener("offline", handleonline);
      window.removeEventListener("online",handleoffline);
    };

  }, []);

  return status;
};

export default useOnline;
