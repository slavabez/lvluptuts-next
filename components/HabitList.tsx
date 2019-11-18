import React from "react";
import Habit from "./Habit";

interface HabitListProps {
  habits: string[];
}

const HabitList = (props: HabitListProps) => {
  return (
    <section>
      <h2>My Habits</h2>
      {props.habits.map(h => (
        <Habit key={h} habit={h} />
      ))}
    </section>
  );
};

export default HabitList;
