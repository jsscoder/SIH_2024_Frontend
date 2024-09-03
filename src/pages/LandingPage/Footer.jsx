// import { Facebook, Github, Youtube } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="max-w-screen-xl px-4 py-10 pt-20 mx-auto text-gray-500 bg-white border-t md:px-8 border-slate-200 md:py-16">
      <div className="max-w-lg sm:mx-auto sm:text-center">
        <h2 className="text-lg font-semibold text-center text-slate-900">
          Medusa ai
        </h2>
        <p className="mt-2 leading-relaxed text-center">
          Empowering the Next Generation of Secure Online Assessments – Where
          Your Success Meets Uncompromising Integrity.
        </p>
      </div>
      <ul className="items-center justify-center my-8 space-y-5 sm:flex sm:space-x-4 sm:space-y-0">
        <li className="text-sm font-medium hover:text-slate-900 text-slate-500">
          <Link to="/about">About</Link>
        </li>
        <li className="text-sm font-medium hover:text-slate-900 text-slate-500">
          <Link to="/">Help</Link>
        </li>
        <li className="text-sm font-medium hover:text-slate-900 text-slate-500">
          <Link to="/">Privacy Policy</Link>
        </li>
        <li className="text-sm font-medium hover:text-slate-900 text-slate-500">
          <Link to="/">Terms of Service</Link>
        </li>
      </ul>
      <div className="items-center justify-between mt-8 lg:mt-20 sm:flex">
        <div className="mt-4 text-sm text-center sm:mt-0">
          &copy; 2023 Medusa ai All rights reserved.
        </div>
        <div className="mt-6 sm:mt-0">
          <ul className="flex items-center justify-center space-x-4">
            <li className="flex items-center justify-center w-10 h-10 border rounded-full hover:bg-slate-100">
              <Link to="/">
                <img
                  src="/icons/facebook.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="w-5 h-5"
                />
              </Link>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full hover:bg-slate-100">
              <Link to="/">
                <img
                  src="/icons/github.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="w-5 h-5"
                />
              </Link>
            </li>

            <li className="flex items-center justify-center w-10 h-10 border rounded-full hover:bg-slate-100">
              <Link to="/">
                <img
                  src="/icons/youtube.svg"
                  alt=""
                  width={50}
                  height={50}
                  className="w-5 h-5"
                />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;