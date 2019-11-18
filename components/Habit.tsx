import React from "react";
import HabitButton from "./HabitButton";

interface HabitProps {
  habit: string;
  index: number;
}

const colors = [`#718096`, `#F56565`, `#F6E05E`, `#68D391`, `#63B3Ed`];

const Habit = (props: HabitProps) => {
  const dates = get5LastDays();
  return (
    <article>
      <h3>{props.habit}</h3>
      <div className="buttons">
        {dates.map(date => (
          <HabitButton key={date.getUTCDate()} date={date} />
        ))}
      </div>
      <style jsx>
        {`
          h3 {
            border-bottom: solid 4px ${colors[props.index % colors.length]};
            margin-top: 0;
          }

          article {
            padding: 20px;
            margin-bottom: 10px;
            border-radius: 15px;
            box-shadow: 2px 2px 15px rgba(0, 0, 0, 0.15);
          }

          .buttons {
            display: flex;
          }
        `}
      </style>
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
