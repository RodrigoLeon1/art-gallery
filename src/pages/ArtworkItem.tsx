import { useParams } from "react-router-dom";
import styled from "styled-components";
import useArtworkItem from "../hooks/useArtworkItem";
import { Button } from "../styled-components/styled-components";
import { Routes } from "../utils/routes.utils";

const ArtworkItem = () => {
  const { artworkId } = useParams();
  const { artwork, isLoading, isError } = useArtworkItem(Number(artworkId));

  return (
    <>
      <Button to={Routes.HOME}>Back</Button>

      <TwoColumns>
        <figure style={{ marginLeft: 0 }}>
          <Image src={artwork?.image.src} alt={artwork?.image.altText} />
        </figure>

        <div>
          {artwork?.title && <Title>{artwork.title}</Title>}

          {artwork?.description && (
            <Span dangerouslySetInnerHTML={{ __html: artwork.description }} />
          )}

          <ul>
            {artwork?.year && <li>Year: {artwork.year}</li>}
            {artwork?.dimension && <li>Dimensions: {artwork.dimension}</li>}
            {artwork?.artist.name && <li>Artist: {artwork.artist.name}</li>}
          </ul>
        </div>
      </TwoColumns>
    </>
  );
};

export default ArtworkItem;

const TwoColumns = styled.div`
  margin-top: 1rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media screen and (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
`;

const Title = styled.h1`
  margin-top: 1rem;
  font-size: 5rem;
  line-height: 120%;
`;

const Span = styled.span`
  font-size: 15px;
`;
