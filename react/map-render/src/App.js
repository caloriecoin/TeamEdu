import React from "react";

import 목표콤포넌트 from "./components/GoalList";
import 기사콤포넌트 from "./components/기사리스트";

import "./App.css";

const App = () => {

  const [상태 , set상태] = useState

  const 목표배열 = [
    { id: "1", text: "12월까지 앱하나 만들기" },
    { id: "2", text: "백마 친구 사귀기 !!!!" },
    { id: "3", text: "1월까지 레이 뽑기" },
  ];

  const 기사데이터베이스 = [
    {
      id: "1",
      img: "트럼프 이미지",
      title: "트럼프의 거시기 ",
      신문사: "조선일보",
      보도시간: "2022년10월26일06시",
    },
    {
      id: "2",
      img: "파이낸셜뉴스",
      title: "공공분양 50만가구",
      신문사: "파이낸셜뉴스",
      보도시간: "2022년10월26일04시",
    },
  ];


  //Modle
  const [상태 , set상태] = useState("soso");

  //Controller
  fucntion 빡치게만들기(){
    set상태("빡침")
  }

  //View
  return (
   


    <div className="course-goals">
      <h2>목표 !!</h2>
      <목표콤포넌트 목표들={목표배열} />
      <기사콤포넌트 기사데이터베이스={기사데이터베이스} />
      {상태임}
    </div>
  )
};

export default App;
 /* 
      배터리상태 ="꺼지기10분" 
      ? <돈냈음/>
      : <로그인안한사람이 보는UI/>
    */