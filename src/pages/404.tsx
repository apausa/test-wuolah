import React from 'react';
import { NextPage } from 'next/types';
import {
  Heading, Center,
} from '@chakra-ui/react';

const ErrorPage: NextPage = () => (
  <main>
    <Center>
      <Heading>404 Not Found</Heading>
    </Center>
  </main>
);

export default ErrorPage;
