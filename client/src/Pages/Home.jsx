import { Box, Heading, Img } from '@chakra-ui/react';
import React from 'react'

const Home = () => {
  return (
    <Box textAlign={"center"} display="flex" justifyContent={"center"} alignItems="center" flexDirection={"column"}>
        <Heading mb="10px">Welcome to SpaceX App</Heading>
        <Img w={["90%", "90%", "40%"]} src='./logo.png' alt='Spacex profile' />
    </Box>
  );
}

export default Home;