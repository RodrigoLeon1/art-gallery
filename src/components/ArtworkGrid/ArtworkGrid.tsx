import { FC } from "react";
import styled from "styled-components";
import { Artwork } from "../../models/Artwork";
import { Routes } from "../../utils/routes.utils";
import Card from "../Card/Card";

interface Props {
  artworks: Artwork[];
}

const ArtworkGrid: FC<Props> = ({ artworks }) => {
  const hasArtworks = artworks.length > 0;

  return (
    <ArtworkGridStyled>
      {hasArtworks ? (
        artworks.map((artwork) => (
          <Card
            title={artwork.title}
            image={artwork.image}
            type={artwork.type}
            to={`${Routes.ARTWORK}/${artwork.id}`}
            key={artwork.id}
          />
        ))
      ) : (
        <>Nothing to show.</>
      )}
    </ArtworkGridStyled>
  );
};

const ArtworkGridStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 6rem;
`;

export default ArtworkGrid;
