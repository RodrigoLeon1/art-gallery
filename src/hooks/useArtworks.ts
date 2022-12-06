import { useQuery } from "react-query";
import artworkAdapter from "../models/adapter/artwork.adapter";
import { ARTWORK_QUERY_ID, getArtworks } from "../services/artwork.service";

const useArtworks = () => {
  const { data, isLoading, isError } = useQuery(
    ARTWORK_QUERY_ID.GET_ARTWORKS,
    getArtworks
  );

  // Map the api model to our model
  const artworks = data?.data.map((apiArtwork) => artworkAdapter(apiArtwork));

  return { artworks, isLoading, isError };
};

export default useArtworks;
