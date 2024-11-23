import { useContext } from "react";
import { SidebarContext } from "../../context/SidebarContext";
import "./ContentTop.css";
import { iconsImgs } from "../../utils/images";

export const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <div className="main-content-top">
      <div className="content-top-left">
        <button
          type="button"
          className="sidebar-toggler"
          onClick={() => toggleSidebar()}
        >
          <img src={iconsImgs.menu} />
        </button>
        <h3 className="content-top-title">Home</h3>
      </div>
      <div className="content-top-btns">
        <button className="search-btn content-top-btn" type="button">
          <img src={iconsImgs.search} alt="" />
        </button>
        <button className="notification-btn content-top-btn" type="button">
          <img src={iconsImgs.bell} alt="" />
          <span className="notification-btn-dot"></span>
        </button>

      </div>
    </div>
  );
};

export default ContentTop;
