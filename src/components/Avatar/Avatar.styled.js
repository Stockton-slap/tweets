import styled from "styled-components";

export const Circle = styled.div`
  width: 100%;
  height: 100%;

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${(props) => props.avatar});
`;

export const CircleWrapper = styled.div`
  width: 80px;
  height: 80px;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-radius: 50%;
  overflow: hidden;

  border-width: 8px;
  border-style: solid;
  border-color: #ebd8ff;

  box-shadow: inset 0px 3.44px 2.58px #fbf8ff, 0px 3.44px 3.44px #0000000f;
`;
