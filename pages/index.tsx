import React, { useState } from "react";
import Layout from "../components/Layout";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import HabitForm from "../components/HabitForm";
import HabitList from "../components/HabitList";

const Home = () => {
  const [habits, setHabits] = useState([`Do the dishes`]);

  return (
    <Layout>
      <div className="hero">
        <div className="list">
          <HabitForm setHabits={setHabits} />
          <HabitList habits={habits} />
        </div>
      </div>

      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
        }
        .title,
        .description {
          text-align: center;
        }
        .list {
          max-width: 600px;
          margin: 0 auto;
        }
      `}</style>
    </Layout>
  );
};

export default withApollo(Home);
