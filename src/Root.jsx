import { createContext, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import Search from "./components/Search/Search";

export const overlayContext = createContext(null);

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
          <Search
            overlayImg={overlayImg}
            setOverlayImg={setOverlayImg}
          ></Search>
        </div>
      </div>
      <overlayContext.Provider value={setOverlayImg}>
        <Outlet></Outlet>
      </overlayContext.Provider>
    </>
  );
};

export default Root;
