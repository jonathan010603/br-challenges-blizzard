import styled from "styled-components";
import Footer__Content from "./Footer__Content";
import Footer__Illustrations from "./Footer__Illustrations";

const Footer = () => {
  return (
    <Footer__Container>
      <Footer__BG />
      <Footer__Gradient />
      <div className="Footer__Flexible">
        <Footer__Content />
        <Footer__Illustrations />
      </div>
    </Footer__Container>
  );
};

const Footer__Container = styled.footer`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;

  .Footer__Flexible {
    display: flex;

    @media only screen and (max-width: 680px) {
      flex-direction: column;
    }
  }
`;

const Footer__BG = styled.section`
  z-index: 1;
  width: 100%;
  height: 100%;
  min-height: 500px;
  position: absolute;
  background-size: cover;
  background-image: url("/assets/footer-background.webp");
`;

const Footer__Gradient = styled.div`
  z-index: 2;
  width: 100%;
  position: absolute;
  min-height: 500px;
  background: radial-gradient(
    61.91% 61.91% at 58.62% 25.94%,
    #c4c4c4 0%,
    rgba(196, 196, 196, 0) 100%
  );
  mix-blend-mode: multiply;
`;

export default Footer;
