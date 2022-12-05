import styled from "styled-components";
import { transitionsTime } from "../../data/BannerHeroData";

const Menu = () => {
  return (
    <Menu__Container>
      <Menu__BlueLine></Menu__BlueLine>
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
        <img className="Banner__burger" src="/assets/ui/menu.png" />
      </Menu__Content>
    </Menu__Container>
  );
};

const Menu__Container = styled.section`
  z-index: 3;
  width: 100%;
  display: flex;
  height: 13.04%;
  padding: 0 15.78vw;
  position: absolute;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1.5px solid rgba(255, 255, 255, 0.1);

  @media only screen and (max-width: 1470px) {
    padding: 0 7.77vw;
  }

  @media only screen and (max-width: 1200px) {
    padding: 0 6.5vw 0 5.85vw;
  }

  @media only screen and (max-width: 1200px) and (max-height: 599px) and (orientation: landscape) {
    height: 20%;
  }
`;

const Menu__Content = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  align-items: center;

  .Banner__burger {
    width: 28px;
    height: 18.67px;
    margin-left: 11.62vw;

    @media only screen and (min-width: 1200px) {
      display: none;
    }

    @media only screen and (max-width: 560px) {
      margin-left: auto;
    }
  }
`;

const Menu__Links = styled.div`
  display: flex;
  align-items: center;
`;

const Menu__Logo = styled.img`
  width: 115.7px;
  height: 40px;

  @media only screen and (max-width: 1470px) {
    width: 86.77px;
  }

  @media only screen and (max-width: 680px) {
    width: 69.42px;
    height: 32px;
  }
`;

const Menu__UL = styled.ul`
  width: 22.34vw;
  min-width: 429px;
  display: flex;
  margin-left: 5.84vw;
  justify-content: space-between;

  @media only screen and (max-width: 1470px) {
    margin-left: 6.3vw;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const Menu__LI = styled.li`
  display: flex;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  align-items: center;
  transition: all ${transitionsTime}s ease-out;

  &:hover {
    color: rgba(255, 255, 255, 0.5);
  }

  img {
    width: 10px;
    height: 5px;
    margin-left: 14px;
  }
`;

const Menu__Buttons = styled.div`
  width: 12.65vw;
  display: flex;
  margin-left: auto;
  color: #ffffff;
  min-width: 243px;
  justify-content: space-between;

  button {
    color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    min-height: 41px;
    border-radius: 3.15385px;
    transition: all ${transitionsTime}s ease-out;

    &:hover {
      filter: brightness(75%);
    }
  }

  @media only screen and (max-width: 560px) {
    display: none;
  }
`;

const Menu__Signup = styled.button`
  width: 5.8vw;
  min-width: 112px;
  background-color: transparent;
  border: 0.79px solid rgba(255, 255, 255, 1);
`;

const Menu__Login = styled.button`
  width: 6vw;
  border: none;
  min-width: 115px;
  background-color: #00aeff;

  img {
    width: 11.76px;
    height: 14.19px;
    margin-right: 10px;
  }
`;

const Menu__BlueLine = styled.div`
  bottom: -1.5px;
  width: 43px;
  height: 1.5px;
  z-index: 10;
  position: absolute;
  background: #00aeff;
`;

export default Menu;
