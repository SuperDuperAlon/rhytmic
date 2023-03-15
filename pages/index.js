// import type { NextPage } from "next";
import Head from "next/head";
// import Image from "next/image";
import Sidebar from "../cmps/Sidebar";


export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
    <Head>
      <title>Rhytmiq</title>
    </Head>
      <h1>this is a spotify clone</h1>

      <main>
        <Sidebar />
        {/* Center */}
      </main>
      <div>{/* Player */}</div>
    </div>
  );
}
// const Home: NextPage = () => {

// };

// export default Home;
