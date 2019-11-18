import React from "react";
import { Field, Form } from "@leveluptuts/fresh";

interface HabitFormProps {
  setHabits: (any) => void;
}

const HabitForm = (props: HabitFormProps) => {
  return (
    // @ts-ignore
    <Form
      onSubmit={data => {
        props.setHabits(prevState => [...prevState, data.habit]);
      }}
    >
      <Field>Habit</Field>
    </Form>
  );
};

export default HabitForm;
