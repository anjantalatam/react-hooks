import "./App.css";
import ClassCounterUe from "./components/ClassCounterUe";
import HooksCounterUe from "./components/HooksCounterUe";
import ClassMouse from "./components/ClassMouse";
import HooksMouse from "./components/HooksMouse";
import MouseCounter from "./components/MouseCounter";
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalFunctionalCounter from "./components/IntervalFunctionalCounter";
import DataFetching from "./components/DataFetching";

function App() {
  return (
    <div className='App'>
      {/* <HooksCounterUe /> */}
      {/* <ClassCounterUe /> */}
      {/* <Mouse /> */}
      {/* <MouseCounter /> */}
      {/* <IntervalFunctionalCounter /> */}
      <DataFetching />
      {/* <IntervalClassCounter /> */}
    </div>
  );
}

export default App;
