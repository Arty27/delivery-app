import React from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
const RowContainer = ({ flag, data }) => {
  return (
    <div
      className={`w-full flex items-center my-12 gap-3 ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap"
      }`}
    >
      {data &&
        data.map((item, i) => (
          <div
            key={item.id}
            className="w-300 min-w-[300px] md:w-[340px] md:min-w- my-12 bg-cardOverlay rounded-lg px-4 py-2 h-auto backdrop-blur-lg hover:drop-shadow-lg"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item.imageURL}
                alt=""
                className="w-40 -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.8 }}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base">{item.title}</p>
              <p className="mt-1 text-sm text-gray-500">{item.calories} calories</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
