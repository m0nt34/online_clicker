import Dot from "../../assets/icons/Dot";
import Information from "../../assets/icons/Information";
import System from "../../assets/icons/System";
import Time from "./Time";

const Villain = () => {
  return (
    <div className="villain_main_cont">
      <header>
        <div className="header_left_side_cont">
          <System />
          System
          <Dot />
          <Time />
        </div>
        <div className="header_right_side_cont">
          Concern level
          <span>1</span>
          <Information />
        </div>
      </header>
      <p className="mocking_text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
        dolorem ad molestiae aliquid odit eos incidunt modi excepturi?
      </p>
    </div>
  );
};

export default Villain;
