import Head from "next/head";

import { CustomPage } from "@/pages/_app";

const Home: CustomPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello world.</h1>
    </>
  );
};

export default Home;
