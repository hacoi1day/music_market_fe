import { Carousel } from "flowbite-react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  height: 565px;
  margin-bottom: 80px;
`;

const Banner = () => {
  return (
    <BannerWrapper>
      <Carousel>
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="..."
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="..."
        />
      </Carousel>
    </BannerWrapper>
  );
};

export default Banner;
