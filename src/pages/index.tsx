import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { QueryFunctionContext, useInfiniteQuery } from '@tanstack/react-query';

// Types
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next/types';
import { IUniversity } from '../types/universities.types';

// Services
import getUniversities from '../services/universities.service';

const UniversidadesPage: NextPage = ({ response }: any): any => {
  const { data, hasNextPage, fetchNextPage }: any = useInfiniteQuery(
    ['getUniversities'],
    ({ pageParam }: QueryFunctionContext): any => ((pageParam === null)
      // To stop at the end
      ? ({ response: { data: [], meta: { nextPage: 47, currentPage: 47 } } })
      : getUniversities(pageParam)),
    {
      initialData: (): any => ({ pages: [response] }),
      getNextPageParam: (
        { response: { meta: { nextPage, allPages } } },
      ) => ((nextPage < allPages) ? nextPage : null),
    },
  );

  const onScroll = async (event: any) => {
    const { scrollHeight, scrollTop, clientHeight } = event.target.scrollingElement;
    if ((clientHeight + scrollTop === scrollHeight) && hasNextPage) await fetchNextPage();
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => { document.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <main>
      <ul>
        {data.pages.map((page: any) => (
          page.response.data.map(({
            id, name, slug, logoUrl, shortName,
          }: IUniversity) => (
            <li key={id}>
              <Link href={`/${encodeURIComponent(slug)}`}>
                <div>
                  <p>{name}</p>
                  <p>{shortName}</p>
                  <Image
                    alt={shortName}
                    src={logoUrl}
                    width="100"
                    height="100"
                  />
                </div>
              </Link>
            </li>
          ))))}
      </ul>
    </main>
  );
};

export default UniversidadesPage;

export const getStaticProps: GetStaticProps = async ()
: Promise<GetStaticPropsResult<any>> => {
  const { response }: any = await getUniversities(0);
  if (!response) { return { notFound: true }; }
  return { props: { response: { response } } };
};
