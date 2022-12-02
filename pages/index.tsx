import Head from "next/head";
import styled from "styled-components";
import Menu from "../components/Menu/Menu";
import Banner from "../components/Banner";
import Download from "../components/Download/Download";
import Games from "../components/Games/Games";

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
        <Banner />
        <Games />
        <Download />
      </Container>
    </>
  );
};

export default Home;
