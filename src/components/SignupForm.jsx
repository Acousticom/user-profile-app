import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFirebase } from "../context/FirebaseContext";

const SignupForm = () => {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const getUserDetails = (event) => {
    name=event.target.name;
    value=event.target.value
    setUserDetails({ ...userDetails, [name]: value });
  };

  const {signupUserWithEmailAndPassword,isLoggedIn}=useFirebase()
  const navigate=useNavigate()
  const signupUser=async(event)=>{
    event.preventDefault()
   await signupUserWithEmailAndPassword(userDetails.email,userDetails.password)
  }

  useEffect(()=>{if(isLoggedIn)navigate('/')},[isLoggedIn])
  return (
    <div>
      <form
        onSubmit={signupUser}
        className="border-2 text-lg p-4 rounded-lg w-[360px] mobiles:w-screen shadow-xl hover:shadow-2xl mx-2"
      >
        {/* <div htmlFor="first-name" className="flex flex-col my-2">
          <label>First Name:</label>
          <input
            required
            name="firstName"
            type="text"
            id="first-name"
            value={userDetails.firstName}
            onChange={getUserDetails}
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        <div htmlFor="last-name" className="flex flex-col my-2">
          <label>Last Name:</label>
          <input
            required
            name="lastName"
            type="text"
            id="last-name"
            value={userDetails.lastName}
            onChange={getUserDetails}
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div> */}
        <div htmlFor="email" className="flex flex-col my-2">
          <label>Email:</label>
          <input
            required
            name="email"
            type="email"
            id="email"
            value={userDetails.email}
            onChange={getUserDetails}
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        {/* <div htmlFor="username" className="flex flex-col my-2">
          <label>Username:</label>
          <input
            required
            name="username"
            type="text"
            id="username"
            value={userDetails.username}
            onChange={getUserDetails}
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div> */}
        <div htmlFor="password" className="flex flex-col my-2">
          <label>Password:</label>
          <input
            required
            name="password"
            type="password"
            id="password"
            value={userDetails.password}
            onChange={getUserDetails}
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
        {/* <div htmlFor="confirm-password" className="flex flex-col my-2">
          <label>Confirm Password:</label>
          <input
            required
            name="confirmPassword"
            type="password"
            id="confirm-password"
            value={userDetails.confirmPassword}
            onChange={getUserDetails}
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div> */}
        <button
          type="submit"
          className="w-full my-3 py-2 rounded-lg bg-primaryColor text-white font-semibold"
        >
          Signup
        </button>
        <span className="text-center text-sm">
          Already have an account?{" "}
          <Link to="/login" className="text-primaryColor">
            Log in
          </Link>
        </span>
      </form>
    </div>
  );
};

export default SignupForm;
