import {
  WelcomePageContainer,
  WelcomePageTitle,
  WelcomePageLink,
} from "./WelcomePage.styled";

const WelcomePage = () => {
  return (
    <WelcomePageContainer>
      <WelcomePageTitle>Welcome to the homepage!</WelcomePageTitle>
      <WelcomePageLink to="/tweets">View all users</WelcomePageLink>
    </WelcomePageContainer>
  );
};

export default WelcomePage;
