import styled from "styled-components";
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
          <img src={game.logo} />
          <span>{game.name}</span>
        </Menu__DropdownSport>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 0 112px;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 134.53px;
  justify-content: space-between;
`;

const Menu__DropdownSport = styled.div`
  display: flex;
  width: 174px;
  height: 237px;
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
  }

  span {
    max-width: 175px;
    text-align: center;
  }
`;

export default Menu__DropdownWrapper2;
