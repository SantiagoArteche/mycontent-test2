import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { LeadForm } from "../../../components/LeadForm";
import { useContext } from "react";
import { LeadContext } from "../../../context/LeadContext/LeadContext";

export const LeadView = () => {
  const { lead } = useContext(LeadContext);

  return (
    <div className="col-span-7 p-5 max-h-[780px] overflow-auto">
      <div className="flex gap-3 text-gray-500">
        <IoIosArrowUp />
        <IoIosArrowDown />
      </div>
      <h2 className="text-4xl mt-10 font-semibold hover:bg-blue-100 p-3 hover:rounded cursor-pointer">
        {lead[1]}
      </h2>
      <hr />
      <LeadForm />
    </div>
  );
};
