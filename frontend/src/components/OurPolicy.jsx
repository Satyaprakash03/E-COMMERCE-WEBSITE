import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img src={assets.exchange_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold"> Easy Exchange </p>
        <p className="text-gray-400 text-sm">
          {" "}
          Shop with confidence - hassle-free exchanges made simple and easy.{" "}
        </p>
      </div>
      <div>
        <img src={assets.quality_icon} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold"> 7-Days Return </p>
        <p className="text-gray-400 text-sm">
          {" "}
          Changed your mind? Enjoy easy returns within 7 days.{" "}
        </p>
      </div>
      <div>
        <img src={assets.support_img} alt="" className="w-12 m-auto mb-5" />
        <p className="font-semibold"> 24/7 Customer Support </p>
        <p className="text-gray-400 text-sm">
          {" "}
          We’re here for you anytime, anywhere—24/7 Support.{" "}
        </p>
      </div>
    </div>
  );
};

export default OurPolicy;
