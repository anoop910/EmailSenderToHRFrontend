import React from "react";
import profilePic from "../image/LinkedInprofile.png";

const Navbar = () => {
  return (
    <div className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold">Email Manager</h1>

      <div className="flex items-center gap-6">
        <img
          src={profilePic}
          alt="profile"
          className="w-10 h-10 rounded-full border"
        />
      </div>
    </div>
  );
};

export default Navbar;
