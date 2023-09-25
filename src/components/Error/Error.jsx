import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  const { status } = error;
  return (
    <div className="flex justify-center items-center mt-16">
      <div>
        <h1 className="text-6xl text-center font-bold text-[#cc2929] p-14">
          {status}
        </h1>
        <h1 className="text-4xl font-semibold">This page is not found.</h1>
      </div>
    </div>
  );
};

export default Error;
