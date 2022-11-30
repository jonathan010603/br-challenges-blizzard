import { url } from "inspector";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { bannerImages } from "../data/bannerImages";
import styled from "styled-components";

interface IBanner__Props {
  selectedGame: number;
}

const Container = styled.main`
  width: 100%;
  height: 100vh;
`;

const Menu = styled.header`
  z-index: 3;
  width: 100%;
  display: flex;
  height: 13.04%;
  padding: 0 15.78vw;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);
`;

const Menu__Content = styled.div`
  display: flex;
  width: 64.94vw;
  justify-content: space-between;
`;

const Menu__Links = styled.div`
  display: flex;
  align-items: center;
`;

const Menu__Logo = styled.img`
  width: 6vw;
  height: 100%;
`;

const Menu__UL = styled.ul`
  width: 28.5vw;
  display: flex;
  margin-left: 5.8vw;
  justify-content: space-between;
`;

const Menu__LI = styled.li`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  align-items: center;

  img {
    width: 10px;
    height: 5px;
    margin-left: 14px;
  }
`;

const Menu__Buttons = styled.div`
  width: 20%;
  display: flex;
  color: #ffffff;
  justify-content: space-between;

  button {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    border-radius: 3.15385px;
  }
`;

const Menu__Signup = styled.button`
  width: 5.8vw;
  background-color: transparent;
  border: 0.79px solid rgba(255, 255, 255, 1);
`;

const Menu__Login = styled.button`
  width: 6vw;
  border: none;
  background-color: #00aeff;

  img {
    width: 11.76px;
    height: 14.19px;
    margin-right: 10px;
  }
`;

const Banner = styled.section`
  width: 100%;
  height: 100%;
`;

const Banner__BG = styled.section<IBanner__Props>`
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  background-size: cover;
  background-image: url(${(p) => bannerImages[p.selectedGame].bg});
`;

const Banner__Gradient = styled.div`
  z-index: 2;
  width: 100%;
  height: 100%;
  position: absolute;
  background: radial-gradient(
    73.1% 73.1% at 52.6% 25.14%,
    rgba(2, 2, 3, 0) 0%,
    #020203 71.1%
  );
  mix-blend-mode: multiply;
  opacity: 0.5;
`;

const Games = styled.section`
  width: 100%;
  height: 100%;
  background-color: red;
`;

const Download = styled.footer`
  width: 100%;
  height: 100%;
  background-color: yellow;
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
        <Menu>
          <Menu__Content>
            <Menu__Links>
              <Menu__Logo src="/assets/logo-blizzard.png" />
              <Menu__UL>
                <Menu__LI>
                  Jogos
                  <img src="/assets/ui/expand.png" />
                </Menu__LI>
                <Menu__LI>
                  Esportes
                  <img src="/assets/ui/expand.png" />
                </Menu__LI>
                <Menu__LI>Loja</Menu__LI>
                <Menu__LI>Notícias</Menu__LI>
                <Menu__LI>Suporte</Menu__LI>
              </Menu__UL>
            </Menu__Links>
            <Menu__Buttons>
              <Menu__Signup>Criar conta</Menu__Signup>
              <Menu__Login>
                <img src="/assets/ui/login.png" />
                Logar
              </Menu__Login>
            </Menu__Buttons>
          </Menu__Content>
        </Menu>
        <Banner>
          <Banner__BG selectedGame={selectedGame}></Banner__BG>
          <Banner__Gradient></Banner__Gradient>
        </Banner>
        <Games></Games>
        <Download></Download>
      </Container>
    </>
  );
};

export default Home;
