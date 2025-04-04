import React from 'react';
import { Heading, Box, Flex, Button, Text, Link, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaCalculator, FaProjectDiagram, FaChartLine } from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

const Projects = () => {
  return (
    <MotionBox>
      <Heading>Курс "Информационная безопасность офиса" на Hacktory.ai</Heading>
      <Text mb={4}>
        Практический курс на платформе{' '}
        <Link
          href="https://hacktory.ai/courses/cyber-security"
          _hover={{ color: 'blue.400', textDecoration: 'underline' }}>
          Hacktory
        </Link>
        , охватывающий ключевые аспекты защиты от современных угроз, таких как
        фишинг (и различные его виды), методы поиска информации (OSINT), а также
        правила физической безопасности офиса.
      </Text>
      <Heading>Crypto-math</Heading>
      <Text fontSize="lg" mb={4}>
        Проект объясняет <strong>ключевые математические концепции</strong>,
        лежащие в основе современной криптографии:
      </Text>

      <MotionFlex direction={'column'} gap={2} mb={2}>
        <MotionFlex justifyContent={'flex-start'} alignItems={'center'} gap={2}>
          <Icon as={FaCalculator} color="green.600" />
          <Text>
            <strong>Вычислительная сложность</strong> алгоритмов и почему
            некоторые задачи считаются "трудными"
          </Text>
        </MotionFlex>
        <MotionFlex justifyContent={'flex-start'} alignItems={'center'} gap={2}>
          <Icon as={FaProjectDiagram} color="green.600" />
          <Text>
            <strong>Дискретный логарифм</strong> и его роль в протоколах обмена
            ключами
          </Text>
        </MotionFlex>
        <MotionFlex justifyContent={'flex-start'} alignItems={'center'} gap={2}>
          <Icon as={FaChartLine} color="green.600" />
          <Text>
            <strong>Эллиптические кривые</strong> и их применение в ECC
          </Text>
        </MotionFlex>
      </MotionFlex>

      <Text fontStyle="italic" mb={6}>
        "Не просто теория из учебников, а <strong>понятные объяснения</strong> с
        интерактивными примерами, которые помогают по-настоящему разобраться в
        материале"
      </Text>

      <Link
        as="a"
        href="https://crypto-math.com"
        target="_blank"
        _hover={{ color: 'blue.400', textDecoration: 'underline' }}
        colorScheme="purple">
        Исследовать криптографию
      </Link>
    </MotionBox>
  );
};

export default Projects;
