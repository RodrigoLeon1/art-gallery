import { Span } from '../../styled-components/styled-components';
import { HeaderStyled } from './styled-components/styled-components';
import logo from '../../assets/svg/logo.svg';

const Header = () => {
  return (
    <HeaderStyled>
      <img src={logo} alt="Art logo" />

      <h1>
        <Span>Art </Span> Institute Chicago
      </h1>
    </HeaderStyled>
  );
};

export default Header;
