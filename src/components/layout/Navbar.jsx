import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../layout/Modal";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <nav className="bg-white px-4 py-3 shadow-md">
      <div className="relative flex items-center justify-between lg:justify-start lg:gap-24">

        {/* Logo */}
        <img src="/logo.png" className="h-12 w-auto" alt="Logo" />

        {/* Mobile toggle */}
        <button
          className="text-3xl lg:hidden"
          onClick={() =>{
             setOpen(!open)
            }}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Menu */}
        <div
          className={`absolute left-0 top-full w-full z-50 bg-white shadow-md lg:static lg:w-auto lg:shadow-none
          ${open ? "block" : "hidden"} lg:block`}
        >
          <div className="flex flex-col gap-6 p-6 lg:p-0 lg:flex-row lg:items-center lg:gap-24">

            {/* Links */}
            <ul className="flex flex-col gap-4 lg:flex-row lg:gap-12">
              {["Home", "Courses", "Shop", "About us", "Contact us"].map((item) => (
                <li
                  key={item}
                  className="font-medium text-[18px] text-blue-400 hover:text-orange-500 cursor-pointer"
                >
                  {item === "Home" ? (
                      <Link to="/">{item}</Link>
                    ) :item ==="Courses" ? (
                      <Link to="/courses" >{item}</Link>
                    ): item === "Shop" ? (
                      <Link to="/shop">{item}</Link>
                    ) : (
                      item
                    )}
                </li>
              ))}
            </ul>

            {/* Buttons */}
            <div className="flex flex-col gap-3 lg:flex-row lg:gap-6">
              <button className="border border-green-400 rounded-full px-5 py-2 text-blue-400 font-semibold" onClick={() => setShowLogin(true)}>
                Log in
              </button>
              <button className="bg-blue-600 text-white rounded-full px-5 py-2 font-semibold hover:bg-blue-700" onClick={() => setShowSignup(true)}>
                Sign up
              </button>
            </div>

          </div>
        </div>

      </div>
    </nav>
    {showLogin && (
        <Modal onClose={() => setShowLogin(false)}>
          <Login closeModal={() => setShowLogin(false)} />
        </Modal>
      )}

      {showSignup && (
        <Modal onClose={() => setShowSignup(false)}>
          <Signup closeModal={() => setShowSignup(false)} />
        </Modal>
      )}
    </div>
    

    
  );
};



