import useArtworks from "../hooks/useArtworks";
import ArtworkGrid from "../components/ArtworkGrid/ArtworkGrid";

export const Home = () => {
  const { artworks, isError, isLoading } = useArtworks();

  if (isLoading || isError || !artworks) {
    return <>Loading...</>;
  }

  return <ArtworkGrid artworks={artworks} />;
};

export default Home;
