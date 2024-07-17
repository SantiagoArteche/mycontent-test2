import { useContext, useState } from "react";
import { ViewContext } from "../../../context/ViewContext/ViewContext";
import { TfiExchangeVertical } from "react-icons/tfi";
import { IoFilter, IoSearchOutline } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { CloserContext } from "../../../context/CloserContext/CloserContext";
import { LeadContext } from "../../../context/LeadContext/LeadContext";

export const LeadDate = () => {
  const { select } = useContext(ViewContext);
  const { sheet } = useContext(CloserContext);
  const { handleLead } = useContext(LeadContext);
  const [show, setShow] = useState([]);

  const handleShow = (leadValue) => {
    show === leadValue ? setShow([]) : setShow(leadValue);
  };
  return (
    <div className="col-span-3 p-3 border-r-2 hover:bg-blue-100 border-gray-300">
      <h2 className="text-xl mb-5 font-semibold ms-5">{select}</h2>
      <div className="flex justify-end gap-5 px-5 py-3">
        <IoFilter />
        <TfiExchangeVertical />
      </div>
      <div className="flex p-3 py-5">
        <IoSearchOutline
          size={32}
          className="bg-[rgb(255,255,255)]"
          color="gray"
        />
        <input
          type="search"
          className="w-96 p-1 bg-[rgb(255,255,255)]"
          placeholder="Search..."
        />
      </div>
      <div className="max-h-[600px] overflow-auto flex flex-col gap-3">
        {sheet.map((lead, i) => (
          <div key={i}>
            <div
              className="flex gap-3 items-center mb-2 bg-white p-2 cursor-pointer"
              onClick={() => handleShow(lead)}
            >
              {show === lead ? <IoIosArrowDown /> : <IoIosArrowUp />}
              <p>
                Fecha de Agendación: &nbsp;
                <span className="text-gray-500">{lead[0].split("T")[0]}</span>
              </p>
            </div>
            <hr className="mb-2" />
            <div className="grid grid-cols-12">
              <div className="col-span-1 ms-[6px] w-[7px] rounded bg-orange-700" />

              {show === lead && (
                <div
                  className="col-span-11 flex flex-col items-start gap-2 cursor-pointer "
                  onClick={() => handleLead(lead)}
                >
                  <h3>{lead[1]}</h3>

                  <p className="bg-orange-700 text-sm text-white rounded-full p-1">
                    {lead[8] ?? "Sin estado"}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
