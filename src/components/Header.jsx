import "../styles/components/Header.scss";
import LabelWithHighlight from "./LabelWithHighlight";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <LabelWithHighlight title="InterCalendar" boxh={1} boxw={17} />
      </div>
    </>
  );
};

export default Header;
