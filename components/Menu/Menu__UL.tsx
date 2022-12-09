import Image from "next/image";
import { Dispatch, RefObject, SetStateAction, useContext } from "react";
import styled from "styled-components";
import { DropdownContext, IDropdown } from "../../contexts/DropdownContext";
import { transitionsTime } from "../../data/BannerHeroData";
import useClickDropdownTriggers from "../../hooks/useClickDropdownTriggers";

const Menu__UL = () => {
  const ctx = useContext(DropdownContext);

  if (ctx) {
    return (
      <Container>
        <Menu__LI
          id="gamesDropdown"
          onClick={() => useClickDropdownTriggers(1, ctx)}
        >
          Jogos
          <Image
            width="0"
            height="0"
            alt=""
            src={
              ctx?.dropdown.open && ctx?.dropdown.page === 1
                ? "/assets/ui/expand_blue.png"
                : "/assets/ui/expand.png"
            }
          />
        </Menu__LI>
        <Menu__LI
          id="sportsDropdown"
          onClick={() => useClickDropdownTriggers(2, ctx)}
        >
          Esportes
          <Image
            width="0"
            height="0"
            alt=""
            src={
              ctx?.dropdown.open && ctx?.dropdown.page === 2
                ? "/assets/ui/expand_blue.png"
                : "/assets/ui/expand.png"
            }
          />
        </Menu__LI>
        <Menu__LI>Loja</Menu__LI>
        <Menu__LI>Notícias</Menu__LI>
        <Menu__LI>Suporte</Menu__LI>
      </Container>
    );
  } else {
    return <></>;
  }
};

const Container = styled.ul`
  z-index: 1000;
  display: flex;
  width: 22.34vw;
  min-width: 429px;
  margin-left: 5.84vw;
  justify-content: space-between;

  @media only screen and (max-width: 1470px) {
    margin-left: 8.41vw;
  }

  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

const Menu__LI = styled.li`
  display: flex;
  cursor: pointer;
  height: 100%;
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
