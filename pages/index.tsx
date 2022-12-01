import { url } from "inspector";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { bannerImages } from "../data/bannerImages";
import styled from "styled-components";
import Menu from "../components/Menu";
import Banner from "../components/Banner";
import Download from "../components/Download";
import Games from "../components/Games";

const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

const Home = () => {
  const [selectedGame, setSelectedGame] = useState(0);

  return (
    <>
      <Head>
        <title>Blizzard</title>
        <meta name="description" content="Blizzard page clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Menu></Menu>
        <Banner selectedGame={selectedGame}></Banner>
        <Games></Games>
        <Download></Download>
      </Container>
    </>
  );
};

export default Home;
