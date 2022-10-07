import axios, { AxiosResponse } from 'axios';

// Types
import { IGetUniversities, IQueryParams } from '../types/universities.types';

// Constants
import routes from '../utils/endpoints';

const getUniversities = async (pageParam: number): Promise<IGetUniversities> => {
  try {
    const queryParams: IQueryParams = { pagination: { withCount: true, page: pageParam, pageSize: 16 }, sort: 'name' };
    const {
      data: { data, meta: { pagination: { page, total, pageSize } } },
    }: AxiosResponse<any> = await axios.get(routes.UNIVERSITIES, { params: queryParams });
    const nextPage: number = page + 1;
    const allPages: number = Math.trunc(total / pageSize);

    return { response: { data, meta: { nextPage, allPages } } };
  } catch {
    return { response: null };
  }
};

export default getUniversities;
