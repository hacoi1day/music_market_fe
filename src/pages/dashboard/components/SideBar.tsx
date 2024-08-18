import { Sidebar } from "flowbite-react";
import { HiShoppingBag, HiUser } from "react-icons/hi";
import styled from "styled-components";

const SidebarWrapper = styled(Sidebar)`
  height: calc(100vh - 60px);
`;

const SideBar = () => {
  return (
    <SidebarWrapper>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="" icon={HiUser}>
            Người dùng
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Bài hát
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </SidebarWrapper>
  );
};

export default SideBar;
