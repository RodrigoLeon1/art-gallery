export interface PaginatedResult<T> {
  pagination: Pagination;
  data: T;
}

interface Pagination {
  total: number;
  limit: number;
  offset: number;
  total_pages: number;
  current_page: number;
  next_url: string;
}
