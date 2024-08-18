import styled from "styled-components";

const FooterWrapper = styled.div`
  hr {
    margin-bottom: 20px;
  }

  p {
    font-family: Inter;
    font-size: 16px;
    font-weight: 400;
    line-height: 20px;
    text-align: left;
    color: #22313f;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <hr />
      <p>© Music Market 2023. All Rights Reserved.</p>
    </FooterWrapper>
  );
};

export default Footer;
