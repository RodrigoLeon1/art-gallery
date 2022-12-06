import { FC } from "react";
import { Image } from "../../models/Image";
import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  image: Image;
  type: string;
  to: string;
}

const Card: FC<Props> = ({ title, image, type, to }) => {
  return (
    <CardStyled>
      <CardImageStyled src={image.src} alt={image.altText} />

      {type && <CardTypeStyled>{type}</CardTypeStyled>}

      <CardTitleStyled to={to}>{title}</CardTitleStyled>
    </CardStyled>
  );
};

export default Card;

const CardStyled = styled.article`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: start;
  width: 400px;
  height: 350px;
  margin-bottom: 5rem;
`;

const CardImageStyled = styled.img`
  width: 100%;
  height: 300px;
  border-radius: 5px;
`;

const CardTypeStyled = styled.span`
  border-radius: 30px;
  padding: 3px 10px;
  font-size: 12px;
  color: var(--color-white);
  background-color: var(--color-red);
  margin-top: 1rem;
`;

const CardTitleStyled = styled(Link)`
  color: var(--color-gray);
  font-size: 20px;
  padding-top: 1rem;
  text-decoration: none;

  &:hover {
    color: var(--color-red);
    text-decoration: underline;
  }
`;
