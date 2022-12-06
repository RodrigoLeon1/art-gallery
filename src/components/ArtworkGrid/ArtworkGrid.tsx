import { FC } from "react";
import { Artwork } from "../../models/Artwork";
import { Routes } from "../../utils/routes.utils";
import Card from "../Card/Card";
import { ArtworkGridStyled } from "./styled-components/styled-components";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "../Spinner/Spinner";

interface Props {
  artworks: Artwork[];
  fetchNextPage: () => void;
  hasMoreArtworks: boolean;
}

const ArtworkGrid: FC<Props> = ({
  artworks,
  fetchNextPage,
  hasMoreArtworks,
}) => {
  const hasArtworks = artworks.length > 0;

  return (
    <InfiniteScroll
      dataLength={artworks.length}
      hasMore={hasMoreArtworks}
      loader={<Spinner />}
      next={() => fetchNextPage()}
      style={{ overflow: "initial" }}
    >
      <ArtworkGridStyled>
        {hasArtworks ? (
          artworks.map((artwork) => (
            <Card
              key={artwork.id}
              title={artwork.title}
              image={artwork.image}
              type={artwork.type}
              to={`${Routes.ARTWORK}/${artwork.id}`}
            />
          ))
        ) : (
          <span>Nothing to show.</span>
        )}
      </ArtworkGridStyled>
    </InfiniteScroll>
  );
};

export default ArtworkGrid;
