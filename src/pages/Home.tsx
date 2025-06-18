import {
  Box,
  Flex,
  Heading,
  Text,
  VStack,
  Link,
  List,
  Grid,
  Icon,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  //   FaGithub,
  //   FaHackerrank,
  FaTelegram,
  FaPhone,
} from 'react-icons/fa';
import { CiMail } from 'react-icons/ci';
// import { SiHackthebox } from 'react-icons/si';
import Instruments from './home-subpages/Instruments';
import TechnicalProfiles from './home-subpages/Profiles';
import Projects from './home-subpages/Projects';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const contacts = [
  {
    text: 'p0lar1zee1337@gmail.com',
    icon: <CiMail />,
    link: 'mailto:p0lar1zee1337@gmail.com',
  },
  {
    text: 'i.kotov@dsec.ru',
    icon: <CiMail />,
    link: 'mailto:i.kotov@dsec.ru',
  },
  {
    text: 'vanya@zxchrnk.pw',
    icon: <CiMail />,
    link: 'mailto:vanya@zxchrnk.pw',
  },
  {
    text: '@zxchrnk',
    icon: <FaTelegram />,
    link: 'https://t.me/zxchrnk ',
  },
  {
    text: '+7 911 308 40 16',
    icon: <FaPhone />,
  },
];

export default function Home() {
  return (
    <Box mx="auto" px={'11%'} py={8}>
      {/* Hero Section */}
      <Grid templateColumns={'1fr 2fr'} mt={10} gap={10}>
        {/* First column */}
        <MotionBox>
          {/* Контакты */}
          <MotionFlex direction={'column'}>
            <Heading size={'4xl'} mb={3}>
              Контакты
            </Heading>
            {contacts.map((contact, index) => (
              <Link
                key={index}
                href={contact.link}
                _hover={{ bg: 'gray.100' }}
                _active={{ transform: 'scale(0.98)' }}
                transition="all 0.2s"
                color={'white'}
                p={1}
                pb={3}
                pl={5}
                mb={3}>
                <MotionFlex gap={3} alignItems={'baseline'}>
                  <Icon size="2xl" transform="translateY(0.5em)">
                    {contact.icon}
                  </Icon>
                  <Text
                    fontWeight={'normal'}
                    fontSize={'1.5em'}
                    textDecoration={contact.decoration}>
                    {contact.text}
                  </Text>
                </MotionFlex>
              </Link>
            ))}
          </MotionFlex>
          {/* Инструменты */}
          <Instruments />
          {/* Образование */}
        </MotionBox>
        {/* Second column */}
        <MotionBox>
          <MotionFlex
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            justifyContent={'space-evenly'}
            mb={16}>
            <MotionFlex
              direction={'column'}
              justifyContent={'center'}
              alignItems={'flex-end'}
              // ml={10}
              // mr={0}
              gap={4}>
              <Heading as="h1" size="2xl" mb={2}>
                zxchrnk
              </Heading>
              <Text fontSize="xl">Котов Иван</Text>
              <Text fontSize="xl">Middle pentester aka coolhacker</Text>
            </MotionFlex>
            <Image
              boxSize="300px"
              borderRadius="full"
              rounded="20px"
              src="https://avatars.githubusercontent.com/u/79397990?v=4"
            />
          </MotionFlex>
          {/* ????? */}
          <br />

          {/* About Section */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            mb={16}>
            <Heading as="h2" size="4xl" mb={6}>
              Обо мне
            </Heading>
            <VStack align="start">
              <Text fontSize="lg" lineHeight="1.6" textAlign={'justify'}>
                Специалист по тестированию безопасности веб и мобильных
                приложений. С 2023 года занимаюсь пентестами в компании{' '}
                <Link
                  href="https://dsec.ru"
                  _hover={{ color: 'blue.400', textDecoration: 'underline' }}>
                  Digital Security
                </Link>
                , участвую в CTF-соревнованиях. Выпускник СПбГЭТУ "ЛЭТИ" по
                направлению 10.05.01 "Компьютерная безопасность" в 2025 году,
                специалист по защите информации.
              </Text>

              <Box>
                <Heading as="h3" size="2xl" mb={2}>
                  Сертификаты:
                </Heading>
                <List.Root ml={5}>
                  <List.Item>HWSP</List.Item>
                  <List.Item>HJSSP</List.Item>
                  <List.Item>HJSP</List.Item>
                  <List.Item>
                    <s>OSWE</s> (В процессе)
                  </List.Item>
                </List.Root>
              </Box>
            </VStack>
          </MotionBox>

          {/* Projects Section */}
          <MotionBox
            mb={16}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <Heading as="h2" size="4xl" mb={6}>
              Проекты (не под NDA)
            </Heading>
            <Projects />
          </MotionBox>

          {/* Contact Section */}
          <MotionBox
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}>
            <TechnicalProfiles />
          </MotionBox>
        </MotionBox>
      </Grid>
    </Box>
  );
}
