import {
  GetStaticPaths,
  GetStaticProps,
  GetStaticPropsResult,
  NextPage,
} from 'next/types';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

// Types
import {
  Heading, HStack, VStack, Text, Center, Box, Button,
} from '@chakra-ui/react';
import { IUniversity } from '../../../types/universities.types';

// Services
import getUniversity from '../../../services/university.service';

const UniversidadPage: NextPage<IUniversity> = ({
  name, shortName, logoUrl,
}): any => (
  <main>
    <Center>
      <Box boxSize="m">
        <HStack mt="4" align="flex-start" spacing="4" width="m">
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
      </Box>
    </Center>
    <Center>
      <Link href="/universidades/">
        <Button colorScheme="gray" mt="8">Regresar</Button>
      </Link>
    </Center>
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
