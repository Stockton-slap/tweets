import styled from "styled-components";
import { Button, ButtonWrapper } from "../../utils/reusableStyles";

export const Container = styled.div`
  padding: 100px;
  height: 100vh;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

export const LoadMoreContainer = styled(ButtonWrapper)``;

export const TopButtonsContainer = styled(ButtonWrapper)`
  justify-content: space-around;
`;

export const BackButton = styled(Button)`
  margin-bottom: 50px;
`;

export const LoadMoreButton = styled(Button)`
  margin-top: 50px;
  margin-bottom: 50px;
`;
