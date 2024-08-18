import { Banner } from "flowbite-react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import Songs from "../components/Songs";
import Footer from "../components/Footer";

const HomePageWrapper = styled.div``;
const WrapperContainer = styled.div`
  padding: 0 80px 80px 80px;

  @media (max-width: 640px) {
    padding: 0 20px 20px 20px;
  }
`;

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Navbar />
      <WrapperContainer>
        <Banner />
        <Songs title="New Songs" />
        <Footer />
      </WrapperContainer>
    </HomePageWrapper>
  );
};

export default HomePage;
