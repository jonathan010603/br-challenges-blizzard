import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { transitionsTime } from "../../data/BannerHeroData";

interface IProps {
  setDropdown: Dispatch<
    SetStateAction<{
      open: boolean;
      page: number;
    }>
  >;
  state: {
    open: boolean;
    page: number;
  };
}

const Menu__UL = ({ state, setDropdown }: IProps) => {
  const handleClickDropdownLinks = (page: number) => {
    if (state.open) {
      state.page === page
        ? setDropdown({ open: false, page: 1 })
        : setDropdown({ ...state, page: page });
    } else {
      setDropdown({ open: true, page: page });
    }
  };

  return (
    <Container>
      <Menu__LI id="gamesDropdown" onClick={() => handleClickDropdownLinks(1)}>
        Jogos
        <Image
          width="0"
          height="0"
          alt=""
          src={
            state.open && state.page === 1
              ? "/assets/ui/expand_blue.png"
              : "/assets/ui/expand.png"
          }
        />
      </Menu__LI>
      <Menu__LI id="sportsDropdown" onClick={() => handleClickDropdownLinks(2)}>
        Esportes
        <Image
          width="0"
          height="0"
          alt=""
          src={
            state.open && state.page === 2
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
