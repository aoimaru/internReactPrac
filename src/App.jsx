// import logo from './logo.svg';
import './App.css';
import ColorSample from "./components/ColorSample";
import ChartSample from "./components/ChartSample";


function App() {
  return (
    <div className="App">
      <h1> Hello React (タグ)</h1>

      <div style={{ color: 'red' }}>文字の色を変更(直接書き込み)</div>
      {/*<colorSample color="blue" message="元気です">
        hello
      <ColorSample />*/}
      <ColorSample color="blue" message="元気です">
        降水量
      </ColorSample>
      <ChartSample />
    </div>

  );
}

export default App;
