import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo} alt="" className="mb-5 w-32" />
          <p className="w-full md:w-2/3 text-gray-600">
            FOREVER brings you timeless style and unmatched quality—curated
            collections designed to elevate your look and make every moment
            unforgettable. From the latest trends to classic essentials, FOREVER
            is where fashion truly lasts. Shop Now!
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-3"> COMPANY </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li> Home </li>
            <li> About Us</li>
            <li> Delivery </li>
            <li> Privacy Policy </li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5"> GET IN TOUCH </p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li> +91-9876543210 </li>
            <li> contact@forever.com </li>
          </ul>
        </div>
      </div>

      <div>
        <hr className="text-gray-300" />
        <p className="py-5 text-sm text-center">
          {" "}
          Copyright 2025@ Forever.com - All Rights Resevered.{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
