import { useContext, useState } from "react";
import { FaRegFolder } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import { ViewContext } from "../../context/ViewContext/ViewContext";

export const LeftSidebar = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    show ? setShow(false) : setShow(true);
  };

  const { handleSelect, select } = useContext(ViewContext);

  return (
    <div className="flex flex-col gap-5 col-span-1 mt-4 p-2">
      <h2 className="ps-5 font-semibold text-gray-800">
        My Content Academy - CRM
      </h2>
      <hr className="p-0" />
      <div className="ps-5">
        <div className="flex justify-between items-center">
          <span className="text-lg text-gray-700 font-semibold">Interface</span>
          <button
            className="text-gray-500 text-2xl hover:text-black"
            onClick={handleShow}
          >
            +
          </button>
        </div>

        <div className={`p-3 text-gray-700 ${show ? "block" : "hidden"}`}>
          <div className="flex items-center gap-3 mb-2 ">
            <FaRegFolder />
            <span>CRM Closers</span>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-1 ms-[6px] w-[2px] bg-gray-200" />
            <div className="col-span-11 flex flex-col items-start">
              <button
                onClick={() => handleSelect("Closer View")}
                className={`p-2
                    ${select === "Closer View" && "bg-gray-100  rounded-lg"}`}
              >
                Closer View
              </button>
              <button
                onClick={() => handleSelect("Master View")}
                className={`p-2
                    ${select === "Master View" && "bg-gray-100  rounded-lg"}`}
              >
                Master View
              </button>
              <button
                onClick={() => handleSelect("Daily View")}
                className={`p-2
                  ${select === "Daily View" && "bg-gray-100  rounded-lg"}`}
              >
                Daily View
              </button>
            </div>
          </div>
        </div>

        <hr className="mt-4" />
        <div className="flex flex-col gap-3 mt-4">
          <div className="flex justify-between items-center">
            <button className="text-lg text-gray-700 font-semibold">
              Forms
            </button>
            <div className="flex items-center gap-5">
              <RiErrorWarningLine color="gray" />
              <span className="text-gray-500 text-2xl hover:text-black cursor-pointer">
                +
              </span>
            </div>
          </div>
          <span className="text-start text-gray-700">Nuevo Alumno de CEO5</span>
        </div>
      </div>
    </div>
  );
};
