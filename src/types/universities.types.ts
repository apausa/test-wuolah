export interface IPagination {
  withCount?: boolean;
  page?: number;
  pageSize?: number;
}

export interface IUniversity {
  id: number;
  slug: string;
  name: string;
  shortName?: string;
  logoUrl: string;
}

export interface IQueryParams {
  pagination?: IPagination;
  sort?: 'name' | 'id';
}

export interface IResponse {
  data: IUniversity[],
  meta?: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    }
  }
}

export interface IGetUniversities {
  response: IGetUniversitiesResponse | null
}

export interface IGetUniversitiesResponse {
  meta: {
    nextPage: number,
    allPages: number
  }
  data: IUniversity[],
}

export interface IServiceResponse {
  success: boolean,
  data: IUniversity[],
}

export interface IRedirect {
  redirect: { destination: string; };
}

export interface IProps {
  universities: IUniversity[]
}

export interface IUseInfinityQueryData {
  pages: IGetUniversities[]
}
