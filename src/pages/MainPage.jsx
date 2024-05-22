import Header from "../components/Header";
import SideBar from "../components/SideBar";

import "../styles/pages/MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="scaffold">
        <SideBar />
        <div className="main-body">
          <Header />
        </div>
      </div>
    </>
  );
};

export default MainPage;
