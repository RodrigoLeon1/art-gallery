import { FC } from "react";
import { Artwork } from "../../models/Artwork";
import { Routes } from "../../utils/routes.utils";
import Card from "../Card/Card";
import { ArtworkGridStyled } from "./styled-components/styled-components";

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

export default ArtworkGrid;
