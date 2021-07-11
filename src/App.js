import "./App.css";
import ClassCounterUe from "./components/ClassCounterUe";
import HooksCounterUe from "./components/HooksCounterUe";
import ClassMouse from "./components/ClassMouse";
import HooksMouse from "./components/HooksMouse";
import MouseCounter from "./components/MouseCounter";

function App() {
  return (
    <div className='App'>
      {/* <HooksCounterUe /> */}
      {/* <ClassCounterUe /> */}
      {/* <Mouse /> */}
      <MouseCounter />
    </div>
  );
}

export default App;
