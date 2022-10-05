export interface Pagination {
  withCount?: boolean;
  page?: number;
  pageSize?: number;
}

export interface University {
  id: number;
  slug: string;
  name: string;
  shortName?: string;
  logoUrl: string;
}

export interface QueryParams {
  pagination?: Pagination;
  sort?: 'name' | 'id';
}

export interface Response {
  data: University[],
  meta: {
    page: number;
    pageSize: number;
    pageCount: number;
    total?: number;
  }
}
