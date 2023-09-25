import { Link } from "react-router-dom";

const DonateCard = ({ value }) => {
  const { title, id, cat, imgR, price, bgCat, bgCard, textBtnColor } = value;
  return (
    <div className="flex rounded-lg" style={{ backgroundColor: bgCard }}>
      <div>
        <img className="w-[220px]" src={imgR} alt={title} />
      </div>
      <div className="p-6">
        <p
          className="text-sm px-3 py-1 font-normal rounded inline-block"
          style={{ backgroundColor: bgCat, color: textBtnColor }}
        >
          {cat}
        </p>
        <p className="text-2xl text-[black] font-semibold mt-2">{title}</p>
        <p
          className="text-base my-2 font-medium"
          style={{ color: textBtnColor }}
        >
          $ {price}
        </p>

        <Link to={`/donation/${id}`}>
          <button
            className="text-[white] font-medium text-lg rounded-md py-2 px-4"
            style={{ backgroundColor: textBtnColor }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DonateCard;
