import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { transitionsTime } from "../../data/BannerHeroData";

const Menu__Buttons = () => {
  return (
    <Container>
      <Menu__Signup>Criar conta</Menu__Signup>
      <Menu__Login>
        <img src="/assets/ui/login.png" />
        Logar
      </Menu__Login>
    </Container>
  );
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

    &:hover {
      filter: brightness(75%);
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