import axios from 'axios';
import { IResponse, QueryParams, University } from './universities.types';
import routes from '../../utils/endpoints';

const getUniversities = async (): Promise<University[] | null> => {
  try {
    const queryParams: QueryParams = { pagination: { withCount: true, page: 0, pageSize: 10 }, sort: 'name' };
    const { data }: IResponse = await axios.get(routes.UNIVERSITIES, { params: queryParams });

    return data;
  } catch {
    return null;
  }
};

export default getUniversities;
