import { Box, Container, Heading, Text, SimpleGrid, Stack, Image, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from '../components/Navbar';
import bg from '../assets/content/bg.png';
import tshirt from '../assets/content/white_tshirt.png';

const features = [
  {
    title: 'QR-метки',
    description: 'Создавайте и делитесь уникальными QR-кодами.',
    image: bg,
    to: '/qr/abc123',
  },
  {
    title: 'Переводчик Bitik',
    description: 'Мгновенно переводите текст в уникальный шрифт.',
    image: tshirt,
    to: '/bitik',
  },
  {
    title: 'Адаптивный дизайн',
    description: 'Интерфейс удобно выглядит на любом устройстве.',
    image: 'https://via.placeholder.com/400',
    to: '/',
  },
];

export default function HomePage() {
  return (
    <Box bg="gray.50" minH="100vh">
      <Navbar />
      <Container maxW="container.xl" py={10}>
        <Stack textAlign="center" spacing={6}>
          <Heading size="2xl">Добро пожаловать в Bitik</Heading>
          <Text fontSize="lg">
            Управляйте QR-кодами и переводами с помощью современного интерфейса.
          </Text>
        </Stack>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10} mt={10}>
          {features.map((item) => (
            <LinkBox
              key={item.title}
              as={Stack}
              spacing={3}
              align="center"
              shadow="md"
              p={5}
              borderRadius="md"
              bg="white"
              transition="all 0.2s"
              _hover={{ shadow: 'xl', transform: 'translateY(-4px)' }}
            >
              <Image src={item.image} alt={item.title} boxSize="200px" objectFit="cover" borderRadius="md" />
              <Heading size="md">
                <LinkOverlay as={RouterLink} to={item.to}>{item.title}</LinkOverlay>
              </Heading>
              <Text>{item.description}</Text>
            </LinkBox>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
