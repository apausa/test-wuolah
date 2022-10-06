import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next/types';

import React from 'react';
import { University } from '../../services/universidades/universities.types';
import getUniversity from '../../services/universidades/university/university.service';
import { IGetUniversity } from '../../services/universidades/university/university.types';

const UniversidadPage: NextPage = ({ data }: any): any => (
  <main>
    <pre>{data}</pre>
  </main>
);

export default UniversidadPage;

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: 'blocking' });

export const getStaticProps: GetStaticProps = async ({ params })
: Promise<GetStaticPropsResult<University>> => {
  const { data }: IGetUniversity = await getUniversity(params?.universidad);
  if (!data) { return { notFound: true }; }

  return { props: data };
};
