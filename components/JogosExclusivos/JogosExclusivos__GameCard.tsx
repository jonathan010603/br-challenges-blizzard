import styled from "styled-components";
import { transitionsTime } from "../../data/BannerHeroData";

interface IProps {
  Name?: string;
  Logo?: string;
  Category?: string;
  ImageSource?: string;
}

const JogosExclusivos__GameCard = ({
  Name,
  Logo,
  Category,
  ImageSource,
}: IProps) => {
  return (
    <>
      {Name ? (
        <Container>
          <JogosExclusivos__CoverAndLogo>
            <img className="JogosExclusivos__Cover" src={ImageSource} />
            <img className="JogosExclusivos__Logo" src={Logo} />
          </JogosExclusivos__CoverAndLogo>
          <span className="JogosExclusivos__Name">{Name}</span>
          <span className="JogosExclusivos__Category">{Category}</span>
        </Container>
      ) : (
        <Container>
          <JogosExclusivos__CoverAndLogo>
            <img
              className="JogosExclusivos__Cover disabled "
              src={ImageSource}
            />
            <div className="seeAllCard">
              <img
                className="JogosExclusivos__BlizzardLogo"
                src="/assets/logo-blizzard.png"
              />
              <div>
                <img src="/assets/ui/every_white.png" />
                Ver todos os jogos
              </div>
            </div>
          </JogosExclusivos__CoverAndLogo>
          <span className="JogosExclusivos__Name disabled">{"..."}</span>
          <span className="JogosExclusivos__Category disabled">{"..."}</span>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: 15.67vw;
  height: 67.24vh;
  flex-direction: column;
  min-width: 230px;
  max-height: 500px;
  min-height: 504.97px;
  transition: all ${transitionsTime}s ease-out;

  &:hover {
    cursor: pointer;
    img {
      filter: brightness(130%);
    }
  }

  @media only screen and (max-width: 1470px) {
    width: 19.44vw;
    height: 62.5vh;
    max-height: 523px;
    min-height: 427.97px;
    min-width: 170px;
  }

  @media only screen and (max-width: 1112px) {
    width: 26.26vw;
    height: 50vh;
    max-height: 500px;
    min-height: 330px;
    min-width: 170px;
  }

  @media only screen and (max-width: 768px) {
    width: 26.26vw;
    height: 46.44vh;
  }

  @media only screen and (max-width: 680px) {
    width: 39vw;
    height: 42vh;
  }

  @media only screen and (max-width: 510px) {
    width: 40vw;
    height: 34.39vh;
    min-width: 110px;
    min-height: 210px;
    max-height: 212px;
  }

  @media only screen and (max-width: 360px) {
    height: 27vh;
  }

  .disabled {
    visibility: hidden;
  }

  .JogosExclusivos__Name {
    font-weight: 300;
    font-size: 19.35px;
    line-height: 29px;
    margin-top: 25px;

    @media only screen and (max-width: 1112px) {
      font-size: 16px;
    }
  }

  .JogosExclusivos__Category {
    font-weight: 200;
    font-size: 15.05px;
    line-height: 23px;
    white-space: nowrap;

    @media only screen and (max-width: 1470px) {
      font-size: 14px;
    }

    @media only screen and (max-width: 768px) {
      font-size: 11.8px;
    }
  }

  .JogosExclusivos__Category,
  .JogosExclusivos__Name {
    @media only screen and (max-width: 510px) {
      display: none;
    }
  }
`;

const JogosExclusivos__CoverAndLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;

  .seeAllCard {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    border: 2px solid #212428;
    border-radius: 4.3px;
    font-weight: 600;
    font-size: 17.2px;
    line-height: 26px;

    div {
      margin-top: 36.55px;

      @media only screen and (max-width: 450px) {
        margin-top: 15px;
      }

      img {
        margin-right: 13.5px;

        @media only screen and (max-width: 450px) {
          display: none;
        }
      }
    }

    @media only screen and (max-width: 1470px) {
      font-weight: 600;
      font-size: 16px;
      line-height: 24px;
    }

    @media only screen and (max-width: 450px) {
      font-weight: 600;
      font-size: 14px;
      line-height: 21px;
    }

    @media only screen and (max-width: 350px) {
      font-weight: 600;
      font-size: 11px;
      line-height: 21px;
    }
  }

  .JogosExclusivos__BlizzardLogo {
    height: 43px;
    width: 93.28px;

    @media only screen and (max-width: 1470px) {
      height: 40px;
      width: 86.77px;
    }

    @media only screen and (max-width: 450px) {
      width: 69.23px;
      height: 31.91px;
    }
  }

  .JogosExclusivos__Cover {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 4.3px;
  }

  .JogosExclusivos__Logo {
    width: 159.1px;
    height: 105.35px;
    bottom: 6.42vh;
    position: absolute;

    @media only screen and (max-width: 1470px) {
      width: 148px;
      height: 98px;
      bottom: 5.97vh;
    }

    @media only screen and (max-width: 768px) {
      width: 106.62px;
      height: 70.6px;
      bottom: 4.29vh;
    }

    @media only screen and (max-width: 450px) {
      width: 82.46px;
      height: 54.6px;
      bottom: 3.31vh;
    }
  }
`;

export default JogosExclusivos__GameCard;
