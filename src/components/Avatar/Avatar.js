import { Circle, Rectangle } from "./Avatar.styled";

const Avatar = ({ name, avatar }) => {
  return (
    <Rectangle>
      <Circle avatar={avatar} />
    </Rectangle>
  );
};

export default Avatar;
