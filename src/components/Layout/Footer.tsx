import styled from 'styled-components';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <FooterStyled>
      Project for educational purposes. Created by&nbsp;
      <FooterLinkStyled href="https://github.com/RodrigoLeon1" target="_blank">
        Rodrigo Leon
      </FooterLinkStyled>
      &nbsp;© {currentYear}
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background-color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
`;

const FooterLinkStyled = styled.a`
  color: var(--color-red);
`;

export default Footer;
