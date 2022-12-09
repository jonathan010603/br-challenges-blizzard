import Image from "next/image";
import { useContext } from "react";
import styled from "styled-components";
import { BannerContext } from "../../contexts/BannerContext";
import { BannerHeroData } from "../../data/BannerHeroData";

interface IGetSelectedGame {
  selectedGame: number;
}

const Banner__TrailerAndLogo = () => {
  const ctx = useContext(BannerContext);
  if (ctx) {
    return (
      <Container>
        <Image
          width="0"
          height="0"
          alt=""
          className="Banner__Logo"
          src={BannerHeroData[ctx.selectedGame].logo}
        />
        <Trailer>
          <span>ASSISTA AO TRAILER</span>
          <Image
            width={24}
            height={24}
            alt=""
            unoptimized={true}
            className="BannerHero__Cover"
            src={BannerHeroData[ctx.selectedGame].animationCover}
            onMouseOver={(e: any) =>
              (e.currentTarget.src =
                BannerHeroData[ctx.selectedGame].animationGif)
            }
            onMouseOut={(e: any) =>
              (e.currentTarget.src =
                BannerHeroData[ctx.selectedGame].animationCover)
            }
          />
          <BannerHero__PlayVideo>
            <Image
              width={280}
              height={280}
              alt=""
              className="BannerHero__PlayIcon"
              src="/assets/ui/play.png"
            />
          </BannerHero__PlayVideo>
        </Trailer>
      </Container>
    );
  } else {
    return <></>;
  }
};

const Container = styled.div`
  z-index: 5;
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
  position: relative;
  align-items: flex-end;
  flex-direction: column;

  span {
    font-size: 13px;
    font-weight: 300;
    line-height: 20px;

    @media only screen and (max-width: 900px) {
      display: none;
    }
  }

  .BannerHero__Cover {
    max-width: 280px;
    min-width: 280px;
    min-height: 173px;
    margin-top: 16px;
    cursor: pointer;
  }

  &:hover {
    div {
      background: linear-gradient(
        162.58deg,
        rgba(0, 174, 255, 0.9) 11.94%,
        rgba(0, 174, 255, 0.45) 95.55%
      );
      backdrop-filter: blur(1.5px);
      border-radius: 159px;
    }

    .BannerHero__PlayIcon {
      filter: brightness(0%);
    }
  }
`;

const BannerHero__PlayVideo = styled.div`
  width: 51px;
  height: 51px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: linear-gradient(
    136.72deg,
    rgba(7, 7, 10, 0.86) 19.22%,
    rgba(15, 16, 22, 0.5) 76.59%
  );
  backdrop-filter: blur(1.5px);
  border-radius: 159px;

  img {
    width: 17.51px;
    height: 13.7px;
  }

  margin: 90px 114px 53px 115px;
`;

export default Banner__TrailerAndLogo;
