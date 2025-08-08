import { Box, Container } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import { BitikTranslator } from '../components/BitikTranslator';

const BitikTranslate = () => (
  <Box bg="gray.50" minH="100vh">
    <Navbar />
    <Container maxW="container.md" py={10}>
      <BitikTranslator />
    </Container>
  </Box>
);

export default BitikTranslate;

