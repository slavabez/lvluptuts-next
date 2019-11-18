import React, { useState } from "react";

interface HabitButtonProps {
  date: Date;
}

const HabitButton = (props: HabitButtonProps) => {
  const [complete, setComplete] = useState(false);
  return (
    <span>
      {props.date.getDate()}/{props.date.getMonth() + 1}
      <button
        onClick={() => {
          setComplete(!complete);
        }}
      >
        {complete ? "X" : "O"}
      </button>
      <style jsx>
        {`
          span {
            display: flex;
            flex-direction: column;
          }

          span + span {
            margin-left: 20px;
          }
          
          button {
            border: none;
            margin-top: 1rem;
            background-color: transparent;
          }
        `}
      </style>
    </span>
  );
};

export default HabitButton;
