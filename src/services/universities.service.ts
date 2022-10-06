import axios from 'axios';

// Types
import { IResponse, IQueryParams, IUniversity } from '../types/universities.types';

// Constants
import routes from '../utils/endpoints';

const getUniversities = async (): Promise<IUniversity[] | null> => {
  try {
    const queryParams: IQueryParams = { pagination: { withCount: true, page: 0, pageSize: 10 }, sort: 'name' };
    const { data }: IResponse = await axios.get(routes.UNIVERSITIES, { params: queryParams });

    return data;
  } catch {
    return null;
  }
};

export default getUniversities;
