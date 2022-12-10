import Image from "next/image";
import { Dispatch, SetStateAction, useContext } from "react";
import styled from "styled-components";
import { ModalContext } from "../../contexts/ModalContext";

interface IModal__ExternalContainerProps {
  modalOpen?: boolean;
}

const Modal = () => {
  const ctx = useContext(ModalContext);

  if (ctx) {
    return (
      <ExternalContainer modalOpen={ctx.modalOpen}>
        <Container>
          <Image
            unoptimized={true}
            width={32}
            height={32}
            alt=""
            className="Modal__close"
            src="/assets/ui/close_modal.png"
            onClick={() => ctx.setModalOpen(false)}
          />
          <Modal__Content>
            <Image
              unoptimized={true}
              width="0"
              height="0"
              alt=""
              className="Modal__logo"
              src="/assets/logo-battle-net.png"
            />
            <Modal__Input placeholder="E-mail ou telefone" />
            <Modal__Input placeholder="Senha" type="password" />
            <Modal__Button>Conectar-se</Modal__Button>
            <Modal__AlternateLogin>
              <span>ou conecte-se com</span>
              <div>
                <Image
                  unoptimized={true}
                  width="0"
                  height="0"
                  alt=""
                  src="/assets/ui/google.png"
                />
                <Image
                  unoptimized={true}
                  width="0"
                  height="0"
                  alt=""
                  src="/assets/ui/apple.png"
                />
                <Image
                  unoptimized={true}
                  width="0"
                  height="0"
                  alt=""
                  src="/assets/ui/facebook.png"
                />
              </div>
            </Modal__AlternateLogin>
            <Modal__Links>
              <div>
                <span>Crie uma conta </span>Battle.net de graça
              </div>
              <span>Não consegue logar?</span>
            </Modal__Links>
          </Modal__Content>
        </Container>
      </ExternalContainer>
    );
  } else {
    return <></>;
  }
};

const ExternalContainer = styled.div<IModal__ExternalContainerProps>`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 30;
  height: 100vh;
  overflow: hidden;
  position: absolute;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: rgba(0, 0, 0, 0.7);
  display: ${(p) => (p.modalOpen ? "flex" : "none")};

  @media only screen and (max-width: 560px) {
    display: none;
  }

  @media only screen and (max-height: 420px) {
    height: 120vh;
  }
`;

const Container = styled.div`
  top: 0;
  height: 600px;
  display: flex;
  width: 48.33vw;
  margin: auto;
  min-width: 480px;
  max-width: 696px;
  max-height: 600px;
  min-height: 300px;
  flex-direction: column;
  background-image: url("/assets/illustrations/loginBG.webp");

  @media only screen and (max-width: 600px) {
    width: 70vw;
    min-width: 1px;
  }

  @media only screen and (max-width: 470px) {
    width: 90%;
  }

  @media only screen and (max-height: 420px) {
    width: 100%;
    height: 98%;
  }

  .Modal__close {
    cursor: pointer;
    align-self: flex-end;
    margin: 24px 24px 0 0;
  }

  .Modal__logo {
    height: 20px;
    width: 166.53px;
    align-self: center;
    margin-bottom: 40px;

    @media only screen and (max-height: 420px) {
      margin-bottom: 20px;
    }
  }
`;

const Modal__Content = styled.div`
  display: flex;
  flex-direction: column;
`;

const Modal__Input = styled.input`
  width: 426px;
  height: 48px;
  outline: none;
  font-size: 15px;
  font-weight: 500;
  line-height: 22px;
  align-self: center;
  border-radius: 4px;
  margin-bottom: 16px;
  border-color: transparent;
  color: rgba(54, 56, 66, 0.9);
  padding: 12px 16px 13px 16px;

  @media only screen and (max-width: 600px) {
    width: 74%;
  }

  @media only screen and (max-height: 420px) {
    width: 60%;
    height: 30px;
  }

  @media only screen and (max-height: 370px) {
    height: 20px;
  }
`;

const Modal__Button = styled.button`
  width: 426px;
  height: 52px;
  color: #ffffff;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  align-self: center;
  border-radius: 4px;
  background: #00aeff;
  margin: 8px 0 41px 0;
  border-color: transparent;

  &:hover {
    filter: brightness(120%);
  }

  @media only screen and (max-width: 600px) {
    width: 74%;
  }

  @media only screen and (max-height: 420px) {
    width: 60%;
    height: 30px;
    margin: 8px 0 20px 0;
  }

  @media only screen and (max-height: 370px) {
    margin: 8px 0 10px 0;
  }
`;

const Modal__AlternateLogin = styled.div`
  width: 176px;
  height: 85px;
  display: flex;
  align-self: center;
  text-align: center;
  margin-bottom: 35px;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and (max-height: 420px) {
    height: 60px;
    margin-bottom: 20px;
  }

  @media only screen and (max-height: 370px) {
    height: 30px;
    margin-bottom: 10px;
    span {
      display: none;
    }
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  img {
    width: 48px;
    height: 48px;
    cursor: pointer;

    @media only screen and (max-height: 420px) {
      width: 30px;
      height: 30px;
    }
  }
`;

const Modal__Links = styled.div`
  display: flex;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  align-self: center;
  align-items: center;
  flex-direction: column;

  @media only screen and (max-width: 350px) {
    font-size: 14px;
  }

  @media only screen and (max-width: 295px) {
    font-size: 12px;
  }

  @media only screen and (max-height: 420px) {
    flex-direction: row;
  }

  @media only screen and (max-height: 370px) {
    font-size: 11px;
  }

  span {
    color: #00aeff;
    cursor: pointer;
  }

  div {
    margin-bottom: 16px;

    @media only screen and (max-height: 420px) {
      margin: 0 30px 0 0;
      flex-direction: row;
    }
  }
`;

export default Modal;
