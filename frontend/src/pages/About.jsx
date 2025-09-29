import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t border-gray-300">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          src={assets.about_img}
          className="w-full md:max-w-[450px]"
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            {" "}
            At Forever, we believe shopping should be more than just a
            transaction—it should be an experience that lasts. Founded with the
            vision of bringing quality, style, and value under one roof, we
            strive to offer a seamless online marketplace where every product
            speaks of trust and excellence. From everyday essentials to
            trendsetting collections, our platform is built to cater to the
            modern shopper who values both convenience and authenticity.{" "}
          </p>
          <p>
            {" "}
            What sets Forever apart is our commitment to creating lasting
            connections. We don’t just deliver products; we deliver
            promises—promises of superior quality, unmatched service, and a
            shopping experience that keeps you coming back. With a passion for
            innovation and a customer-first approach, we are here to redefine
            online shopping and make every purchase feel timeless.{" "}
          </p>
          <b className="text-gray-800"> OUR MISSION </b>
          <p>
            At Forever, our mission is to make online shopping simple, reliable,
            and inspiring. We are driven by the idea of bringing people closer
            to the products they love—whether it’s essentials for everyday
            living or unique finds that spark joy. Every step we take is guided
            by our commitment to quality, trust, and customer satisfaction.
          </p>
        </div>
      </div>
      <div className="text-2xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US ?"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Quality Assurance </b>
          <p className="text-gray-600">
            “Every item at FOREVER is a promise of uncompromising quality.”
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Convenience </b>
          <p className="text-gray-600">
            “Shop anytime, anywhere—seamless convenience at your fingertips.”
          </p>
        </div>
        <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b> Exceptional Customer Service </b>
          <p className="text-gray-600">
            “Dedicated support, always ready to assist you with care.”
          </p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  );
};

export default About;
