import React from 'react';
import Link from 'next/link';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next/types';
import Image from 'next/image';

// Services
import getUniversities from '../services/universities.service';

// Types
import { IUniversity } from '../types/universities.types';

const UniversidadesPage: NextPage = ({ data }: any): any => ( // @todo
  <main>
    <ul>
      {data.map(({
        id, name, slug, logoUrl, shortName,
      }: IUniversity) => (
        <li key={id}>
          <Link href={`/${encodeURIComponent(slug)}`}>
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
          </Link>
        </li>
      ))}
    </ul>
  </main>
);

export default UniversidadesPage;

export const getStaticProps: GetStaticProps = async ()
: Promise<GetStaticPropsResult< IUniversity[]>> => {
  const data: IUniversity[] | null = await getUniversities();
  if (!data) { return { notFound: true }; }

  return { props: data };
};
