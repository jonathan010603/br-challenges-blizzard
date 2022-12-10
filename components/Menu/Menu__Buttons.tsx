import Image from "next/image";
import { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../contexts/ModalContext";
import { transitionsTime } from "../../data/BannerHeroData";

const Menu__Buttons = () => {
  const ctx = useContext(ModalContext);
  
  if (ctx) {
    return (
      <Container>
        <Menu__Signup className="Menu__SignupButton">Criar conta</Menu__Signup>
        <Menu__Login
          className="Menu__LoginButton"
          onClick={() => ctx.setModalOpen(true)}
        >
          <Image width="0" height="0" alt="" src="/assets/ui/login.png" />
          Logar
        </Menu__Login>
      </Container>
    );
  } else {
    return <></>;
  }
};

const Container = styled.div`
  width: 12.65vw;
  display: flex;
  margin-left: auto;
  color: #ffffff;
  min-width: 243px;
  justify-content: space-between;

  button {
    color: #ffffff;
    cursor: pointer;
    font-size: 14px;
    font-weight: 500;
    min-height: 41px;
    border-radius: 3.15385px;
    transition: all ${transitionsTime}s ease-out;
  }

  .Menu__LoginButton {
    &:hover {
      filter: brightness(120%);
    }
  }

  .Menu__SignupButton {
    &:hover {
      background-color: white;
      color: black;
    }
  }

  @media only screen and (max-width: 560px) {
    display: none;
  }
`;

const Menu__Signup = styled.button`
  width: 5.8vw;
  min-width: 112px;
  background-color: transparent;
  border: 0.79px solid rgba(255, 255, 255, 1);
`;

const Menu__Login = styled.button`
  width: 6vw;
  border: none;
  min-width: 115px;
  background-color: #00aeff;

  img {
    width: 11.76px;
    height: 14.19px;
    margin-right: 10px;
  }
`;

export default Menu__Buttons;
