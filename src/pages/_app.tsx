import React from 'react';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Head from 'next/head';
import Header from '../components/Header';

const queryClient = new QueryClient();

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider>
    <QueryClientProvider client={queryClient}>
      <Head>
        <title>Wuolah test</title>
        <meta name="description" content="Wuolah test" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="white"
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <>
        <Header />
        <Component {...pageProps} />
      </>
    </QueryClientProvider>
  </ChakraProvider>
);

export default MyApp;
