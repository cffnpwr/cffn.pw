import {
  Box,
  Flex,
  Link,
  List,
  ListIcon,
  chakra,
  shouldForwardProp,
} from '@chakra-ui/react';
import { isValidMotionProp, motion } from 'framer-motion';
import Head from 'next/head';
import NextLink from 'next/link';
import { MdDeveloperBoard, MdEditNote, MdInfo, MdLink } from 'react-icons/md';

import type { NextPage } from 'next';


const Home: NextPage = () => {
  const MotionH1 = chakra(motion.h1, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const MotionP = chakra(motion.p, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const MotionLi = chakra(motion.li, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const MotionDiv = chakra(motion.div, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });
  const MotionImage = chakra(motion.img, {
    shouldForwardProp: (prop) => isValidMotionProp(prop) || shouldForwardProp(prop),
  });

  return (
    <>
      <Head>
        <title>cffn.pw/r</title>
      </Head>
      <Flex
        h='100vh'
        w='100vw'
        justifyContent='end'
      >
        <Box
          w='100%'
          h='100%'
          position='absolute'
        >
          <MotionImage 
            src='/cffnpwr_logo.png'
            alt='backgroungImage' 
            position='absolute'
            bottom='0'
            left='0'
            h='50%'
            // objectFit='contain'
            filter='blur(5px)'
            variants={{
              hidden: {
                filter: 'none',
              },
              shown: {
                filter: 'blur(5px)',
              },
            }}
            //  @ts-ignore: framer-motionのあれ
            transition={{
              duration: 0.8,
              ease: 'easeInOut',
            }}
            initial='hidden'
            animate='shown'
          />
        </Box>
        <Box 
          filter='drop-shadow(-2px 0px 16px rgba(0, 0, 0, 0.4))'
          position='fixed'
          top='0'
          w='100%'
          h='100%'
        >
          <MotionDiv
            position='absolute'
            right='-35%'
            bottom='-10rem'
            h='150%'
            overflow='hidden'
            backgroundColor='#7b5544'
            backdropFilter='blur(20px)'
            variants={{
              hidden: {
                width: '0%',
              },
              shown: {
                width: '110%',
                transform: 'rotate(-39deg) skewY(39deg)',
              },
            }}
            //  @ts-ignore: framer-motionのあれ
            transition={{
              duration: 0.8,
              ease: 'circOut',
              delay: 0.5,
            }}
            initial='hidden'
            animate='shown'
            exit='hidden'
          />
          <MotionDiv
            position='absolute'
            right='-12%'
            bottom='-2rem'
            h='150%'
            overflow='hidden'
            backgroundColor='whiteAlpha.800'
            backdropFilter='blur(20px)'
            variants={{
              hidden: {
                width: '0%',
              },
              shown: {
                width: '100%',
                transform: 'rotate(-13deg) skewY(13deg)',
              },
            }}
            //  @ts-ignore: framer-motionのあれ
            transition={{
              duration: 0.8,
              ease: 'circOut',
              delay: 0.5,
            }}
            initial='hidden'
            animate='shown'
            exit='hidden'
          />
        </Box>
        <Flex
          position='relative'
          direction='column'
          align='center'
          w='70%'
          zIndex='1'
        >
          <Flex
            direction='column'
            align='start'
            h='100%'
          >
            <Flex
              flexDirection='column'
            >
              <MotionH1
                fontSize='8xl'
                fontWeight='black'
                mt='24'
                whiteSpace='nowrap'
                overflow='hidden'
                variants={{
                  hidden: {
                    width: '0%',
                  },
                  shown: {
                    width: '100%',
                  },
                }}
                //  @ts-ignore: framer-motionのあれ
                transition={{
                  duration: 0.8,
                  ease: 'easeInOut',
                  delay: 0.8,
                }}
                initial='hidden'
                animate='shown'
                exit='hidden'
              >
                  cffn.pw/r
              </MotionH1>
              <MotionP 
                fontSize='2xl' 
                mb='16'
                whiteSpace='nowrap'
                overflow='hidden'
                variants={{
                  hidden: {
                    width: '0%',
                  },
                  shown: {
                    width: '100%',
                  },
                }}
                //  @ts-ignore: framer-motionのあれ
                transition={{
                  duration: 0.5,
                  ease: 'easeInOut',
                  delay: 1.1,
                }}
                initial='hidden'
                animate='shown'
                exit='hidden'
              >
                かふぇいんぱわぁのホームページ
              </MotionP>
            </Flex>
            <Flex
              flex='1'
              direction='column'
              align='center'
              justify='center'
            >
              <List spacing='8'>
    
                {/* About */}
                <MotionLi
                  fontSize='4xl'
                  fontWeight='black'
                  display='flex'
                  alignItems='center'
                  whiteSpace='nowrap'
                  overflow='hidden'
                  variants={{
                    hidden: {
                      width: '0%',
                    },
                    shown: {
                      width: '100%',
                    },
                  }}
                  //  @ts-ignore: framer-motionのあれ
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1.5,
                  }}
                  initial='hidden'
                  animate='shown'
                  exit='hidden'
                >
                  <NextLink href='/r/about' passHref>
                    <Link
                      textDecoration='none !important'
                      color='#000'
                      backgroundImage='linear-gradient(90deg, #000, #000)'
                      backgroundRepeat='no-repeat'
                      backgroundPosition='right bottom'
                      backgroundSize='0 5px'
                      transition='background-size 500ms cubic-bezier(0, 1, 0, 1)'
                      _hover={{
                        backgroundSize: '100% 5px',
                      }}
                    >
                      <ListIcon as={MdInfo} />
                      About
                    </Link>
                  </NextLink>
                </MotionLi>
    
                {/* Works */}
                <MotionLi
                  fontSize='4xl'
                  fontWeight='black'
                  display='flex'
                  alignItems='center'
                  whiteSpace='nowrap'
                  overflow='hidden'
                  variants={{
                    hidden: {
                      width: '0%',
                    },
                    shown: {
                      width: '100%',
                    },
                  }}
                  //  @ts-ignore: framer-motionのあれ
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1.525,
                  }}
                  initial='hidden'
                  animate='shown'
                  exit='hidden'
                >
                  <NextLink href='/r/Works' passHref>
                    <Link
                      textDecoration='none !important'
                      color='#000'
                      backgroundImage='linear-gradient(90deg, #000, #000)'
                      backgroundRepeat='no-repeat'
                      backgroundPosition='right bottom'
                      backgroundSize='0 5px'
                      transition='background-size 500ms cubic-bezier(0, 1, 0, 1)'
                      _hover={{
                        backgroundSize: '100% 5px',
                      }}
                    >
                      <ListIcon as={MdDeveloperBoard} />
                      Works
                    </Link>
                  </NextLink>
                </MotionLi>
    
                {/* Blog */}
                <MotionLi
                  fontSize='4xl'
                  fontWeight='black'
                  display='flex'
                  alignItems='center'
                  whiteSpace='nowrap'
                  overflow='hidden'
                  variants={{
                    hidden: {
                      width: '0%',
                    },
                    shown: {
                      width: '100%',
                    },
                  }}
                  //  @ts-ignore: framer-motionのあれ
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1.55,
                  }}
                  initial='hidden'
                  animate='shown'
                  exit='hidden'
                >
                  <NextLink href='/r/blog' passHref>
                    <Link
                      textDecoration='none !important'
                      color='#000'
                      backgroundImage='linear-gradient(90deg, #000, #000)'
                      backgroundRepeat='no-repeat'
                      backgroundPosition='right bottom'
                      backgroundSize='0 5px'
                      transition='background-size 500ms cubic-bezier(0, 1, 0, 1)'
                      _hover={{
                        backgroundSize: '100% 5px',
                      }}
                    >
                      <ListIcon as={MdEditNote} />
                      Blog
                    </Link>
                  </NextLink>
                </MotionLi>
    
                {/* links */}
                <MotionLi
                  fontSize='4xl'
                  fontWeight='black'
                  display='flex'
                  alignItems='center'
                  whiteSpace='nowrap'
                  overflow='hidden'
                  variants={{
                    hidden: {
                      width: '0%',
                    },
                    shown: {
                      width: '100%',
                    },
                  }}
                  //  @ts-ignore: framer-motionのあれ
                  transition={{
                    duration: 0.5,
                    ease: 'easeInOut',
                    delay: 1.575,
                  }}
                  initial='hidden'
                  animate='shown'
                  exit='hidden'
                >
                  <NextLink href='/r/Links' passHref>
                    <Link
                      textDecoration='none !important'
                      color='#000'
                      backgroundImage='linear-gradient(90deg, #000, #000)'
                      backgroundRepeat='no-repeat'
                      backgroundPosition='right bottom'
                      backgroundSize='0 5px'
                      transition='background-size 500ms cubic-bezier(0, 1, 0, 1)'
                      _hover={{
                        backgroundSize: '100% 5px',
                      }}
                    >
                      <ListIcon as={MdLink} />
                      Links
                    </Link>
                  </NextLink>
                </MotionLi>
              </List>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Home;
