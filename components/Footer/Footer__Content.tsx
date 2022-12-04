import { useEffect, useState } from "react";
import styled from "styled-components";
import useGetOS from "../../hooks/useGetOS";

const Footer__Content = () => {
  const [os, setOS] = useState<string | undefined>("");

  useEffect(() => {
    let osName = useGetOS(window.navigator.userAgent);
    setOS(osName);
  }, []);

  return (
    <Container>
      <Footer__Battlenet src="/assets/logo-battle-net.png" />
      <Footer__MainText>Baixe agora o battle.net</Footer__MainText>
      <Footer__SubTexts>
        <li>
          <img src="/assets/ui/onePlace.png" />
          Seus jogos em um só lugar
        </li>
        <li>
          <img src="/assets/ui/friends.png" />
          Conecte-se aos seus amigos
        </li>
        <li>
          <img src="/assets/ui/buy.png" />
          Compre jogos e itens digitais
        </li>
      </Footer__SubTexts>
      <Footer__DownloadBtn>
        <img src={`/assets/ui/${os}.png`} />
        Baixar para o {os}
      </Footer__DownloadBtn>
      <Footer__MobileAdvice>
        <img src="/assets/ui/cellphone.png" />
        Também disponível como
        <br />
        aplicativo móvel
      </Footer__MobileAdvice>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  padding: 132px 0 0 15.52vw;
  flex-direction: column;
  color: #ffffff;

  img,
  div,
  span,
  ul,
  button {
    z-index: 10;
  }
`;

const Footer__Battlenet = styled.img`
  height: 16px;
  width: 133.22px;
`;

const Footer__MainText = styled.span`
  font-weight: 700;
  font-size: 32px;
  line-height: 110.2%;
`;

const Footer__SubTexts = styled.ul`
  display: flex;
  height: 144px;
  margin-top: 30px;
  flex-direction: column;
  justify-content: space-between;

  li {
    display: flex;
    font-weight: 400;
    font-size: 18px;
    line-height: 178.2%;
    color: #828792;

    img {
      margin-right: 16px;
    }
  }
`;

const Footer__DownloadBtn = styled.button`
  width: 266px;
  height: 52px;
  display: flex;
  margin-top: 39px;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background: #00aeff;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;

  img {
    margin-right: 8px;
  }
`;

const Footer__MobileAdvice = styled.div`
  display: flex;
  margin-top: 47px;
  align-items: center;

  img {
    height: 20px;
    width: 13.33px;
    margin-right: 18.67px;
  }
`;

export default Footer__Content;
