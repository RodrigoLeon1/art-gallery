import { useInfiniteQuery } from 'react-query';
import artworkAdapter from '../models/adapter/artwork.adapter';
import { Artwork } from '../models/Artwork';
import { ARTWORK_QUERY_ID, getArtworksWithPagination } from '../services/artwork.service';

const useArtworks = () => {
  const { data, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery(
    ARTWORK_QUERY_ID.GET_ARTWORKS,
    async ({ pageParam = 1 }) => {
      return getArtworksWithPagination(pageParam);
    },
    {
      getNextPageParam: (lastPage) => {
        const { current_page, total_pages } = lastPage.pagination;
        return current_page >= total_pages ? undefined : current_page + 1;
      },
    }
  );

  // Map the api model to our model
  const artworks: Artwork[] =
    data?.pages.reduce((prev, page) => prev.concat(page.data.map((artwork) => artworkAdapter(artwork))), new Array()) ??
    [];

  return {
    artworks,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
    isLoading,
    isError,
  };
};

export default useArtworks;
