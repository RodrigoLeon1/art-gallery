import useArtworks from "../hooks/useArtworks";
import ArtworkGrid from "../components/ArtworkGrid/ArtworkGrid";
import Spinner from "../components/Spinner/Spinner";

export const Home = () => {
  const { artworks, isLoading } = useArtworks();

  if (isLoading || !artworks) {
    return <Spinner />;
  }

  return <ArtworkGrid artworks={artworks} />;
};

export default Home;
