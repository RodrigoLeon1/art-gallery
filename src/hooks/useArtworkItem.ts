import { useQuery } from "react-query";
import artworkAdapter from "../models/adapter/artwork.adapter";
import { ARTWORK_QUERY_ID, getArtworkById } from "../services/artwork.service";

const useArtworkItem = (artworkId: number) => {
  const queryKey = [ARTWORK_QUERY_ID.GET_ARTWORK_BY_ID, artworkId];

  const { data, isLoading, isError } = useQuery(queryKey, () => {
    return getArtworkById(artworkId);
  });

  let artwork;
  if (!isLoading && data?.data) {
    artwork = artworkAdapter(data?.data);
  }

  return { artwork, isLoading, isError };
};

export default useArtworkItem;
