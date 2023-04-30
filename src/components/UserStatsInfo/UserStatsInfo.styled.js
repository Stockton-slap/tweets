import styled from "styled-components";
import { Button } from "../../utils/reusableStyles";

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  bottom: 36px;
  margin: 0 auto;
  width: 100%;
`;

export const Tweets = styled.p`
  margin-bottom: 16px;
`;

export const Followers = styled.p`
  margin-bottom: 26px;
`;

export const FollowButton = styled(Button)`
  background-color: ${({ isFollowed }) => (isFollowed ? "#5CD3A8" : "#EBD8FF")};
`;
