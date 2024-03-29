/*
 * @Author: Sam Zhao
 * @Date: 2022-01-17 21:00:21
 * @LastEditTime: 2023-02-11 13:55:54
 * @LastEditors: Sam Zhao
 * @Description: 主页
 * Copyright 2023 Sam Zhao, All Rights Reserved. 
 */
import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>music</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Hi! Welcome to music space &darr;</h1>
        <div className={styles.grid}>
          <Link href={'/album'}>
            <a className={styles.card}>
              <h2>随便听听&rarr;</h2>
              <p>🎧来点推荐歌单吧</p>
            </a>
          </Link>
          <Link href={'/music'}>
            <a className={styles.card}>
              <h2>新歌速递 &rarr;</h2>
              <p>🆕可以听最新的歌曲了!</p>
            </a>
          </Link>
          <Link href={'/music'}>
            <a className={styles.card}>
              <h2>每日推荐 &rarr;</h2>
              <p>🎵每日都有新发现</p>
            </a>
          </Link>
          <Link href={"/music"}>
            <a className={styles.card}>
              <h2>私人雷达(暂时没有) &rarr;</h2>
              <p>🔭懂你的才是最好的～</p>
            </a>
          </Link>

        </div>
      </main>
    </div>
  );
}
