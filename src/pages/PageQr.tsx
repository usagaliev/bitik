import { useParams } from 'react-router-dom';
import type { JSX } from 'react';
import { useState } from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import Navbar from '../components/Navbar';
import PassphraseModal from '../components/PassphraseModal';
import Content from '../components/Content';
import { RegularBackground } from '../components/RegularBackground';
import bg from '../assets/content/bg.png';

const mockData = {
  abc123: {
    title: 'Футболка #23',
    description: 'Секретная футболка с котом',
    requiresPassphrase: true,
  },
  test456: {
    title: 'Футболка без защиты',
    description: 'Доступ без кода',
    requiresPassphrase: false,
  },
};

export default function QrPage(): JSX.Element | null {
  const { id } = useParams();
  const data = mockData[id as keyof typeof mockData];

  const [modalOpen, setModalOpen] = useState(false);

  if (!data) return <Box>Ничего не найдено</Box>;

  const gradientColors = {
    brandPurple: '#8362f3',
    brandPink: '#FF6F91',
    brandYellow: '#e79823',
    brandGray: '#DFDFDF',
  };

  const contentData = {
    name: 'Урмат',
    story: 'Когда мне было 12, я написал свой первый код...',
    photos: [bg, '/images/side1.jpg', '/images/side2.jpg'],
    location: 'Бишкек, Кыргызстан',
    mediaLink: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  };

  return (
    <Box bg={gradientColors.brandGray} color="white" minH="100vh">
      <Navbar />
      <Box textAlign="center" px={4} position="relative">
        <Box fontFamily="Rosarium, sans-serif" zIndex={999} position="relative">
          Привет, Бишкек! Hello, Bishkek!
        </Box>
        {/*<AnimatedBackground gradientColors={gradientColors} />*/}
        <RegularBackground />

        <Heading mt={4} mb={2}>{data.title}</Heading>
        <Text mb={4} opacity={0.9}>{data.description}</Text>

        {data.requiresPassphrase && (
          <PassphraseModal open={modalOpen} onClose={() => setModalOpen(false)} />
        )}

        <Content data={contentData} />
      </Box>
    </Box>
  );
}

