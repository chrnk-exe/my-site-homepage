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
        правила физической безопасности офиса. К сожалению в 2026 году платформа
        закрылась, но я очень надеюсь что смогу возродить его своими силами и
        поднять уровень информационной безопасности в моей стране {':)'}
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

      <Heading mt={4}>
        AI Бот в мессенджере Telegramm для анализа переписок и чатов.
      </Heading>

      <MotionFlex direction={'column'} gap={2} mb={2}>
        <Text>
          Разработка AI-бота для Telegram, способного анализировать переписки и
          чаты, выявляя ключевые темы, тональность и предоставляя краткие
          резюме. Бот довольно простой и использует API от OpenAI, но я планирую
          его развивать и добавлять новые функции, такие как распознавание
          спама, выявление токсичного поведения и многое другое. Цель проекта -
          создать полезный инструмент для управления информацией в мессенджерах
          и повышения продуктивности пользователей.
        </Text>
        <Text>
          TG Channel:{' '}
          <Link href="https://t.me/fem1da_news" color="blue.400">
            https://t.me/fem1da_news
          </Link>
        </Text>
        <Text>
          И сам бот:{' '}
          <Link href="https://t.me/fem1da_bot" color="blue.400">
            https://t.me/fem1da_bot
          </Link>
        </Text>
        <Text fontStyle="italic"></Text>
      </MotionFlex>
    </MotionBox>
  );
};

export default Projects;
