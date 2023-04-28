import styled from "styled-components";
import Hansel from "../../images/Hansel.png";

export const Rectangle = styled.div`
  height: 8px;
  width: 100%;
  position: absolute;
  top: 50%;

  background-color: #ebd8ff;
  box-shadow: inset 0px 3.44px 2.58px #fbf8ff, 0px 3.44px 3.44px #0000000f,
    inset 0px -1.72px 3.44px #ae7be3;
`;

export const Circle = styled.div`
  width: 80px;
  height: 80px;

  /* background-color: inherit; */

  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${Hansel});

  border-radius: 50%;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  border-width: 8px;
  border-style: solid;
  border-color: #ebd8ff;

  box-shadow: inset 0px 3.44px 2.58px #fbf8ff, 0px 3.44px 3.44px #0000000f;
`;

export const AvatarImage = styled.img``;
