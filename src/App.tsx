import styled from "styled-components";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import Songs from "./components/Songs";
import Footer from "./components/Footer";

const WrapperContainer = styled.div`
  padding: 0 80px 80px 80px;
`;

const App = () => {
  return (
    <>
      <Navbar />
      <WrapperContainer>
        <Banner />
        <Songs title="New Songs" />
        <Songs title="Top Download Songs" />
        <Footer />
      </WrapperContainer>
    </>
  );
};

export default App;
