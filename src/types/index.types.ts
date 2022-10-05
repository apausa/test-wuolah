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
