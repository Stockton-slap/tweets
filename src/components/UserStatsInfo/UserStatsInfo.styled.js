import styled from "styled-components";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 62px;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const Button = styled.button`
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;

  border: none;
  border-radius: 10.31px;

  background-color: ${({ isClicked }) => (isClicked ? "#5CD3A8" : "#EBD8FF")};
  color: #373737;

  box-shadow: 0px 3.44px #00000040;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
`;
