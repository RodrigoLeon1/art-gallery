import { ApiArtwork } from '../api/ApiArtwork';
import { Artwork } from '../Artwork';

const artworkAdapter = (apiModel: ApiArtwork): Artwork => {
  return {
    id: apiModel.id,
    title: apiModel.title,
    type: apiModel.artwork_type_title,
    description: apiModel.on_loan_display,
    year: apiModel.fiscal_year,
    dimension: apiModel.dimensions,
    image: {
      src: apiModel.thumbnail?.lqip,
      altText: apiModel.thumbnail?.alt_text,
    },
    artist: {
      id: apiModel.artist_id,
      name: apiModel.artist_title,
    },
  };
};

export default artworkAdapter;
