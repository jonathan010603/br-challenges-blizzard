import styled from "styled-components";

const Menu__Dropdown = () => {
  return (
    <Container>
      <Menu__DropdownElWrapper></Menu__DropdownElWrapper>
      <Menu__DropdownBottomBar>
        <ul>
          <li>
            <img src="/assets/ui/every.png" />
            Ver todos os jogos
          </li>
          <li>
            <img src="/assets/ui/battlenet-blue.png" />
            Aplicativo Battle.net
          </li>
          <li>
            <img src="/assets/ui/downloads-blue.png" />
            Downloads
          </li>
          <li>
            <img src="/assets/ui/chat-blue.png" />
            Fórum dos jogos
          </li>
        </ul>
      </Menu__DropdownBottomBar>
    </Container>
  );
};

const Container = styled.div`
  left: 0;
  z-index: 15;
  width: 100vw;
  display: flex;
  height: 86.95vh;
  position: absolute;
  flex-direction: column;
  background: linear-gradient(
    180deg,
    #020203 0%,
    rgb(14, 17, 23) 96.35%,
    rgb(14, 17, 23) 100%
  );
  backdrop-filter: blur(6px);
`;

const Menu__DropdownElWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Menu__DropdownBottomBar = styled.div`
  width: 100%;
  height: 100%;
  opacity: 0.7;
  display: flex;
  max-height: 70px;
  background: #15171b;

  ul {
    display: flex;
    align-items: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    align-self: center;
    margin-left: 21.94vw;
  }

  li {
    display: flex;
    align-items: center;
    margin-right: 4.44vw;
  }

  img {
    margin-right: 10px;
  }
`;

export default Menu__Dropdown;
