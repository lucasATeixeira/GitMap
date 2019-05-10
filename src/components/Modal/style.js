import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: absolute;
  z-index: 2;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.7);

  form {
    background: #fff;
    width: 350px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;

    strong {
      margin: 25px;
      font-size: 17px;
    }

    input {
      width: 300px;
      border-radius: 7px;
      border: 1px solid #8888;
      padding: 10px 20px;
      font-size: 15px;
    }

    div.buttons {
      width: 300px;
      display: flex;
      justify-content: space-between;
      margin: 20px;

      button {
        border: none;
        color: #fff;
        border-radius: 5px;
        font-weight: bold;
        width: 140px;
        height: 40px;
        font-size: 15px;
        cursor: pointer;
      }

      button.cancelar {
        background: #b7b7b7;
        transition: background 0.5s;
        &:hover {
          background: #999999;
        }
      }

      button.salvar {
        background: #83bf7f;
        transition: background 0.5s;
        &:hover {
          background: #70a46d;
        }
      }
    }
  }
`;
