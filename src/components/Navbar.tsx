import { Box, Flex, Button, Stack, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar = () => (
  <Box as="nav" bg="gray.800" px={4} py={3} color="white">
    <Flex align="center" justify="space-between" flexWrap="wrap">
      <Heading size="md">Bitik</Heading>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: 2, md: 4 }} mt={{ base: 4, md: 0 }}>
        <Button as={RouterLink} to="/" colorScheme="orange" variant="ghost">Главная</Button>
        <Button as={RouterLink} to="/bitik" colorScheme="orange" variant="solid">Переводчик</Button>
        <Button as={RouterLink} to="/qr/abc123" colorScheme="orange" variant="outline">QR пример</Button>
      </Stack>
    </Flex>
  </Box>
);

export default Navbar;
