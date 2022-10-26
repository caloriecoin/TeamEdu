import React from "react";

import "./GoalList.css";

const 기사콤포넌트 = ({ 기사데이터베이스 }) => {
  return (
    <ul className="goal-list">
      {기사데이터베이스.map((각각기사) => {
        return (
          <li key={각각기사.id}>
            {각각기사.img},{각각기사.title},{각각기사.신문사}
          </li>
        );
      })}
    </ul>
  );
};

export default 기사콤포넌트;
