import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 10px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--color-white);
  color: var(--color-gray);
  border-bottom: 1px solid #eaecef;
`;

export const Container = styled.section`
  margin: auto;
  padding: 10rem 2rem 10rem 2rem;
  max-width: 1500px;
`;

export const Span = styled.span`
  color: var(--color-red);
`;

export const Button = styled(Link)`
  color: var(--color-gray);
  padding: 5px 20px;
  text-decoration: none;
  border: 1px solid var(--color-gray);
`;
