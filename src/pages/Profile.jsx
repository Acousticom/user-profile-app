import React from 'react'

const Profile = () => {
  return (
    <div>
        <form
        // onSubmit={signupUser}
        className="border-2 text-lg p-4 rounded-lg w-[360px] mobiles:w-screen shadow-xl hover:shadow-2xl mx-2"
      >
        <div htmlFor="first-name" className="flex flex-col my-2">
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
        </div>
        <div htmlFor="confirm-password" className="flex flex-col my-2">
          <label>Confirm Password:</label>
          <input
            required
            name="confirmPassword"
            type=""
            id="confirm-password"
            value={userDetails.confirmPassword}
            onChange={getUserDetails}
            className="border-2 py-1 rounded-lg px-3 hover:border-primaryColor"
          />
        </div>
      </form>
    </div>
  )
}

export default Profile