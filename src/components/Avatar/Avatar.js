import { Circle, Rectangle, Wrap, AvatarImage } from "./Avatar.styled";

const Avatar = () => {
  return (
    <Rectangle>
      <Circle>
        <AvatarImage />
      </Circle>
    </Rectangle>
  );
};

export default Avatar;
