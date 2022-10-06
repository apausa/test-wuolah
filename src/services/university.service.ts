import axios, { AxiosResponse } from 'axios';

// Constants
import endpoints from '../utils/endpoints';

// Types
import { IUniversity } from '../types/universities.types';

const getUniversity = async (query: any): Promise<IUniversity | null> => {
  try {
    const { data }: AxiosResponse = await axios.get(`${endpoints.UNIVERSITIES}/${query}`);

    return data;
  } catch {
    return null;
  }
};

export default getUniversity;
