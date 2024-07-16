import { LeadDate } from "./LeadDate/LeadDate";
import { LeadView } from "./LeadView/LeadView";
import { LeftSideBarCloser } from "./LeftSideBarCloser/LeftSideBarCloser";

export const MainView = () => {
  return (
    <div className="col-span-6 p-5 bg-gray-100">
      <div className="grid grid-cols-12 border border-gray rounded-lg bg-white">
        <LeftSideBarCloser />
        <LeadDate />
        <LeadView />
      </div>
    </div>
  );
};
