import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Calendar from "../components/Calendar";

import "../styles/pages/MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="scaffold">
        <SideBar />
        <div className="main-body">
          <Header />
        </div>
        {/* <Calendar /> */}
      </div>
    </>
  );
};

export default MainPage;
