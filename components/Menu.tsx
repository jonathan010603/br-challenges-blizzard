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
      </Menu__Content>
    </Menu__Container>
  );
};

const Menu__Container = styled.header`
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
  width: 70vw;
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
  width: 22.34vw;
  min-width: 429px;
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
  width: 12.65vw;
  display: flex;
  color: #ffffff;
  min-width: 243px;
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
