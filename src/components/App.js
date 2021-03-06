import CounterExample from "./CounterExample"
import PrevState from "./PrevState"
import PrevStateWithDependency from "./PrevStateWithDependency"
import ControlledForm from "./ControlledForm"
import Fetch from "./Fetch"
import LocalStorage from "./LocalStorage"
import DocumentTitle from "./DocumentTitle"
import NetworkStatus from "./NetworkStatus"
import './App.css';

function App() {

  return (
    <div className="App">

      <CounterExample />
      <PrevState />
      <PrevStateWithDependency />
      <ControlledForm />
      <Fetch />
      <LocalStorage />
      <DocumentTitle />
      <NetworkStatus />

    </div>
  );
}

export default App;
