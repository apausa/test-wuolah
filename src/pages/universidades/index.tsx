import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { QueryFunctionContext, useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
import { GetStaticProps, GetStaticPropsResult, NextPage } from 'next/types';
import {
  Heading, Text, Spinner, VStack, Box, HStack, StackDivider, Center,
} from '@chakra-ui/react';

import { IGetUniversities, IUniversity, IUseInfinityQueryData } from '../../types/universities.types';
import getUniversities from '../../services/universities.service';

const UniversidadesPage: NextPage<IGetUniversities> = ({ response }) => {
  const {
    data, hasNextPage, fetchNextPage, isFetchingNextPage,
  }
  : UseInfiniteQueryResult<IUseInfinityQueryData> = useInfiniteQuery(
    ['getUniversities'],
    ({ pageParam }: QueryFunctionContext)
    : Promise<IGetUniversities> | IGetUniversities => ((pageParam === null)
      ? ({ response: { data: [], meta: { nextPage: 47, allPages: 47 } } })
      : getUniversities(pageParam)),
    {
      initialData: (): any => ({ pages: [response] }),
      getNextPageParam: (
        { response: { meta: { nextPage, allPages } } }: any,
      ): number | null => ((nextPage < allPages) ? nextPage : null),
    },
  );

  const onScroll = async (event: any): Promise<void> => {
    const { target: { scrollingElement: { scrollHeight, scrollTop, clientHeight } } } = event;
    if ((clientHeight + scrollTop === scrollHeight) && hasNextPage) await fetchNextPage();
  };

  useEffect((): (() => void) => {
    document.addEventListener('scroll', onScroll);
    return () => { document.removeEventListener('scroll', onScroll); };
  }, []);

  return (
    <main>
      <Center>
        <VStack mt="4" align="flex-start" spacing="4" divider={<StackDivider />} width="m">
          {data!.pages.map((page: any) => (
            page.response.data.map(({
              name, slug, logoUrl, shortName,
            }: IUniversity) => (
              <Box boxSize="m">
                <Link href={`/universidades/${encodeURIComponent(slug)}`}>
                  <HStack>
                    <Image
                      alt="University logo"
                      src={logoUrl}
                      width="100"
                      height="100"
                    />
                    <VStack ml="4" align="flex-start">
                      <Heading fontSize="xl">{name}</Heading>
                      <Text fontSize="xl">{shortName}</Text>
                    </VStack>
                  </HStack>
                </Link>
              </Box>
            ))))}
          {(isFetchingNextPage) ? (<Spinner />) : (<div />)}
        </VStack>
      </Center>
    </main>
  );
};

export default UniversidadesPage;

export const getStaticProps: GetStaticProps = async ()
: Promise<GetStaticPropsResult<{ response: IGetUniversities }>> => {
  const { response }: IGetUniversities = await getUniversities(0);

  return (!response) ? ({ notFound: true }) : ({ props: { response: { response } } });
};
