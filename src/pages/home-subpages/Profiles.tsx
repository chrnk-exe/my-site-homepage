import { Box, Text, Link, Flex, Icon, Image } from '@chakra-ui/react';
import { FaGithub, FaHackerrank } from 'react-icons/fa';
import { SiHackthebox } from 'react-icons/si';
import hacktoryPng from '../../assets/hacktory.png';

const TechnicalProfiles = () => {
  return (
    <Box mt={6}>
      <Text fontSize="xl" fontWeight="bold" mb={4}>
        Мои профили на ресурсах
      </Text>

      <Flex direction="column" gap={3}>
        {/* GitHub */}
        <Flex align="center" gap={2}>
          <Icon as={FaGithub} color="green.500" boxSize={5} />
          <Link
            href="https://github.com/chrnk-exe"
            _hover={{ color: 'blue.400', textDecoration: 'underline' }}>
            GitHub
          </Link>
        </Flex>

        {/* HackerRank */}
        <Flex align="center" gap={2}>
          <Icon as={FaHackerrank} color="teal.500" boxSize={5} />
          <Link
            href="https://www.hackerrank.com/profile/p0lar1zee1337"
            _hover={{ color: 'blue.400', textDecoration: 'underline' }}>
            HackerRank
          </Link>
        </Flex>

        {/* HackTheBox */}
        <Flex align="center" gap={2}>
          <Icon as={SiHackthebox} color="purple.500" boxSize={5} />
          <Link
            href="https://app.hackthebox.com/profile/1493358"
            _hover={{ color: 'blue.400', textDecoration: 'underline' }}>
            HackTheBox (HTB)
          </Link>
        </Flex>

        {/* Hacktory (кастомная иконка) */}
        <Flex align="center" gap={2}>
          <Image src={hacktoryPng} height={'20px'} />
          <Link
            href="https://app.hacktory.ai/rating/6803"
            _hover={{ color: 'blue.400', textDecoration: 'underline' }}>
            Hacktory
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TechnicalProfiles;
