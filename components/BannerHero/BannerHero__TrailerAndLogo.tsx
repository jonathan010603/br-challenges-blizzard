import styled from "styled-components";
import { BannerHeroData } from "../../data/BannerHeroData";

interface IProps {
  highlightedGame: number;
}

const Banner__TrailerAndLogo = ({ highlightedGame }: IProps) => {
  return (
    <Container>
      <img
        className="Banner__Logo"
        src={BannerHeroData[highlightedGame].logo}
      />
      <Trailer>
        <span>ASSISTA AO TRAILER</span>
        <img
          src={BannerHeroData[highlightedGame].animationCover}
          onMouseOver={(e: any) =>
            (e.currentTarget.src = BannerHeroData[highlightedGame].animationGif)
          }
          onMouseOut={(e: any) =>
            (e.currentTarget.src =
              BannerHeroData[highlightedGame].animationCover)
          }
        />
      </Trailer>
    </Container>
  );
};

const Container = styled.div`
  z-index: 10;
  height: 64.53vh;
  display: flex;
  margin-left: auto;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;

  .Banner__Logo {
    max-width: 280px;
    min-height: 154px;
  }

  @media only screen and (max-width: 1200px) {
    position: absolute;
    right: 2.5vw;
    top: -9vh;
    height: 72.96vh;
  }

  @media only screen and (max-width: 767px) {
    display: none;
  }
`;

const Trailer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  span {
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;

    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  img {
    max-width: 280px;
    min-height: 173px;
    margin-top: 16px;
    cursor: pointer;
  }
`;

export default Banner__TrailerAndLogo;
