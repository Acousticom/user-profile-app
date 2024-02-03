import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";

const LoginForm = () => {
  const [userLoginDetails, setUserLoginDetails] = useState({
    email: "",
    password: "",
  });
  const { loginUserWithEmailAndPassword,isLoggedIn } = useFirebase();
  const navigate=useNavigate()
  let name, value;
  const getUserDetails = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserLoginDetails({ ...userLoginDetails, [name]: value });
  };

  const loginUser =async (event) => {
    event.preventDefault();
   const result=await loginUserWithEmailAndPassword(
      userLoginDetails.email,
      userLoginDetails.password
    );
    console.log(result)
  };

  useEffect(()=>{if(isLoggedIn)navigate('/')},[isLoggedIn])
  return (
    <div>
      {" "}
      <form className="flex flex-col gap-3" onSubmit={loginUser}>
        <div className="flex  flex-col gap-1">
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            type="text"
            id="email"
            value={userLoginDetails.email}
            onChange={getUserDetails}
            className="block w-full p-2 sm:text-sm border border-black
         outline-primaryColor rounded-md"
          />
        </div>

        <div className="flex  flex-col gap-1">
          <label htmlFor="password">Password</label>
          <input
            required
            name="password"
            type="password"
            id="password"
            value={userLoginDetails.password}
            onChange={getUserDetails}
            className="block w-full p-2 sm:text-sm border border-black
         outline-primaryColor rounded-md"
          />
        </div>

        <div className="flex flex-col gap-3 my-6">
          <button
            type="submit"
            className=" bg-primaryColor text-lg text-white py-2 rounded-md"
          >
            Login
          </button>
        </div>
        <span className="text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-primaryColor">
            Create one
          </Link>
        </span>
      </form>
    </div>
  );
};

export default LoginForm;
