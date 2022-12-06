import { useState } from "react";
import styled from "styled-components";
import { transitionsTime } from "../../data/BannerHeroData";
import Menu__Dropdown from "./Menu__Dropdown";

const Menu__UL = () => {
  const [isDropDownOpen, setDropdownOpen] = useState(true);

  return (
    <Container>
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
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  width: 22.34vw;
  min-width: 429px;
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

export default Menu__UL;
