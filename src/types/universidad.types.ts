import { Pagination, University } from './index.types';

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
