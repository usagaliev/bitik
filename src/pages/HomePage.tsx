import { Box, Container, Heading, Text, SimpleGrid, Stack, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import bg from '../assets/content/bg.png';
import tshirt from '../assets/content/white_tshirt.png';

const features = [
  {
    title: 'QR-метки',
    description: 'Создавайте и делитесь уникальными QR-кодами.',
    image: bg,
  },
  {
    title: 'Переводчик Bitik',
    description: 'Мгновенно переводите текст в уникальный шрифт.',
    image: tshirt,
  },
  {
    title: 'Адаптивный дизайн',
    description: 'Интерфейс удобно выглядит на любом устройстве.',
    image: 'https://via.placeholder.com/400',
  },
];

export default function HomePage() {
  return (
    <Box>
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
            <Stack key={item.title} spacing={3} align="center" shadow="md" p={5} borderRadius="md">
              <Image src={item.image} alt={item.title} boxSize="200px" objectFit="cover" borderRadius="md" />
              <Heading size="md">{item.title}</Heading>
              <Text>{item.description}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
