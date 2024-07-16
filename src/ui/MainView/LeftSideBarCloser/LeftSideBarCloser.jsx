import { useContext } from "react";
import { ViewContext } from "../../../context/ViewContext/ViewContext";

export const LeftSideBarCloser = () => {
  const { select, handleSelect } = useContext(ViewContext);

  return (
    <>
      <div className="bg-[#5e2d76] col-span-2 p-3 text-white rounded-s-lg">
        <h2 className="text-xl font-semibold text-center ">
          MyContent Academy - ...
        </h2>
        <div className="flex flex-col px-6 py-5">
          <button
            className={`text-start p-2 rounded  ${
              select === "Closer View" && "bg-[#3f1655] font-semibold"
            }`}
            onClick={() => handleSelect("Closer View")}
          >
            Closer View
          </button>
          <button
            className={`text-start p-2 rounded ${
              select === "Master View" && "bg-[#3f1655] font-semibold"
            }`}
            onClick={() => handleSelect("Master View")}
          >
            Master View
          </button>
          <button
            className={`text-start p-2 rounded ${
              select === "Daily View" && "bg-[#3f1655] font-semibold"
            }`}
            onClick={() => handleSelect("Daily View")}
          >
            Daily View
          </button>
        </div>
      </div>
    </>
  );
};
