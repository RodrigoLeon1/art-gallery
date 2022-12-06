import { FC } from 'react';
import { CardImageStyled, CardStyled, CardTypeStyled, CardTitleStyled } from './styled-components/styled-components';

interface Props {
  title: string;
  imageUrl: string;
  imageAltText: string;
  type: string;
  to: string;
}

const Card: FC<Props> = ({ title, imageUrl, imageAltText, type, to }) => {
  return (
    <CardStyled>
      <CardImageStyled src={imageUrl} alt={imageAltText} loading="lazy" />

      {type && <CardTypeStyled>{type}</CardTypeStyled>}
      {title && <CardTitleStyled to={to}>{title}</CardTitleStyled>}
    </CardStyled>
  );
};

export default Card;
