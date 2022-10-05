import React from 'react';
import { NextPage } from 'next/types';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  UseQueryResult,
} from '@tanstack/react-query';
import getUniversidades from '../services/universidad.service';
import Loading from '../components/loading';

const UniversidadesPage: NextPage = () => {
  const queryClient: QueryClient = useQueryClient();
  const {
    isLoading, isError, data, error,
  }: UseQueryResult = useQuery(['universidades'], getUniversidades);

  if (isLoading) return (<Loading />);
  if (isError) return (<p>{error}</p>); // @todo redirect, send error obejct

  return (
    <main>
      Universidades component
      <p>{{ data }}</p>
    </main>
  );
};
export default UniversidadesPage;
