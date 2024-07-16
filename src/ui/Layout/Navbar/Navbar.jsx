import {
  IoHelpCircleOutline,
  IoRefresh,
  IoNotificationsCircle,
} from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="bg-[#5e2d76] flex items-center text-white p-4 gap-5 w-full">
      <h1 className="text-lg font-semibold min-w-[240px] w-[10%]">
        MyContent Academy - CRM
      </h1>
      <ul className="flex justify-between w-[90%] text-gray-300">
        <div className="flex gap-5">
          <button>Data</button>
          <button>Automations</button>
          <button>Interfaces</button>
        </div>
        <div className="flex gap-5">
          <button>
            <IoRefresh size={25} />
          </button>
          <button className="flex items-center gap-1">
            <IoHelpCircleOutline size={25} /> <p>Help</p>
          </button>
          <button>
            <IoNotificationsCircle size={34} />
          </button>
          <button>
            <FaUserCircle size={34} />
          </button>
        </div>
      </ul>
    </div>
  );
};
