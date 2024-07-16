import { Topbar } from "../Topbar/Topbar";
import { LeftSidebar } from "../LeftSidebar/LeftSidebar";
import { MainView } from "../MainView/MainView";
import { RightSideBar } from "../RightSideBar/RightSideBar";

export const Main = () => {
  return (
    <>
      <Topbar />
      <div className="grid grid-cols-8">
        <LeftSidebar />
        <MainView />
        <RightSideBar />
      </div>
    </>
  );
};
