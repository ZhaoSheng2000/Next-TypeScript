import Head from "next/head";
import axios from "axios"
import { useEffect, useCallback, useRef, useState } from "react";
import Cookies from 'js-cookie'
import styles from "../../styles/Home.module.css";
import Album from "../../components/block-music"
import AppBar from "../../components/app-bar"
import styled from "styled-components"
import Link from "next/link";


const ContentContainer = styled.div`
  display: grid;
  gap: 1.25rem 1rem;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem 1.2rem;
  }
`
const App = styled.main`
margin: 0 2rem;
max-width: 42rem;
`

export default function Music() {
    const [albums, setAlbums] = useState([]);

    useEffect(async () => {
        let res = await axios.post(`/top/playlist`, { "cookie": Cookies.get('musicCookie'), "limit": 30, })
        console.log(res.data.playlists);
        setAlbums(res.data.playlists)
    }, []);

    return (
        <div className={styles.container}>
            <Head >
                <title>网友精选</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <App>
                <AppBar />
                <h2>网友精选碟</h2>
                <ContentContainer >
                    {albums.map(item => (
                        <Album
                            key={item.id}
                            url={item.coverImgUrl}
                            name={item.name}
                            id={item.id}
                            tag={item.tags.map(i => (i + ' '))}
                        />
                    ))}
                </ContentContainer>
            </App >
        </div >
    )
}