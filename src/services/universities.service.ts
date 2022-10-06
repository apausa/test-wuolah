import axios from 'axios';

// Types
import { IQueryParams } from '../types/universities.types';

// Constants
import routes from '../utils/endpoints';

const getUniversities = async (pageParam: number): Promise<any> => {
  try {
    const queryParams: IQueryParams = { pagination: { withCount: true, page: pageParam, pageSize: 16 }, sort: 'name' };
    const { data: { data, meta: { pagination: { page, total, pageSize } } } }: any = await axios
      .get(routes.UNIVERSITIES, { params: queryParams });
    const nextPage: number = await page + 1;
    const allPages: number = Math.trunc(total / pageSize);

    return { response: { data, meta: { nextPage, allPages } } };
  } catch {
    return { response: null };
  }
};

export default getUniversities;
