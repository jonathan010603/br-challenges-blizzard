import { stringify } from "querystring";
import styled from "styled-components";
import { useFetch } from "../../hooks/useFetch";
import JogosExclusivos__GameCard from "./JogosExclusivos__GameCard";
import JogosExclusivos__TopBar from "./JogosExclusivos__TopBar";

export interface gameObject {
  name: string;
  category: string;
  image: string;
  logo: string;
}

const JogosExclusivos = () => {
  const { data } = useFetch(
    "https://api-brchallenges.vercel.app/api/blizzard/games"
  );

  return (
    <JogosExclusivos__Container>
      <JogosExclusivos__TopBar />
      <JogosExclusivos__Wrapper>
        {data?.map((game: gameObject) => (
          <JogosExclusivos__GameCard
            Name={game.name}
            Logo={game.logo}
            Category={game.category}
            ImageSource={game.image}
          />
        ))}
        <JogosExclusivos__GameCard />
      </JogosExclusivos__Wrapper>
    </JogosExclusivos__Container>
  );
};

const JogosExclusivos__Container = styled.section`
  width: 100%;
  padding: 0 15.83vw 0 16vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 14.57vh;

  @media only screen and (max-width: 1440px) {
    padding: 0 7.22vw;
  }

  @media only screen and (max-width: 1112px) {
    padding-left: 7.55vw;
  }
`;

const JogosExclusivos__Wrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 1.66vw;
  flex-wrap: wrap;

  @media only screen and (max-width: 1470px) {
    gap: 2.22vw;
    row-gap: 49px;
  }
`;

export default JogosExclusivos;
