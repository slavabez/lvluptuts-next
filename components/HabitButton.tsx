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
    </span>
  );
};

export default HabitButton;
