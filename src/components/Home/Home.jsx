import { useEffect, useState } from "react";
import Card from "./Card/Card";

const Home = () => {
  const [card, setCard] = useState([]);
  useEffect(() => {
    fetch("donation.json")
      .then((r) => r.json())
      .then((d) => setCard(d));
  }, []);
  return (
    <div className="mx-36 my-28 grid grid-cols-4 gap-6">
      {card.map((e, i) => (
        <Card key={i} card={e}></Card>
      ))}
    </div>
  );
};

export default Home;
