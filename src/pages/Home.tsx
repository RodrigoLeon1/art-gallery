import ArtworkGrid from '../components/ArtworkGrid/ArtworkGrid';
import Spinner from '../components/Spinner/Spinner';
import useArtworks from '../hooks/useArtworks';

export const Home = () => {
  const { artworks, fetchNextPage, hasNextPage, isLoading } = useArtworks();

  if (isLoading || !artworks) {
    return <Spinner />;
  }

  return <ArtworkGrid artworks={artworks} hasMoreArtworks={hasNextPage ?? false} fetchNextPage={fetchNextPage} />;
};

export default Home;
