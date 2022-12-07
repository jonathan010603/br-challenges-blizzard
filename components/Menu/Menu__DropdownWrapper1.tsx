import styled from "styled-components";
import { DropdownGames } from "../../data/DropdownData";

interface IDropdownGame {
  logo: string;
  name: string;
}

const Menu__DropdownWrapper1 = () => {
  return (
    <Container>
      {DropdownGames.map((game: IDropdownGame) => (
        <Menu__DropdownGame key={game.name}>
          <img src={game.logo} />
          <span>{game.name}</span>
        </Menu__DropdownGame>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 112px;
  height: 380.47px;
  row-gap: 28.47px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 134.53px;
  justify-content: space-between;
`;

const Menu__DropdownGame = styled.div`
  display: flex;
  width: 176px;
  height: 176px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 120%;
  color: #9d9d9d;

  img {
    width: 70px;
    height: 70px;
    margin-bottom: 8.6px;
  }

  span {
    max-width: 105.12px;
    text-align: center;
  }

  @media only screen and (min-width: 1730px) {
    width: 250px;
    height: 150px;
  }
  
  @media only screen and (max-width: 1729px) {
    width: 220px;
    height: 150px;
  }
  
  @media only screen and (max-width: 1543px) {
    width: 200px;
    height: 150px;
  }
  
  @media only screen and (max-width: 1423px) {
    width: 180px;
    height: 150px;
  }
  
  @media only screen and (max-width: 1303px) {
    width: 160px;
    height: 150px;
  }
`;

export default Menu__DropdownWrapper1;