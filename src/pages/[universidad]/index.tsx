import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next/types';
import Image from 'next/image';
import React from 'react';

// Types
import { IUniversity } from '../../types/universities.types';

// Services
import getUniversity from '../../services/university.service';

const UniversidadPage: NextPage = ({ name, shortName, logoUrl }: any): any => ( // @ todo
  <main>
    <div>
      <p>{name}</p>
      <p>{shortName}</p>
      <Image
        src={logoUrl}
        // layout="fill"
        width="100"
        height="100"
      />
    </div>
  </main>
);

export default UniversidadPage;

export const getStaticPaths: GetStaticPaths = async () => ({ paths: [], fallback: 'blocking' });

export const getStaticProps: GetStaticProps = async ({ params })
: Promise<GetStaticPropsResult<IUniversity>> => {
  const data: IUniversity | null = await getUniversity(params?.universidad);
  if (!data) { return { notFound: true }; }

  return { props: data };
};
