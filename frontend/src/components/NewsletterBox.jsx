import React from "react";

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        {" "}
        Subscribe now & get 20% off{" "}
      </p>
      <p className="text-gray-400 mt-3">
        Subscribe today and unlock 20% off your first order!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border text-gray-300 pl-3 rounded"
      >
        <input
          required
          type="email"
          placeholder="Enter Your Email"
          className="w-full sm:flex-1 outline-none text-black"
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded-left"
        >
          {" "}
          SUBSCRIBE{" "}
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
