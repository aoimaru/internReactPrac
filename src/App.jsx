// import logo from './logo.svg';
import './App.css';
import colorSample from "./components/colorSample";


function App() {
  return (
    <div className="App">
      <h1> Hello React</h1>
      <colorSample color="blue" message="元気です">
        hello
      </colorSample>
    </div>

  );
}

export default App;
