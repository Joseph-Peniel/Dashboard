import { iconsImgs } from "../../utils/images";
import "./Financial.css";

const Financial = () => {
  return (
    <div className="subgrid-two-item grid-common grid-c8">
      <div className="grid-c-title">
        <h3 className="grid-c-title-text">Financial Advice</h3>
        <button className="grid-ctitle-icon" type="button">
          <img src={iconsImgs.plus} alt="" />
        </button>
      </div>
      <div className="grid-c8-content">
        <div className="text text-silver-v1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia
          totam nemo cupiditate saepe reiciendis temporibus? Dolorum
          deserunt....
        </div>
      </div>
    </div>
  );
};

export default Financial;
