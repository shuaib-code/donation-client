import { useState } from "react";
import { Link } from "react-router-dom";

const Search = ({ overlayImg, setOverlayImg }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);
  const btnHandle = () => setOverlayImg(false);

  return (
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
              onChange={handleSearch}
              type="text"
              className="text-sm font-normal p-4 focus:text-[black] focus:text-base rounded-l-lg border-y-2 border-[#DEDEDE] text-[#DEDEDE] border-l-2"
              placeholder="Search here...."
            />
            <Link to={`/search/${search}`}>
              <button
                onClick={btnHandle}
                className="text-base font-medium bg-custom-color-1 text-[white] py-4 px-7 rounded-r-lg"
              >
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
