import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import logoHorizontal from "../../assets/images/logo-ngang.svg";
import SideBar from "./components/Sidebar";

const DashboardWrapper = styled.div``;

const DashboardPage = () => {
  return (
    <DashboardWrapper>
      <Navbar fluid rounded>
        <Navbar.Brand href="/dashboard">
          <img src={logoHorizontal} className="mr-3 h-6 sm:h-9" alt="logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Music Market
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            {/* <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item> */}
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
      </Navbar>
      <div className="flex">
        <div>
          <SideBar />
        </div>
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </DashboardWrapper>
  );
};

export default DashboardPage;
