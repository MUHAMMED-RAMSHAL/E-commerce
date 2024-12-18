// eslint-disable-next-line no-unused-vars
import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2= {"  US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px] rounded"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            Our platform brings together a vast selection of high-quality
            products, competitive pricing, and a seamless shopping
            experience—all at your fingertips. Whether you're searching for the
            latest trends, everyday essentials, or unique finds, we’re here to
            help you discover and shop with ease
          </p>
          <p>
            Committed to customer satisfaction, we offer secure payment options,
            fast delivery, and top-notch support to make your journey with us
            effortless and enjoyable. Welcome to FOREVER, where shopping meets
            simplicity.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            {" "}
            we understand that convenience is key. That's why we offer features
            like hassle-free returns, 24/7 customer support, and regular updates
            on your orders, ensuring peace of mind from the moment you click
            “Add to Cart” to the moment your purchase arrives at your door.
          </p>
        </div>
      </div>
      <div className="text-4xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Thank you for choosing FOREVER. Together, let’s make shopping
            smarter, easier, and more enjoyable than ever before.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Thank you for choosing FOREVER. Together, let’s make shopping
            smarter, easier, and more enjoyable than ever before.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600">
            Thank you for choosing FOREVER. Together, let’s make shopping
            smarter, easier, and more enjoyable than ever before.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
