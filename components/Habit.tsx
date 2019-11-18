import React from "react";
import HabitButton from "./HabitButton";

interface HabitProps {
  habit: string;
}

const Habit = (props: HabitProps) => {
  const dates = get5LastDays();
  console.log(dates);
  return (
    <article>
      <h3>{props.habit}</h3>
      <div>
        {dates.map(date => (
          <HabitButton key={date.getUTCDate()} date={date} />
        ))}
      </div>
    </article>
  );
};

const get5LastDays = () => {
  return `01234`.split(``).map(day => {
    const tempDate = new Date();
    tempDate.setDate(tempDate.getDate() + Number.parseInt(day));
    return tempDate;
  });
};

export default Habit;
