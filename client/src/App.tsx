import Buttons from "./components/buttons/Buttons";
import Counter from "./components/counter/Counter";
import Villain from "./components/villain/Villain";

function App() {
  return (
    <div className="main_cont">
      <Counter />
      <div className="bottom_content_wrapper">
        <Villain />
        <Buttons />
      </div>
    </div>
  );
}

export default App;
