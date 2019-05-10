import styled from 'styled-components';

export const MarkerImg = styled.img`
  width: 60px;
  border-radius: 50%;
  border: 4.5px solid #9b65e6;
`;

export const Container = styled.div`
  position: absolute;
  z-index: 1;
  width: 400px;
  height: 95.5%;
  margin: 25px;
  background: #fff;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 5px 10px 8px #888888;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0px 28px 28px 28px;
  padding-bottom: 15px;
  border-bottom: 1px solid #d9d9d9;

  &:first-child {
    margin-top: 28px;
  }

  div.user {
    display: flex;
    img {
      height: 50px;
      border-radius: 50%;
    }
    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: 20px;

      small {
        color: #777;
        font-size: 13px;
      }
    }
  }
  div.icons {
    i.close {
      color: red;
      font-size: 20px;
    }
    i.arrow {
      margin-left: 15px;
      color: #888888;
    }
  }
`;
