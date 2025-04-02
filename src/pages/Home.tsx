import {
  Box,
  Flex,
  Heading,
  Text,
  Avatar,
  VStack,
  Button,
  Link,
  IconButton,
  SimpleGrid,
  List,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  //   FaGithub,
  //   FaTelegram,
  //   FaHackerrank,
  FaLock,
  FaShieldAlt,
  FaCode,
  FaBook,
  FaAward,
  FaUserCheck,
} from 'react-icons/fa';
// import { SiHackthebox } from 'react-icons/si';

const MotionBox = motion(Box);
const MotionButton = motion(Button);

const skills = [
  {
    name: 'Языки программирования',
    tools: ['Python', 'JavaScript/TypeScript', 'React', 'C'],
    icon: FaCode,
  },
  {
    name: 'Инструменты пентеста',
    tools: ['BurpSuite', 'Metasploit', 'Nessus', 'Frida'],
    icon: FaShieldAlt,
  },
  {
    name: 'Сетевой анализ',
    tools: ['Wireshark', 'NMap', 'MassDNS'],
    icon: FaUserCheck,
  },
  {
    name: 'Веб-аудит',
    tools: ['Dirsearch', 'Gobuster', 'Dirb', 'Nuclei'],
    icon: FaLock,
  },
  {
    name: 'Криптоанализ',
    tools: ['Hashcat', 'John the Ripper'],
    icon: FaAward,
  },
  {
    name: 'Другое',
    tools: ['Trufflehog', 'Frida'],
    icon: FaBook,
  },
];

export default function Home() {
  return (
    <Box maxW="1200px" mx="auto" px={4} py={8}>
      {/* Header with Theme Toggle */}
      <Flex justify="flex-end" mb={8}>
        <IconButton aria-label="Toggle theme" variant="ghost" />
      </Flex>

      {/* Hero Section */}
      <MotionBox
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        textAlign="center"
        mb={16}>
        <Avatar.Root>
          <Avatar.Image src="https://avatars.githubusercontent.com/u/583231?v=4" />
          <Avatar.Fallback name="Что-то пошло не так..." />
        </Avatar.Root>
        <Heading as="h1" size="2xl" mb={2}>
          Иван [Фамилия]
        </Heading>
        <Text fontSize="xl">Аналитик информационной безопасности</Text>
      </MotionBox>

      {/* About Section */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Обо мне
        </Heading>
        <VStack align="start">
          <Text>
            Специалист по информационной безопасности с опытом аудита
            веб-приложений и анализа кода. Выпускник СПбГЭТУ ЛЭТИ (ФКТИ,
            Компьютерная безопасность, 2025).
          </Text>

          <Box>
            <Heading as="h3" size="md" mb={2}>
              Сертификаты:
            </Heading>
            <List.Root>
              <List.Item>HWSP, HJSSP, HJSP</List.Item>
            </List.Root>
          </Box>
        </VStack>
      </MotionBox>

      {/* Skills Section */}
      <Box mb={16}>
        <Heading as="h2" size="xl" mb={8}>
          Навыки и инструменты
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }}>
          {skills.map((skill, index) => (
            <MotionBox
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              p={6}
              borderWidth="1px"
              borderRadius="lg"
              boxShadow="md">
              <Flex align="center" mb={3}>
                <Box as={skill.icon} mr={3} />
                <Heading as="h3" size="md">
                  {skill.name}
                </Heading>
              </Flex>
              <Text>{skill.tools.join(', ')}</Text>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Box>

      {/* Projects Section */}
      <Box mb={16}>
        <Heading as="h2" size="xl" mb={6}>
          Проекты
        </Heading>
        <VStack align="start">
          <Box>
            <Heading as="h3" size="md" mb={2}>
              Hacktory.ai
            </Heading>
            <Text mb={2}>
              Автор лабораторных работ для курса «Информационная безопасность
              офиса. Основы социальной инженерии»
            </Text>
            <Link href="https://app.hacktory.ai/rating/6803" fontWeight="bold">
              Мой профиль →
            </Link>
          </Box>

          <Box>
            <Heading as="h3" size="md" mb={2}>
              Командный аудит
            </Heading>
            <Text>
              Участник команды аудиторов с 2023 года. Реализованные проекты под
              NDA.
            </Text>
          </Box>
        </VStack>
      </Box>

      {/* Contact Section */}
      <Box>
        <Heading as="h2" size="xl" mb={6}>
          Контакты
        </Heading>
        <Flex wrap="wrap" gap={4}>
          <MotionButton whileHover={{ scale: 1.05 }} colorScheme="gray">
            <a href="tg://zxchrnk" target="_blank">
              Telegram
            </a>
            GitHub
          </MotionButton>

          <MotionButton
            whileHover={{ scale: 1.05 }}
            // href="tg://zxchrnk"
            colorScheme="blue"
            asChild>
            <a href="tg://zxchrnk" target="_blank">
              Telegram
            </a>
          </MotionButton>

          <MotionButton
            whileHover={{ scale: 1.05 }}
            as="a"
            colorScheme="purple"
            asChild>
            <a
              href="https://app.hackthebox.com/profile/1493358"
              target="_blank">
              HackTheBox
            </a>
          </MotionButton>

          <MotionButton
            whileHover={{ scale: 1.05 }}
            colorScheme="green"
            asChild>
            <a
              href="https://www.hackerrank.com/profile/p0lar1zee1337"
              target="_blank">
              HackerRank
            </a>
          </MotionButton>
        </Flex>
      </Box>
    </Box>
  );
}
