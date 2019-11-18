import React from "react";
import Habit from "./Habit";

interface HabitListProps {
  habits: string[];
}

const HabitList = (props: HabitListProps) => {
  return (
    <section>
      <h2>My Habits</h2>
      {props.habits.map((h, index) => (
        <Habit key={h + "-" + index} habit={h} index={index} />
      ))}
    </section>
  );
};

export default HabitList;
