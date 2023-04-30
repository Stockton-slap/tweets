import styled from "styled-components";
import bgImage from "../../images/bg-image.png";

export const Card = styled.li`
  background-image: linear-gradient(#471ca9, #5736a3 69.1%, #4b2a99);

  width: 380px;
  height: 460px;

  position: relative;

  border-radius: 20px;

  list-style: none;
`;

export const LogoWrapper = styled.div`
  svg {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 168px;

  background-image: url(${bgImage});
  background-repeat: no-repeat;
  background-position: center;
`;

export const Rectangle = styled.div`
  height: 8px;
  width: 100%;
  position: absolute;
  top: 50%;

  background-color: #ebd8ff;
  box-shadow: inset 0px 3.44px 2.58px #fbf8ff, 0px 3.44px 3.44px #0000000f,
    inset 0px -1.72px 3.44px #ae7be3;
`;
