import styled from "styled-components";

const JogosExclusivos__TopBar = () => {
  return (
    <Container>
      <span className="JogosExclusivos__Label">GAMES</span>
      <JogosExclusivos__Title>
        Jogos
        <br />
        exclusivos
      </JogosExclusivos__Title>
      <JogosExclusivos__Platforms>
        <img src="/assets/ui/battlenet.png" />
        <img src="/assets/ui/nintendo.png" />
        <img src="/assets/ui/xbox.png" />
        <img src="/assets/ui/playstation.png" />
      </JogosExclusivos__Platforms>
      <span className="JogosExclusivos__SeeAll">
        <img src="/assets/ui/every.png" />
        Ver todos os jogos
      </span>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  margin: 11.54vh 0;

  @media only screen and (max-width: 375px) {
    height: 62px;
  }

  @media only screen and (max-width: 760px) {
    justify-content: space-between;
  }

  @media only screen and (max-width: 375px) {
    height: 62px;
  }

  .JogosExclusivos__Label {
    align-self: flex-start;
    margin-top: 11px;
    color: #8f9199;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;

    @media only screen and (max-width: 1200px) {
      margin-top: 8px;
    }

    @media only screen and (max-width: 930px) {
      display: none;
    }
  }

  .JogosExclusivos__SeeAll {
    color: #00aeff;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    margin-left: auto;
    text-align: center;
    align-self: flex-end;

    img {
      margin-right: 10px;
    }

    @media only screen and (max-width: 760px) {
      font-size: 14px;
      margin: 0 0 4px 0;
    }

    @media only screen and (max-width: 640px) {
      margin: 0 0 2px 0;
    }

    @media only screen and (max-width: 380px) {
      margin: 0 0 -3px 0;
    }

    @media only screen and (max-width: 330px) {
      font-size: 10px;
      margin: 0 0 -5px 0;
    }
  }
`;

const JogosExclusivos__Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 0 8.9vw;
  line-height: 110.2%;
  align-self: flex-start;

  @media only screen and (max-width: 1470px) {
    margin: 0 0 0 11.18vw;
  }

  @media only screen and (max-width: 930px) {
    margin: 0;
  }

  @media only screen and (max-width: 760px) {
    font-size: 28px;
    align-self: flex-end;
  }

  @media only screen and (max-width: 380px) {
    font-size: 20px;
  }

  @media only screen and (max-width: 330px) {
    font-size: 16px;
  }
`;

const JogosExclusivos__Platforms = styled.div`
  height: 22px;
  display: flex;
  width: 159.9px;
  align-items: center;
  align-self: flex-end;
  margin: 0 0 2px 8.28vw;
  justify-content: space-between;

  @media only screen and (max-width: 1470px) {
    margin: 0 0 2px 16.94vw;
  }

  @media only screen and (max-width: 930px) {
    margin: 0 0 2px 12.76vw;
  }

  @media only screen and (max-width: 760px) {
    margin: 0 0 6px 0;
  }

  @media only screen and (max-width: 640px) {
    display: none;
  }
`;

export default JogosExclusivos__TopBar;
