import CounterExample from "./CounterExample"
import PrevState from "./PrevState"
import PrevStateWithDependency from "./PrevStateWithDependency"
import ControlledForm from "./ControlledForm"
import './App.css';

function App() {

  return (
    <div className="App">

      <CounterExample />
      <PrevState />
      <PrevStateWithDependency />
      <ControlledForm />

    </div>
  );
}

export default App;
