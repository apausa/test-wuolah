import axios, { AxiosResponse } from 'axios';
import endpoints from '../../../utils/endpoints';
import { IGetUniversity } from './university.types';

const getUniversity = async (query: any): Promise<IGetUniversity> => {
  try {
    const { data }: AxiosResponse = await axios.get(`${endpoints.UNIVERSITIES}/${query}`);

    return { data };
  } catch {
    return { data: null };
  }
};

export default getUniversity;
