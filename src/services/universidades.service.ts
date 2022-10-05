import axios from 'axios';
import { Response } from '../types/universidad.types';
import endpoints from '../utils/endpoints';

const getUniversity = async (query: string): Promise<Response | unknown> => {
  try {
    const university: Response = await axios.get(`${endpoints.UNIVERSITIES}/${query}`);
    return university;
  } catch (error: unknown) {
    return error;
  }
};

export default getUniversity;
