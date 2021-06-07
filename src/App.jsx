// import logo from './logo.svg';
import './App.css';
import colorSample from "./components/colorSample";


function App() {
  return (
    <div className="App">
      <h1> Hello React (タグ)</h1>

      <div style={{ color: 'red' }}>文字の色を変更(直接書き込み)</div>

      <colorSample color="blue" message="元気です">
        hello
      </colorSample>
    </div>

  );
}

export default App;
