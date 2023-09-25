import { useLoaderData, useParams } from "react-router-dom";
import { setData } from "../../../assets/Local";
import { Toaster } from "react-hot-toast";

const Donate = () => {
  const card = useLoaderData();
  const { id } = useParams();
  const details = card.find((e) => e.id == id);
  return (
    <>
      <div className="mx-48 my-24">
        <div className="relative">
          <img className="w-full rounded-xl" src={details.img} alt="" />
          <div className="bg-[#0000008d] absolute w-full h-28 bottom-0 right-0 rounded-b-xl flex justify-start items-center">
            <button
              onClick={() => setData(id, details.title)}
              className="ml-8 text-lg font-medium text-[white] py-3 px-5 rounded-lg inline-block"
              style={{ backgroundColor: details.textBtnColor }}
            >
              Donate ${details.price}
            </button>
          </div>
        </div>
        <div>
          <h1 className="mt-14 text-4xl font-bold">{details.title}</h1>
          <p className="mt-6 text-sm font-medium">{details.description}</p>
        </div>
        <Toaster position="top-center" reverseOrder={false} />
      </div>
    </>
  );
};

export default Donate;
