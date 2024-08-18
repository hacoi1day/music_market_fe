import { Button } from "flowbite-react";
import styled from "styled-components";
import Navbar from "./components/Navbar";

const WrapperContainer = styled.div`
  padding: 0 80px;
`;

const App = () => {
  return (
    <>
      <Navbar />
      <WrapperContainer>
        <h1 className="text-3xl font-bold">Hello world!</h1>
        <Button>Click me</Button>
      </WrapperContainer>
    </>
  );
};

export default App;
