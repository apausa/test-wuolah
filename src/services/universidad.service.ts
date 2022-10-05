import axios from 'axios';
import { Response, University } from '../types/universidades.types';
import endpoints from '../utils/endpoints';

const getUniversities = async (): Promise<University[] | unknown> => {
  try {
    const { data }: Response = await axios.get(endpoints.UNIVERSITIES);
    return data;
  } catch (error: unknown) {
    return error;
  }
};

export default getUniversities;
