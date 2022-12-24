import React, { useRef, useState } from "react";
import { MdShoppingBasket } from "react-icons/md";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();
  const [{cartItems}, dispatch]=useStateValue();
  const [items,setItems]=useState([]);

  const addToCart=(item)=>{
    setItems([...cartItems,item])
    dispatch({
      type:actionType.SET_CARTITEMS,
      cartItems:[...cartItems,item]
    })
    localStorage.setItem("cartItems",JSON.stringify([...cartItems,item]))

  }
  useEffect(() => {
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);
  return (
    <div
      ref={rowContainer}
      className={`w-full flex items-center gap-3 scroll-smooth ${
        flag ? "overflow-x-scroll scrollbar-none" : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data &&
        data.map((item, i) => (
          <div
            key={item?.id}
            className="w-300 min-w-[300px] h-[220px] md:w-[340px] md:min-w- my-12 bg-cardOverlay rounded-lg px-4 py-2 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between"
          >
            <div className="w-full flex items-center justify-between">
              <motion.img
                whileHover={{ scale: 1.2 }}
                src={item?.imageURL}
                alt=""
                className="w-auto h-36 -mt-8 drop-shadow-2xl"
              />
              <motion.div
                whileTap={{ scale: 0.8 }}
                onClick={()=>addToCart(item)}
                className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md"
              >
                <MdShoppingBasket className="text-white" />
              </motion.div>
            </div>
            <div className="w-full flex flex-col items-end justify-end">
              <p className="text-textColor font-semibold text-base">{item?.title}</p>
              <p className="mt-1 text-sm text-gray-500">{item?.calories} calories</p>
              <div className="flex items-center gap-8">
                <p className="text-lg text-headingColor font-semibold">
                  <span className="text-sm text-red-500">$</span> {item?.price}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default RowContainer;
