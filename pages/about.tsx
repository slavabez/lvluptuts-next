import React, { useState } from "react";
import Head from "next/dist/next-server/lib/head";
import Nav from "../components/nav";
import Layout from "../components/Layout";


const about = () => {
  const [state, setState] = useState(false);
  return (
    <Layout>
      <h2>Lol, {state.toString()}</h2>
    </Layout>
  );
};

export default about;
