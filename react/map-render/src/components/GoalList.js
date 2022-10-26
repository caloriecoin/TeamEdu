import React from "react";

import "./GoalList.css";

const 목표콤포넌트 = ({ 목표들 }) => {
  return (
    <ul className="goal-list">
      {목표들.map((goal) => {
        return <li key={goal.id}>{goal.text}</li>;
      })}
    </ul>
  );
};

export default 목표콤포넌트;
