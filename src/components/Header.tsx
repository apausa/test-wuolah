import React from 'react';
import { Text, Center } from '@chakra-ui/react';
import Link from 'next/link';

const Header = () => (
  <Center>
    <Link href="/universidades/">
      <Text
        bgGradient="linear(to-l, #7928CA, #FF0080)"
        bgClip="text"
        fontSize="2xl"
        fontWeight="bold"
        mt="8"
        mb="4"
      >
        Listado de Universidades ✨
      </Text>
    </Link>
  </Center>
);

export default Header;
