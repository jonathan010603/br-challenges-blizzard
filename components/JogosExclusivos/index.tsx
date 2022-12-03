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
        <JogosExclusivos__GameCard ImageSource={data[0].image} />
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

  @media only screen and (max-width: 1470px) {
    padding: 0 7.77vw;
  }

  @media only screen and (max-width: 1112px) {
    padding: 0 6.5vw;
  }

  @media only screen and (max-width: 768px) {
    padding: 0 6.1vw;
  }

  @media only screen and (max-width: 375px) {
    padding: 0 6.4vw;
  }
`;

const JogosExclusivos__Wrapper = styled.div`
  gap: 1.66vw;
  width: 100%;
  display: flex;
  row-gap: 48px;
  flex-wrap: wrap;
  min-width: 243px;
  justify-content: space-between;

  @media only screen and (min-width: 1000px) and (max-width: 1112px) {
    row-gap: 15vh;
  }

  @media only screen and (max-width: 999px) {
    row-gap: 12vh;
  }

  @media only screen and (max-width: 768px) {
    row-gap: 5.69vh;
  }

  @media only screen and (max-width: 680px) {
    row-gap: 13vh;
  }

  @media only screen and (max-width: 540px) {
    row-gap: 24px;
  }

  @media only screen and (max-width: 375px) {
  }
`;

export default JogosExclusivos;
