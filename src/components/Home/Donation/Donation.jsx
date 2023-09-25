import { Link, useLoaderData } from "react-router-dom";
import { getData } from "../../../assets/Local";
import { useEffect, useState } from "react";
import DonateCard from "./DonateCard";

const Donation = () => {
  const itemList = useLoaderData();
  const [storeItem, setStoreItem] = useState([]);
  const [btn, setBtn] = useState("hidden");
  const [slice, setSlice] = useState(4);
  const [hidden, setHidden] = useState("inline-block");
  useEffect(() => {
    const localId = getData();
    setHidden(localId[0] ? "hidden" : "inline-block");
    if (itemList) {
      const donated = itemList.filter((e) => localId.includes(e.id));
      setStoreItem(donated);
      if (donated.length < 5) {
        setBtn("hidden");
      } else {
        setBtn("inline-block");
      }
    }
  }, [itemList]);
  const handle = () => setBtn("hidden");
  const handleBtn = () => {
    setSlice(storeItem.length);
    handle();
  };
  return (
    <>
      <div className="mt-24 mx-36 grid grid-cols-2 gap-6">
        {storeItem.slice(0, slice).map((e, i) => (
          <DonateCard key={i} value={e}></DonateCard>
        ))}
      </div>
      <div className="flex justify-center items-center py-11">
        <button
          onClick={handleBtn}
          className={`text-base font-medium text-[white] bg-[#009444] rounded-lg py-4 px-7 ${btn}`}
        >
          See All
        </button>
      </div>
      <div className={`flex items-center justify-center my-12 ${hidden}`}>
        <h1 className="text-2xl font-semibold text-black">
          You have not donated yet. Go to
          <Link to="/">
            <span className="text-[#ff4747] font-medium underline"> Home </span>
          </Link>
          to donate.
        </h1>
      </div>
    </>
  );
};

export default Donation;
