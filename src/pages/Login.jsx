import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex items-center gap-3">
        {/* <img src={image} alt="" className="w-80 sDevices:hidden" /> */}
        <LoginForm />
      </div>
    </div>
  )
}

export default Login