import styled from "styled-components";

export const TwoColumns = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h1`
  margin-top: 1rem;
  font-size: 5rem;
  line-height: 120%;
`;

export const Span = styled.span`
  font-size: 15px;
`;
