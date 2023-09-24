import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Root = () => {
  const [overlayImg, setOverlayImg] = useState([true]);
  const handleOverlayImg = (value) => setOverlayImg(value);
  return (
    <>
      <div
        className={`bg-cover ${
          overlayImg && "bg-[url('https://i.ibb.co/Y7Lrvj2/banner-bg.png')]"
        }`}
      >
        <div className="pt-12 px-36 backdrop-blur-sm bg-[#ffffffe6]">
          <div className="items-center flex justify-between">
            <div>
              <img src="https://i.ibb.co/xqhwFZP/Logo.png" alt="" />
            </div>
            <div className="flex justify-center gap-12">
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-custom-color-1" : ""
                }
                onClick={() => handleOverlayImg(true)}
              >
                Home
              </NavLink>
              <NavLink
                to="/donation"
                className={({ isActive }) =>
                  isActive ? "text-custom-color-1" : ""
                }
                onClick={() => handleOverlayImg(false)}
              >
                Donation
              </NavLink>
              <NavLink
                to="/statistics"
                className={({ isActive }) =>
                  isActive ? "text-custom-color-1" : ""
                }
                onClick={() => handleOverlayImg(false)}
              >
                Statistics
              </NavLink>
            </div>
          </div>
          <div
            className={`py-32 flex justify-center items-center ${
              overlayImg || "hidden"
            }`}
          >
            <div>
              <h1 className="font-bold text-5xl mb-10">
                I Grow By Helping People In Need
              </h1>
              <div className="flex justify-center items-center">
                <div>
                  <input
                    type="text"
                    className="text-sm font-normal p-4 rounded-l-lg border-y-2 border-[#DEDEDE] text-[#DEDEDE] border-l-2"
                    placeholder="Search here...."
                  />
                  <button className="text-base font-medium bg-custom-color-1 text-[white] py-4 px-7 rounded-r-lg">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Outlet> </Outlet>
    </>
  );
};

export default Root;
