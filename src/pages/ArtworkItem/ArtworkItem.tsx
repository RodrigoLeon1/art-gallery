import { useParams } from 'react-router-dom';
import Spinner from '../../components/Spinner/Spinner';
import useArtworkItem from '../../hooks/useArtworkItem';
import { Button } from '../../styled-components/styled-components';
import { Routes } from '../../utils/routes.utils';
import { TwoColumns, Image, Title, Span } from './styled-components/styled-components';

const ArtworkItem = () => {
  const { artworkId } = useParams();
  const { artwork, isLoading } = useArtworkItem(Number(artworkId));

  if (isLoading || !artwork) {
    return <Spinner />;
  }

  return (
    <>
      <Button to={Routes.HOME}>Back</Button>

      <TwoColumns>
        <figure style={{ marginLeft: 0 }}>
          <Image src={artwork?.image.src} alt={artwork?.image.altText} />
        </figure>

        <div>
          {artwork?.title && <Title>{artwork.title}</Title>}

          {artwork?.description && <Span dangerouslySetInnerHTML={{ __html: artwork.description }} />}

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
