import React, { useEffect, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { categories } from "../utils/Data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";

const MenuContainer = () => {
  const [{ foodItems }, dispatch] = useStateValue();
  const [filter, setFilter] = useState("chicken");
  useEffect(() => {
  }, [filter])
  
  return (
    <section className="w-full my-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100 mr-auto">
          Our Menu
        </p>
        <div className="w-full flex item justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category, i) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={i}
                className={`group ${
                  filter === category.urlParamName ? "bg-red-600" : "bg-card"
                } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center
                justify-center hover:bg-red-600`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <div
                  className={`w-10 h-10 ${
                    filter === category.urlParamName
                      ? "bg-card text-textColor"
                      : "bg-red-600 text-white"
                  } rounded-full group-hover:bg-card flex items-center justify-center`}
                >
                  {category.icon}
                </div>
                <p
                  className={`text-sm ${
                    filter === category.urlParamName ? "text-white" : "text-textColor"
                  } group-hover:text-white`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>
        <div className="w-full">
          <RowContainer flag={false} data={foodItems?.filter((n) => n.category === filter)} />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
