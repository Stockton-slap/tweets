import { Circle, CircleWrapper } from "./Avatar.styled";

const Avatar = ({ name, avatar }) => {
  return (
    <CircleWrapper>
      <Circle avatar={avatar} />
    </CircleWrapper>
  );
};

export default Avatar;
