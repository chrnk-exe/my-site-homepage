import React from 'react';
import {
  Heading,
  Box,
  Flex,
  Text,
  Link,
  Grid,
  Button,
  Image,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { SiBookstack, SiSynology } from 'react-icons/si';
import { FaGoogleDrive, FaJenkins } from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';
import { VscVm } from 'react-icons/vsc';
import flowyLogo from '../assets/flowy_logo.svg';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);
const MotionGrid = motion(Grid);

const leftColumnLinks = [
  {
    link: 'https://zxchrnk.pw/',
    icon: <VscVm />,
    description: (
      <Text>
        {' '}
        {'Визитка и ссылки на остальные ресурсы!'} <br />
        <br />
      </Text>
    ),
    title: 'Этот сайт',
  },
  {
    link: 'https://bookstack.zxchrnk.pw',
    icon: <SiBookstack />,
    description:
      'BookStack – это вики-система для структурированного хранения знаний, организованная по принципу книг, глав и страниц. Однако сейчас я её использую мало, так как неудобен мобильный интерфейс :(',
    title: 'Bookstack',
  },
  {
    link: 'https://web.appflowy.zxchrnk.pw',
    icon: flowyLogo,
    description:
      'AppFlowy – это Notion-подобная система с самохостингом, которую я сейчас активно использую, но оно находится в активной разработке и есть немало косяков...',
    title: 'Appflowy',
  },
  {
    link: 'https://nas.zxchrnk.pw',
    icon: <SiSynology />,
    description: (
      <Text>
        {' '}
        {'Среда управления моим сервером!'} <br />
        <br />
      </Text>
    ),
    title: 'DSM',
  },
];

const rightColumnLinks = [
  {
    link: 'https://drive.zxchrnk.pw/',
    icon: <FaGoogleDrive />,
    description:
      'Мой личный Google drive, только не google! Очень удобно работать из любой точки с файлами на своём сервере в привычном формате.',
    title: 'Synology drive',
  },
  {
    link: 'https://jenkins.zxchrnk.pw',
    icon: <FaJenkins />,
    description:
      'Jenkins — это система для автоматизации сборки, тестирования и развертывания кода (CI/CD), которая используется в личных проектах (такие как Crypto-math).',
    title: 'Jenkins',
  },
  {
    link: 'https://appflowy.zxchrnk.pw',
    icon: flowyLogo,
    description:
      'Админка очень нужна для Appflowy, так как только из неё можно принимать приглашения в Workspace и полностью управлять сервисом.',
    title: 'Appflowy Admin',
  },
  {
    link: 'https://pgadmin.zxchrnk.pw',
    icon: <DiPostgresql />,
    description:
      'Postgres - Это мощная реляционная база данных с открытым исходным кодом, которая используется для appflowy и личных проектов, которые тоже висят на моём сервере!',
    title: 'Pgadmin',
  },
];

const Secret = () => {
  return (
    <MotionGrid
      templateColumns={'1fr 1fr'}
      marginInline={'5%'}
      mt={10}
      gap={10}
      mb={10}>
      {/* Left column */}
      <MotionFlex direction={'column'} gap={10}>
        {leftColumnLinks.map((columnItem, index) => (
          <MotionFlex
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              duration: 0.3,
              delay: index * 0.1,
              damping: 10,
              stiffness: 400,
              ease: 'easeOut',
            }}
            _active={{ transform: 'scale(0.98)' }}
            // transition="all 0.2s"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            _hover={{ border: '1px solid #27272a' }}
            mb={3}>
            <Box
              direction={'column'}
              width={'100%'}
              height={'100%'}
              p={6}
              _hover={{ bg: 'gray.100', color: 'blackAlpha.950' }}
              _active={{ transform: 'scale(0.98)' }}
              borderRadius="lg"
              transition="all 0.2s">
              <MotionFlex gap={2} mb={4} direction={'column'}>
                <MotionFlex alignItems={'center'} gap={5}>
                  {typeof columnItem.icon === 'string' ? (
                    <Image src={columnItem.icon} height={'20px'} width="20px" />
                  ) : (
                    columnItem.icon
                  )}
                  <Heading>{columnItem.title}</Heading>
                </MotionFlex>
                <Text>{columnItem.description}</Text>
              </MotionFlex>
              <MotionBox justifySelf="flex-end">
                <MotionButton variant="outline" asChild>
                  <Link
                    href={columnItem.link}
                    _hover={{ color: 'blue.400', textDecoration: 'underline' }}>
                    Перейти
                  </Link>
                </MotionButton>
              </MotionBox>
            </Box>
          </MotionFlex>
        ))}
      </MotionFlex>

      <MotionFlex direction={'column'} gap={10}>
        {' '}
        {rightColumnLinks.map((columnItem, index) => (
          <MotionFlex
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              duration: 0.3,
              delay: index * 0.1,
              damping: 10,
              stiffness: 400,
              ease: 'easeOut',
            }}
            _active={{ transform: 'scale(0.98)' }}
            // transition="all 0.2s"
            borderWidth="1px"
            borderRadius="lg"
            boxShadow="md"
            _hover={{ border: '1px solid #27272a' }}
            mb={3}>
            <Box
              direction={'column'}
              width={'100%'}
              height={'100%'}
              p={6}
              _hover={{ bg: 'gray.100', color: 'blackAlpha.950' }}
              _active={{ transform: 'scale(0.98)' }}
              borderRadius="lg"
              transition="all 0.2s">
              <MotionFlex gap={2} mb={4} direction={'column'}>
                <MotionFlex alignItems={'center'} gap={5}>
                  {typeof columnItem.icon === 'string' ? (
                    <Image src={columnItem.icon} height={'20px'} width="20px" />
                  ) : (
                    columnItem.icon
                  )}
                  <Heading>{columnItem.title}</Heading>
                </MotionFlex>
                <Text>{columnItem.description}</Text>
              </MotionFlex>
              <MotionBox justifySelf="flex-end">
                <MotionButton variant="outline" asChild>
                  <Link
                    href={columnItem.link}
                    _hover={{ color: 'blue.400', textDecoration: 'underline' }}>
                    Перейти
                  </Link>
                </MotionButton>
              </MotionBox>
            </Box>
          </MotionFlex>
        ))}
      </MotionFlex>
    </MotionGrid>
  );
};

export default Secret;
