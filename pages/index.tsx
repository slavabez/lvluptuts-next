import React from "react";
import Layout from "../components/Layout";
import { withApollo } from "../lib/apollo";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import HabitList from "../components/HabitForm";

const HELLO_QUERY = gql`
  {
    sayHello
  }
`;

const Home = () => {
  const { error, loading, data } = useQuery(HELLO_QUERY);

  if (loading) return null;
  if (error) return null;
  console.log(data);

  return (
    <Layout>
      <div className="hero">
        <HabitList/>
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
        
      `}</style>
    </Layout>
  );
};

export default withApollo(Home);
