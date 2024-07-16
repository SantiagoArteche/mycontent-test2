import { useState } from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
export const RightSideBar = () => {
  const [size, setSize] = useState("small");

  return (
    <div className="col-span-1 mx-2">
      <div className="flex items-center justify-between p-2">
        <h3>
          <span className="text-gray-500">Group </span>
          {">"} Field
        </h3>
        <BiDotsHorizontalRounded />
      </div>
      <hr />
      <div className="xl:flex justify-between mt-3 items-center w-full">
        <h3 className="text-gray-600 me-8">Label</h3>
        <span className="bg-gray-200 p-1 rounded w-full text-gray-600">
          Estado
        </span>
      </div>
      <hr className="mt-4" />

      <h3 className="font-semibold">Data</h3>
      <div className="justify-between mt-3 xl:flex">
        <h3 className="text-gray-600 me-8">Source</h3>
        <div className="flex flex-col mb-3 w-full">
          <span className="bg-gray-200 p-1 rounded text-gray-600">Estado</span>
          <button className="border border-gray-300 p-2 rounded mt-3">
            Edit field
          </button>
        </div>
      </div>

      <hr className="py-2" />
      <h3 className="font-semibold">Appearance</h3>
      <div className="flex justify-between mt-4 items-center">
        <h3 className="text-gray-600">Size</h3>
        <div className="flex bg-gray-300 rounded items-center p-1">
          <button
            className={`p-1 mr-2 ${
              size === "small"
                ? "text-blue-600 rounded bg-white"
                : " text-gray-600"
            } `}
            onClick={() => setSize("small")}
          >
            Small
          </button>
          <button
            className={`p-1 ${
              size === "large"
                ? "text-blue-600 rounded bg-white"
                : " text-gray-600"
            } `}
            onClick={() => setSize("large")}
          >
            Large
          </button>
        </div>
      </div>
    </div>
  );
};
