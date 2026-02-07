import { Box, Flex, Button, Stack, Image } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaLock } from 'react-icons/fa';
import { Outlet } from 'react-router-dom';
import zxcgif from '../assets/zxc-cat.gif';
import { Link } from 'react-router';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionButton = motion(Button);

// const navItems = [
//   // { label: 'Секретная страница :)', icon: FaLock, path: '/secret' },
// ];

export default function NavBar() {
  return (
    <Box width={'100%'} position={'absolute'} top={0}>
      <MotionBox width={'100%'}>
        <Flex
          // borderBottom={'1px solid gray'}
          paddingInlineStart={10}
          paddingBlock={15}
          justifyContent={'space-between'}
          px={'11%'}>
          <MotionFlex
            direction={'row'}
            justifyContent={'center'}
            alignItems={'center'}
            gap={10}>
            <Image src={zxcgif} height={'60px'} />
            <MotionButton size="2xl" asChild>
              <Link to="/">Главная</Link>
            </MotionButton>
          </MotionFlex>
          <Stack direction={'row'} gap={6}>
            {/* Давай не будем всем её показывать, кто захочет - сам найдёт :) */}
            {/* {navItems.map((item, index) => (
              <MotionButton key={index} size="2xl" asChild>
                <Link to={item.path}>{item.label}</Link>
              </MotionButton>
            ))} */}
          </Stack>
        </Flex>
      </MotionBox>
      <Outlet />
    </Box>
  );
}
