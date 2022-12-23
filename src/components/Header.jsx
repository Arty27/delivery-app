import React from "react";
import Logo from "../assets/img/logo.png";
import Avatar from "../assets/img/avatar.png";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { MdShoppingBasket, MdAdd, MdLogout } from "react-icons/md";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { app } from "../firebase.config";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";
import { useState } from "react";
import "../css/components.css";
const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="w-screen fixed z-50 py-4 px-6  md:py-6 md:px-16 bg-primary">
      {/* desktop & tablet */}
      <div className="hidden md:flex w-full items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>
        <div className="flex items-center gap-8">
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className="flex items-center gap-8"
          >
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Menu
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Service
            </li>
          </motion.ul>
          <div className="flex items-center rounded-md ml-auto cursor-pointer relative">
            <MdShoppingBasket className="text-2xl text-textColor cursor-pointer" />
            <div className="w-5 h-5 rounded-full bg-cartNumBg absolute -top-2 -right-2 border border-white flex items-center justify-center">
              <p className="text-white text-xs font-semibold">2</p>
            </div>
          </div>
          <div className="relative ">
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              alt="avatar"
              className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
              onClick={login}
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-12"
              >
                {user && user.email === "2010s2723@gmail.com" && (
                  <Link
                    to={"/createItem"}
                    onClick={() => setIsMenu(false)}
                  >
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor rounded-lg text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  onClick={logout}
                  className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-lg text-base"
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="mobile flex items-center justify-between md:hidden w-full h-full">
        <div className="flex items-center justify-center cursor-pointer relative">
          <MdShoppingBasket className="text-2xl text-textColor cursor-pointer" />
          <div className="w-5 h-5 rounded-full bg-cartNumBg absolute -top-2 -right-2 border border-white flex items-center justify-center">
            <p className="text-white text-xs font-semibold">2</p>
          </div>
        </div>

        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="logo" className="w-8 object-cover" />
          <p className="text-headingColor text-xl font-bold">City</p>
        </Link>

        <div className="relative">
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : Avatar}
            alt="avatar"
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full"
            onClick={login}
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-12"
            >
              {user && user.email === "2010s2723@gmail.com" && (
                <Link to={"/createItem"}>
                  <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor rounded-lg text-base">
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className="flex flex-col">
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Menu
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Home
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  About Us
                </li>
                <li className="text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
                  Service
                </li>
              </ul>
              <p
                className="m-2 px-4 py-2 flex items-center gap-3 justify-center bg-gray-300 cursor-pointer hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor rounded-lg text-base"
                onClick={logout}
              >
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
