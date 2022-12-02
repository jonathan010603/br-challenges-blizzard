import styled from "styled-components";

const Menu = () => {
  return (
    <Menu__Container>
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
    padding: 0 5.83vw;
  }

  @media only screen and (max-width: 1112px) and (max-height: 599px) and (orientation: landscape) {
    height: 20%;
  }
`;

const Menu__Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .Banner__burger {
    width: 28px;
    height: 18.67px;
    margin-left: 11.62vw;

    @media only screen and (min-width: 971px) {
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
  width: 88px;
  height: 40px;
`;

const Menu__UL = styled.ul`
  width: 22.34vw;
  min-width: 429px;
  display: flex;
  margin-left: 5.8vw;
  justify-content: space-between;

  @media only screen and (max-width: 1470px) {
    margin-left: 6.3vw;
  }

  @media only screen and (max-width: 970px) {
    display: none;
  }
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
  width: 12.65vw;
  display: flex;
  margin-left: auto;
  color: #ffffff;
  min-width: 243px;
  justify-content: space-between;

  button {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
    min-height: 41px;
    border-radius: 3.15385px;
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

export default Menu;
