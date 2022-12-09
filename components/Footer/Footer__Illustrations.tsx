import styled from "styled-components";

const Footer__Illustrations = () => {
  return (
    <Container>
      <Footer__AppIllustration 
        src="/assets/illustrations/app.webp" 
        alt="" 
      />
      <Footer__AppMiniIllustration
        src="/assets/illustrations/app-mini.webp" 
        alt=""
      />
    </Container>
  );
};

const Container = styled.div`
  z-index: 10;
  position: relative;
`;

const Footer__AppIllustration = styled.img`
  width: 1053px;
  height: 609.84px;
  margin: 96.61px 44.76px 158.55px auto;

  @media only screen and (max-width: 1470px) {
    margin: 96.61px 0px 158.55px 193px;
  }

  @media only screen and (max-width: 1112px) {
    margin: 104.31px 0px 158.55px -15px;
    width: 907.61px;
    height: 519.6px;
  }

  @media only screen and (max-width: 680px) {
    margin: 48.5px 0px 79.6px 0;
    width: 534.8px;
    height: 306.17px;
  }
`;

const Footer__AppMiniIllustration = styled.img`
  position: absolute;
  width: 647.21px;
  height: 335.75px;
  left: 205px;
  top: 403.8px;

  @media only screen and (max-width: 1470px) {
    left: 545px;
  }

  @media only screen and (max-width: 1112px) {
    width: 576.49px;
    height: 306.95px;
    top: 372px;
    left: 129px;
  }

  @media only screen and (max-width: 680px) {
    width: 325px;
    height: 180.87px;
    top: 208px;
    left: 83px;
  }
`;

export default Footer__Illustrations;
