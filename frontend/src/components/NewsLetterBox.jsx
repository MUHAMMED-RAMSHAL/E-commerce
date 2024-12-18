// eslint-disable-next-line no-unused-vars
import React from "react";

const NewsLetterBox = () => {
  const onSubmitHandler = () => {
    event.preventDefault();
  };
  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800">
        Subscribe Now & Get 20% Off
      </p>
      <p className="text-gray-400 mt-3">
        You're all set! Check your special welcome offer
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3 rounded"
      >
        <input
          className="w-full sm:flex-1 outline-none"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button
          type="submit"
          className="bg-black text-white text-xs px-10 py-4 rounded  font-semibold"
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
