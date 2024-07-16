import { BsList } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { CloserContext } from "../../context/CloserContext/CloserContext";
export const Topbar = () => {
  const { closer } = useContext(CloserContext);

  return (
    <>
      <div className="p-3 text-sm">
        <ul className="flex justify-between mx-5">
          <div className="flex gap-4 text-gray-800 items-center">
            <li className="flex items-center gap-2">
              <BsList className="mt-1" /> <span>Pages</span>
            </li>
            <li className="flex">
              <span>Preview</span>
            </li>
            <li className="flex gap-2 items-center">
              <FaUserCircle color="orange" size={20} />
              <p>
                View as{" "}
                <span className="font-semibold capitalize">{closer}</span>
              </p>
              <IoIosArrowDown />
            </li>
          </div>
          <div className="flex gap-4 items-center">
            <li className="text-gray-600">No Changes</li>
            <li className="text-gray-400">Last Published Jun 27, 2024</li>
            <li>
              <button className="rounded-full px-4 py-1 border border-gray-300">
                Share
              </button>
            </li>
            <li>
              <button className="bg-blue-400 rounded-full px-4 py-1 text-white">
                Publish
              </button>
            </li>
            <li>
              <button className="rounded-full px-4 py-1 border border-gray-300">
                Done
              </button>
            </li>
            <li>
              <IoIosArrowUp />
            </li>
          </div>
        </ul>
      </div>
      <hr />
    </>
  );
};
