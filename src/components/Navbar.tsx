import { TextInput } from "flowbite-react";
import React from "react";
import styled from "styled-components";

const NavbarWrapper = styled.nav`
  padding: 20px 80px;
  gap: 10px;
  background-color: #ff3179;

  h1 {
    font-family: Pacifico;
    font-size: 32px;
    font-weight: 400;
    line-height: 32px;
    text-align: left;
    color: #fdd602;
    margin-right: 20px;
  }

  .search {
    width: 360px;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper className="navbar">
      <div className="flex">
        <h1>Music Market</h1>
        <div className="search">
          <TextInput
            id="search"
            type="text"
            placeholder="Type any name here"
            className="w-full"
          />
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
