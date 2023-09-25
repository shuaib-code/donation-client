import { useLoaderData } from "react-router-dom";
import { getData } from "../../../assets/Local";
import { useEffect, useState } from "react";
import DonateCard from "./DonateCard";

const Donation = () => {
  const itemList = useLoaderData();
  const [storeItem, setStoreItem] = useState([]);
  useEffect(() => {
    const localId = getData();
    if (itemList) {
      const donated = itemList.filter((e) => localId.includes(e.id));
      setStoreItem(donated);
    }
  }, [itemList]);
  return (
    <div className="my-20 mx-36 grid grid-cols-2 gap-6">
      {storeItem.map((e, i) => (
        <DonateCard key={i} value={e}></DonateCard>
      ))}
    </div>
  );
};

export default Donation;
