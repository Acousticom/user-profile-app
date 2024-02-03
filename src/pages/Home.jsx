import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="flex justify-center h-[70vh] items-center text-center">
      <div>
        <h1 className="text-xl font-semibold my-4">Welcome to User Profile app</h1>
        <button onClick={() => navigate("/profile")} className="bg-primaryColor px-4 py-2 text-xl text-white rounded-md">Profile</button>
      </div>
    </div>
  );
};

export default Home;
