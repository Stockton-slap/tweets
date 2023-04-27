import styled from "styled-components";
import bgImage from "../../images/bg-image.png";

export const CardContainer = styled.div`
  background-image: linear-gradient(#471ca9, #5736a3 69.1%, #4b2a99);

  width: 380px;
  height: 460px;

  position: relative;

  border-radius: 20px;
`;

export const LogoWrapper = styled.div`
  svg {
    margin-left: 20px;
    margin-top: 20px;
  }
`;

export const BackgroundImage = styled.div`
  background-image: url(${bgImage});

  width: 308px;
  height: 168px;
  position: absolute;
  top: 28px;
  left: 36px;
`;
