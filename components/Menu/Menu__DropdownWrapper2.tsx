import Image from "next/image";
import styled from "styled-components";
import { transitionsTime } from "../../data/BannerHeroData";
import { DropdownSports } from "../../data/DropdownData";

interface IDropdownGame {
  logo: string;
  name: string;
}

const Menu__DropdownWrapper2 = () => {
  return (
    <Container>
      {DropdownSports.map((game: IDropdownGame) => (
        <Menu__DropdownSport key={game.name}>
          <Image unoptimized={true} width="0" height="0" alt="" src={game.logo} />
          <span>{game.name}</span>
        </Menu__DropdownSport>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 157px;
  height: 237px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 151px;
  justify-content: space-between;
`;

const Menu__DropdownSport = styled.div`
  width: 174px;
  height: 237px;
  display: flex;
  cursor: pointer;
  flex-direction: column;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #9d9d9d;

  img {
    width: 174px;
    height: 147px;
    margin-bottom: 8.6px;
    transition: all ${transitionsTime}s ease-out;
  }

  span {
    min-width: 180px;
    text-align: center;
    white-space: pre-line;
  }

  &:hover {
    img {
      transform: scale(1.1);
    }
    color: #ffffff;
  }
`;

export default Menu__DropdownWrapper2;
