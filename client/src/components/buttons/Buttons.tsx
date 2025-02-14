import ArrowUp from "../../assets/icons/ArrowUp";
import Information from "../../assets/icons/Information";

const Buttons = () => {
  return (
    <div className="buttons_main_cont">
      <header>
        <div className="left_cont">
          Status <span>Ready</span>
        </div>
        <div className="right_cont">
          Last click <span>+0</span>
        </div>
      </header>
      <div className="status_cooldown_cont">
        <div className="status_cooldown_wrapper">
          <div className="status_cooldown_left"></div>
        </div>
        <div className="modifiers">
          Modifiers
          <Information />
        </div>
      </div>
      <div className="buttons_cont">
        <button>
          <ArrowUp num={1} />
        </button>
        <button>
          <ArrowUp num={3} />
        </button>
        <button>
          <ArrowUp num={5} />
        </button>
      </div>
    </div>
  );
};

export default Buttons;
