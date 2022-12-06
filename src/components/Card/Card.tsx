import { FC } from "react";
import { Image } from "../../models/Image";
import {
  CardImageStyled,
  CardStyled,
  CardTypeStyled,
  CardTitleStyled,
} from "./styled-components/styled-components";

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
      {title && <CardTitleStyled to={to}>{title}</CardTitleStyled>}
    </CardStyled>
  );
};

export default Card;
