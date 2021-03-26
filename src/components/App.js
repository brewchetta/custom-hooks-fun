import CounterExample from "./CounterExample"
import PrevState from "./PrevState"
import PrevStateWithDependency from "./PrevStateWithDependency"
import ControlledForm from "./ControlledForm"
import Fetch from "./Fetch"
import './App.css';

function App() {

  return (
    <div className="App">

      <CounterExample />
      <PrevState />
      <PrevStateWithDependency />
      <ControlledForm />
      <Fetch />

    </div>
  );
}

export default App;
