import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-t border-gray-300">
        <Title text1={"CONTACT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          src={assets.contact_img}
          className="w-full md:max-w-[480px]"
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600"> Our Store </p>
          <p className="text-gray-500">
            {" "}
            500038 Forex Street <br /> JSD-500, Hyderabad, India{" "}
          </p>
          <p className="text-gray-500">
            {" "}
            Tel: (+91)-987-654-3210 <br /> Email: admin@Forever.com{" "}
          </p>
          <p className="font-semibold text-xl text-gray-600">
            {" "}
            Careers at Forever{" "}
          </p>
          <p className="text-gray-500">
            {" "}
            Learn more about our Teams and Job Openings{" "}
          </p>
          <button className="border border-black px-8 py-4 text-sm rounded hover:bg-black hover:text-white transition-all duration-300">
            {" "}
            Explore Jobs{" "}
          </button>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default Contact;
