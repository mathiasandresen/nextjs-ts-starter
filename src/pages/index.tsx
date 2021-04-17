import React from "react";
import { NextPage } from "next";
import Head from "next/head";

const HomePage: NextPage = () => (
  <>
    <Head>
      <title>My nextjs home page</title>
    </Head>
    <div>
      <p>Hello World</p>
    </div>
  </>
);

export default HomePage;
