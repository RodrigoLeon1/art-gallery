import axios from "axios";
import { ApiArtwork } from "../models/api/ApiArtwork";
import { PaginatedResult } from "../models/PaginatedResult";

const baseUrl = `${import.meta.env.VITE_API_URL}/artworks`;

export const getArtworks = async (): Promise<PaginatedResult<ApiArtwork[]>> => {
  const res = await axios.get(baseUrl);
  return res.data;
};

export const getArtworksWithPagination = async (
  page: number,
  limit?: number
): Promise<PaginatedResult<ApiArtwork[]>> => {
  const urlWithParams = `${baseUrl}?page=${page}&limit=${limit ?? 20}`;
  const res = await axios.get(urlWithParams);
  return res.data;
};

export const getArtworkById = async (
  id: number
): Promise<PaginatedResult<ApiArtwork>> => {
  const dynamicUrl = `${baseUrl}/${id}`;
  const res = await axios.get(dynamicUrl);
  return res.data;
};

// Enum used as key for react-query
export const ARTWORK_QUERY_ID = {
  GET_ARTWORKS: "GET_ARTWORKS",
  GET_ARTWORKS_PAGINATED: "GET_ARTWORKS_PAGINATED",
  GET_ARTWORK_BY_ID: "GET_ARTWORK_BY_ID",
} as const;
