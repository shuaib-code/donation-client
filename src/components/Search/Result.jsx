import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Home/Card/Card";
import { useEffect, useState } from "react";

const Result = () => {
  const { catagory } = useParams();
  const item = useLoaderData();
  const [hidden, sethidden] = useState("inline-block");
  const newItem = item.filter((e) => e.cat === catagory);
  useEffect(() => {
    if (newItem[1]) {
      sethidden("hidden");
    }
  }, []);

  return (
    <div>
      <div className="mx-36 my-28 grid grid-cols-4 gap-6">
        {newItem.map((e, i) => (
          <Card key={i} card={e}></Card>
        ))}
      </div>
      <div className={`flex items-center justify-center my-12 ${hidden}`}>
        <h1 className="text-2xl font-semibold text-black">
          <span className="text-[#ff4747]">{catagory}</span> not Found
        </h1>
      </div>
    </div>
  );
};

export default Result;
