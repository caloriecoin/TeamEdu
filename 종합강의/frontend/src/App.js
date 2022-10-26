import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";
import Axios from "axios";

function App() {
  const [name, 이름옮겨] = useState(null);
  const [age, 나이옮겨] = useState(null);
  const [years, 연도옮겨] = useState(null);

  Axios.get("http://192.168.0.31:5000/ceo").then(function (소현컴응답) {
    이름옮겨(소현컴응답.data.name);
    나이옮겨(소현컴응답.data.age);
    연도옮겨(소현컴응답.data.years);
  });

  //이미지도 두어서 돌아가게 하면 꿀잼일듯

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {name}씨는 {age}살 {years}입니다.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </header>
    </div>
  );
}

export default App;
