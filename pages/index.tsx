import Head from "next/head";
import styled from "styled-components";
import Menu from "../components/Menu";
import BannerHero from "../components/BannerHero";
import Footer from "../components/Footer";
import JogosExclusivos from "../components/JogosExclusivos";
import { BannerContextWrapper } from "../contexts/BannerContext";
import {
  DropdownContextWrapper,
  MobileDropdownContextContextWrapper,
} from "../contexts/DropdownContext";
import { ModalContextWrapper } from "../contexts/ModalContext";

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
        <link rel="preload" href="/assets/games/diablo-animation.gif" as="image" />
        <link rel="preload" href="/assets/games/hearthstone-animation.gif" />
        <link rel="preload" href="/assets/games/wow-animation.gif" />
        <link rel="preload" href="/assets/games/diabloImmortal-animation.gif" as="image" />
        <link rel="preload" href="/assets/games/sc2-animation.gif" as="image" />

        <link rel="preload" href="/assets/games/diablo-bg.webp" as="image" />
        <link rel="preload" href="/assets/games/hearthstone-bg.webp" />
        <link rel="preload" href="/assets/games/wow-bg.webp" as="image" />
        <link rel="preload" href= "/assets/games/diabloImmortal-bg.webp" as="image" />
        <link rel="preload" href="/assets/games/sc2-bg.webp" as="image" />
      </Head>
      <Container>
        <MobileDropdownContextContextWrapper>
          <DropdownContextWrapper>
            <ModalContextWrapper>
              <Menu />
            </ModalContextWrapper>
          </DropdownContextWrapper>
        </MobileDropdownContextContextWrapper>
        <BannerContextWrapper>
          <BannerHero />
        </BannerContextWrapper>
        <JogosExclusivos />
        <Footer />
      </Container>
    </>
  );
};

export default Home;
