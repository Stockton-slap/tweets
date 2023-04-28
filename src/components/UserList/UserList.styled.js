import styled from "styled-components";

export const Container = styled.div`
  padding: 100px;
  background-color: aliceblue;
  height: 100vh;
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  justify-items: center;
  align-items: center;
`;

export const LoadMoreButton = styled.button`
  width: 196px;
  padding-top: 14px;
  padding-bottom: 14px;

  border: none;
  border-radius: 10.31px;

  cursor: pointer;

  background-color: #5cd3a8;
  color: #373737;

  box-shadow: 0px 3.44px #00000040;

  font-weight: 600;
  font-size: 18px;
  line-height: 1.22;
  // ---------------------
  margin-top: 50px;
`;
