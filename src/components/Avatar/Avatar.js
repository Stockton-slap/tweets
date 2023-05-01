import PropTypes from "prop-types";

import { Circle, CircleWrapper } from "./Avatar.styled";

const Avatar = ({ avatar }) => {
  return (
    <CircleWrapper>
      <Circle avatar={avatar} />
    </CircleWrapper>
  );
};

Avatar.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Avatar;
