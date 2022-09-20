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

  return (
    <>
      <Head>
        <title>cffn.pw/r</title>
      </Head>
      <Box 
        backgroundColor='blackAlpha.200'
        py='8'
        h='100vh'
        w='100vw'
        display='flex'
        justifyContent='end'
      >
        <MotionDiv
          position='absolute'
          right='0'
          top='0'
          h='100%'
          backgroundColor='white'
          clipPath='polygon(0% 0%, calc(100vw * 0.14) 100%, 100% 100%, 100% 0%)'
          variants={{
            hidden: {
              width: '0%',
            },
            shown: {
              width: '70%',
            },
          }}
          //  @ts-ignore: framer-motionのあれ
          transition={{
            duration: 0.8,
            ease: 'easeInOut',
          }}
          initial='hidden'
          animate='shown'
          exit='hidden'
        />
        <Flex
          direction='column'
          align='center'
          w={{ base: '100%', md: '60%' }}
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
                  <ListIcon as={MdInfo} />
                  <NextLink href='/about' passHref>
                    <Link>About</Link>
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
                  <ListIcon as={MdDeveloperBoard} />
                  <NextLink href='/Works' passHref>
                    <Link>Works</Link>
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
                  <ListIcon as={MdEditNote} />
                  <NextLink href='https://blog.cffn.pw' passHref>
                    <Link>Blog</Link>
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
                  <ListIcon as={MdLink} />
                  <NextLink href='/Links' passHref>
                    <Link>Links</Link>
                  </NextLink>
                </MotionLi>
              </List>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Home;
