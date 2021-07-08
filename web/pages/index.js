// index.js
import Head from "next/head";

import Layout from "../components/layout";
import Homehero from "../components/homehero";

export default function Index() {
  return (
    <div>
      <Layout>
        <Head>
          <title> NERR - Northeast Rod Run </title>
        </Head>
        <Homehero />
      </Layout>
    </div>
  );
};
