import Link from 'next/link';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next/types';
import React from 'react';
import Image from 'next/image';

import getUniversities from '../services/universidades/universities.service';
import { University } from '../services/universidades/universities.types';

const UniversidadesPage: NextPage = ({ data }: any): any => (
  <main>
    <ul>
      {data.map(({
        id, name, slug, logoUrl,
      }: University) => (
        <li key={id}>
          <Link href={`/${encodeURIComponent(slug)}`}>
            <div>
              <a>{name}</a>
              <Image
                src={logoUrl}
                  // layout="fill"
                width="10"
                height="10"
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
: Promise<GetStaticPropsResult< University[]>> => {
  const data: University[] | null = await getUniversities();
  if (!data) { return { notFound: true }; }

  return { props: data };
};
