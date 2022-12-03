import styled from "styled-components";

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
        <JogosExclusivos__SeeAll>
          <img src="/assets/logo-blizzard.png" />
          <div>
            <img src="/assets/ui/every_white.png" />
            Ver todos os jogos
          </div>
        </JogosExclusivos__SeeAll>
      )}
    </>
  );
};

const JogosExclusivos__SeeAll = styled.div`
  display: flex;
  height: 412.8px;
  flex-basis: 23%;
  border-radius: 4.3px;
  flex-direction: column;
  border: 2px solid #212428;
`;

const Container = styled.div`
  display: flex;
  height: 494px;
  flex-direction: column;
  flex-basis: 23%;

  @media only screen and (max-width: 1470px) {
    flex-basis: 22.5%;
    height: 460px;
  }

  @media only screen and (max-width: 1440px) {
    flex-basis: 23%;
  }

  @media only screen and (max-width: 930px) {
    width: 67.7vw;
  }

  .JogosExclusivos__Name {
    font-weight: 300;
    font-size: 19.35px;
    line-height: 29px;
    margin-top: 25px;
  }

  .JogosExclusivos__Category {
    font-weight: 200;
    font-size: 15.05px;
    line-height: 23px;
  }
`;

const JogosExclusivos__CoverAndLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .JogosExclusivos__Cover {
    width: 100%;
    display: flex;
    height: 100%;
    flex-wrap: wrap;
    justify-content: space-between;
    border-radius: 4.3px;
  }

  .JogosExclusivos__Logo {
    position: absolute;
    bottom: 0;
  }
`;

export default JogosExclusivos__GameCard;
