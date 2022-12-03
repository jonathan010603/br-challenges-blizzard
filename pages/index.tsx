import Head from "next/head";
import styled from "styled-components";
import Menu from "../components/Menu/Menu";
import BannerHero from "../components/BannerHero";
import Download from "../components/Download/Download";
import JogosExclusivos from "../components/JogosExclusivos";

const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

const Home = () => {

  return (
    <>
      <Head>
        <title>Blizzard</title>
        <meta name="description" content="Blizzard page clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Menu />
        <BannerHero />
        <JogosExclusivos />
        <Download />
      </Container>
    </>
  );
};

export default Home;
