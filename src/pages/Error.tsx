import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../styled-components/styled-components';
import { Routes } from '../utils/routes.utils';

const ErrorStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  justify-content: center;
`;

const ErrorTitleStyled = styled.h2`
  line-height: 120%;
  font-size: 4rem;
`;

const ErrorSubtitleStyled = styled.span`
  font-size: 2rem;
`;

const Error = () => {
  const error: any = useRouteError();

  return (
    <ErrorStyled>
      <ErrorTitleStyled>Oops! Sorry, an unexpected error has occurred.</ErrorTitleStyled>
      <ErrorSubtitleStyled>{error.statusText || error.message}</ErrorSubtitleStyled>

      <Button to={Routes.HOME}>Back to home</Button>
    </ErrorStyled>
  );
};

export default Error;
