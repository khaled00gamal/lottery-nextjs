import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
//import HardHeader from "../components/HardHeader";
import Header from "../components/EasyHeader";
import LotteryEntrance from "../components/LotteryEntrance";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Smart Contract Lottery</title>
        <meta
          name="description"
          content="lottery app built on smart contract"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* adding custom header */}
      <Header />
      <LotteryEntrance />
    </div>
  );
}
