import React from 'react';
import { NextPage } from 'next/types';
import {
  useQuery,
  useQueryClient,
  QueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import getUniversidades from '../services/universidad.service';
import Loading from '../components/loading';

const UniversidadesPage: NextPage = () => {
  const {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isLoading, isError, data, error,
  }: UseQueryResult = useQuery(['universidades'], getUniversidades);

  if (isLoading) return (<Loading />);
  if (isError) return (<p>Error</p>); // @todo redirect, send error obejct

  return (
    <main>
      Universidades component
      <p>Data</p>
    </main>
  );
};
export default UniversidadesPage;
