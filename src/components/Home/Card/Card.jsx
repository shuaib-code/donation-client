import { useContext } from "react";
import { Link } from "react-router-dom";
import { overlayContext } from "../../../Root";

const Card = ({ card }) => {
  const { id, img, cat, title, textBtnColor, bgCat, bgCard } = card;
  const cardBg = { backgroundColor: bgCard, color: textBtnColor };
  const catBg = { backgroundColor: bgCat };
  const handleOverlay = useContext(overlayContext);
  return (
    <Link to={`/donation/${id}`}>
      <div onClick={() => handleOverlay(false)}>
        <img className="w-full" src={img} alt={title} />
        <div className="p-2 rounded-b-lg" style={cardBg}>
          <p
            className="font-normal text-sm my-3 rounded-md px-4 inline-block p-2"
            style={catBg}
          >
            {cat}
          </p>
          <h3 className="mb-4 text-xl font-medium">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
