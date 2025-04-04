import { Heading, Box, Flex, List, Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React from 'react';
import {
  FaCode,
  FaUserCheck,
  FaLock,
  FaAndroid,
  FaAward,
  FaBook,
} from 'react-icons/fa';

const MotionBox = motion(Box);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

const skills = [
  {
    name: 'Языки программирования',
    tools: [
      'C',
      'Python',
      'JavaScript/TypeScript + React',
      'Java (В рамках анализа защищённости)',
      'Kotlin (В рамках анализа защищённости)',
    ],
    icon: FaCode,
  },
  {
    name: 'Сетевой анализ',
    tools: ['Wireshark', 'NMap', 'MassDNS', 'Sublist3r', 'masscan', 'nuclei'],
    icon: FaUserCheck,
  },
  {
    name: 'Аудит безопасности веб-приложений',
    tools: [
      'Dirsearch',
      'Gobuster',
      'Nuclei',
      'BurpSuite',
      'Acunetix',
      'sstimap',
      'tplmap',
      'sqlmap',
      'wpscan',
    ],
    icon: FaLock,
  },
  {
    name: 'Анализ мобильных приложений',
    tools: [
      'Frida',
      'XPosed',
      'Magisk',
      'checkn1x (Jailbreak)',
      'Burp Suite',
      'MobSF/Grapefruit/RMS',
      'Objection',
      'jadx',
      'reflutter + hbctool',
    ],
    icon: FaAndroid,
  },
  {
    name: 'Криптоанализ',
    tools: ['Hashcat', 'John the Ripper', 'testssl.sh'],
    icon: FaAward,
  },
  {
    name: 'Другое',
    tools: [
      'Trufflehog',
      'Tartufo',
      'dependency-check',
      'depcheck',
      'semgrep',
      'Checkmarx',
    ],
    icon: FaBook,
  },
];

const Instruments = () => {
  return (
    <MotionFlex direction={'column'}>
      <Heading size={'4xl'} mb={3}>
        Владение инструментами
      </Heading>
      {skills.map((skill, index) => (
        <MotionBox
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
            width={'100%'}
            height={'100%'}
            p={6}
            _hover={{ bg: 'gray.100', color: 'blackAlpha.950' }}
            _active={{ transform: 'scale(0.98)' }}
            borderRadius="lg"
            transition="all 0.2s">
            <Flex align="center" mb={3}>
              <Box as={skill.icon} mr={3} />
              <Heading as="h3" size="md">
                {skill.name}
              </Heading>
            </Flex>
            <List.Root ml={5}>
              {skill.tools.map((skill, index) => (
                <List.Item key={index}>{skill}</List.Item>
              ))}
            </List.Root>
            {/* <Text>{skill.tools.join(', ')}</Text> */}
          </Box>
        </MotionBox>
      ))}
    </MotionFlex>
  );
};

export default Instruments;
