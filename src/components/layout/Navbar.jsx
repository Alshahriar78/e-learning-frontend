import React, { useState , useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import Modal from "../layout/Modal";
import Login from "../../pages/auth/Login";
import Signup from "../../pages/auth/Signup";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [showAccount, setShowAccount] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  const location = useLocation();

  // Determine if Dashboard button should show
  const showDashboardButton = isLogin && !location.pathname.startsWith("/dashboard");
  useEffect(() => {
    // Check if user is logged in
    const loginStatus = localStorage.getItem("isLogin") === "true";
    setIsLogin(loginStatus);

    // Optionally, get user info from localStorage
    const user = JSON.parse(localStorage.getItem("userInfo")); 
    if (user) setUserInfo(user);
  }, []);

  const handleLoginSuccess = (user) => {
  setIsLogin(true);
  setUserInfo(user);
};

  const handleLogout = () => {
    localStorage.removeItem("isLogin");
    localStorage.removeItem("userInfo");
    setIsLogin(false);
    setShowAccount(false);
  };
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
          <div className="flex flex-col gap-6 p-6 lg:p-0 lg:flex-row lg:items-center lg:gap-70">

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
            <div className="flex flex-col lg:items-end lg:justify-end gap-3 lg:flex-row lg:gap-6 lg:ml-auto">
  {!isLogin ? (
    <>
      <button
        className="border border-green-400 rounded-full px-5 py-2 text-blue-400 font-semibold"
        onClick={() => setShowLogin(true)}
      >
        Log in
      </button>
      <button
        className="bg-blue-600 text-white rounded-full px-5 py-2 font-semibold hover:bg-blue-700"
        onClick={() => setShowSignup(true)}
      >
        Sign up
      </button>
    </>
  ) : (
    <>
      {/* Dashboard Button */}
      {showDashboardButton && (
        <Link
          to="/dashboard"
          className="bg-blue-600 text-white rounded-full px-5 py-2 font-semibold hover:bg-blue-700"
        >
          Dashboard
        </Link>
      )}

      {/* My Account Button */}
      <button
        className="bg-green-500 text-white rounded-full px-4 py-2 font-semibold hover:bg-green-600"
        onClick={() => setShowAccount(!showAccount)}
      >
        Profile
      </button>
    </>
  )}
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

      {/* Account Popup */}
      {showAccount && isLogin && (
        <div className="absolute right-4 top-20 bg-white shadow-lg rounded-lg p-5 w-64 z-50">
          <h3 className="font-bold text-lg mb-2">Account Info</h3>
          <p><strong>Username:</strong> {userInfo?.profile?.name || userInfo?.username || "N/A"}</p>
         <p><strong>Email:</strong> {userInfo?.profile?.email || userInfo?.email || "N/A"}</p>
         <p><strong>Phone:</strong> {userInfo?.profile?.phone || userInfo?.phone || "N/A"}</p>
          <button
            className="mt-4 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      )}

    </div> 
  );
};



