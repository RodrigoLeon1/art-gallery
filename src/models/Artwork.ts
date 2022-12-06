import { Artist } from "./Artist";
import { Image } from "./Image";

export interface Artwork {
  id: number;
  title: string;
  type: string;
  description: string;
  year: number;
  dimension: string;
  image: Image;
  artist: Artist;
}
