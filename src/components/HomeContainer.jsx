import React from "react";
import Delivery from "../assets/img/delivery.png";
import BgImg from "../assets/img/heroBg.png";
import heroData from "../utils/Data";
const HomeContainer = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-2" id="home">
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-6">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-semibold">
            Bike Delivery
          </p>
          <div className="w-8 h-8 overflow-hidden rounded-full bg-white drop-shadow-xl">
            <img
              src={Delivery}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold tracking-wide">
          The Fastest Delivery in{" "}
          <span className="text-orange-600 text-[3rem] lg:text-[5rem]">
            Your City
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem ipsum dolor sit amet, conse ctetur adipis icing elit. Omnis,
          minima assumenda. Reiciendis, sunt. Consequatur animi nobis eos nisi
          dolor repudiandae cumque aut illum iste ratione iure, itaque, quasi
          quam dolorum?
        </p>
        <button
          type="button"
          className="bg-gradient-to-br from-orange-400 to-orange-600 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100 text-white"
        >
          Order Now
        </button>
      </div>
      <div className="py-2 flex-1">
        <div className="w-full flex items-center justify-center relative">
          <img
            src={BgImg}
            className="ml-auto h-420 w-full lg:h-650 lg:w-auto"
            alt="Hero"
          />
          <div className="w-full h-full absolute flex top-0 left-0 items-center justify-center lg:px-16 py-4 gap-4 flex-wrap">
            {heroData &&
              heroData.map((item, i) => (
                <div
                  id={i}
                  className="lg:w-190 p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg"
                >
                  <img
                    src={item.img}
                    className="w-20 lg:w-40 -mt-10 lg:-mt-20"
                    alt="ice cream"
                  />
                  <p className="tex-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">
                    {item.name}
                  </p>
                  <p className="text-[12px] lg:text-sm font-semibold text-lightextGray my-1 lg:my-2">
                    {item.desc}
                  </p>
                  <p className="text-md font-semibold text-headingColor">
                    <span className="text-xs text-red-600">$</span> {item.price}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
