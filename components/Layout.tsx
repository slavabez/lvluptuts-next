import React  from "react";
import Head from "next/dist/next-server/lib/head";
import Nav from "../components/nav";

const about = ({children}) => {
  return (
    <div>
      <Head>
        <title>Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      {children}
    </div>
  );
};

export default about;
