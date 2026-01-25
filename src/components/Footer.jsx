import React from "react";

export default function Footer() {
  return (
    <footer className="bg-sky-100 pt-14 md:pt-20 pb-8 text-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-110">
          {/* Brand */}
          <div className="text-center sm:text-left">

            <div className="w-[100px] h-[100px]">
                <img src="/public/logo.png" alt="" />
            </div>
            {/* <h2 className="text-2xl md:text-3xl font-bold text-gray-900 flex items-center justify-center sm:justify-start gap-2">
              E-learning <span className="w-3 h-3 bg-indigo-500 rounded-full inline-block" />
            </h2> */}

            <div className="flex items-center justify-center sm:justify-start gap-5 mt-6 text-2xl text-gray-900">
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-twitter"></i>
              <i className="fa-brands fa-instagram"></i>
            </div>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>Home</li>
              <li>Courses</li>
              <li>Shop</li>
              <li>About us</li>
              <li>Contact us</li>
            </ul>
          </div>

          {/* Other */}
          {/* <div className="text-center sm:text-left">
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-4">Other</h3>
            <ul className="space-y-2 md:space-y-3">
              <li>About Us</li>
              <li>Our Team</li>
              <li>Career</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div> */}

          {/* Contact */}
          <div className="space-y-5 text-center sm:text-left">
            <div className="flex gap-3 items-start justify-center sm:justify-start">
              <span className="text-indigo-500 text-xl">📍</span>
              <p className="leading-relaxed">Ullapara Bazar, Ullapara, Sirajgonj</p>
            </div>

            <div className="flex gap-3 items-center justify-center sm:justify-start">
              <span className="text-indigo-500 text-xl">📞</span>
              <p>09638698024</p>
            </div>

            <div className="flex gap-3 items-center justify-center sm:justify-start">
              <span className="text-indigo-500 text-xl">📧</span>
              <p>shawon10316641@gmail.com</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-sky-200 mt-12 md:mt-16 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-center md:text-left">
          <p>@2025 Agency. All Rights Reserved by GetNextJsTemplates.com</p>

          {/* <div className="flex gap-4 sm:gap-6">
            <span>Privacy policy</span>
            <span>Terms & conditions</span>
          </div>

          <p>Distributed by ThemeWagon</p> */}
        </div>
      </div>
    </footer>
  );
}
