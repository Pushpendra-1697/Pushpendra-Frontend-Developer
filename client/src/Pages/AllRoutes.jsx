import { Box } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import SpaceX from './SpaceX';


const AllRoutes = () => {
    return (
        <Box>
            <Routes>
                <Route path='/' element={<Home />}></Route>
                <Route path='/register' element={<Signup />}></Route>
                <Route path='/login' element={<Login />}></Route>
                <Route path='/spacex' element={<SpaceX />}></Route>
            </Routes>
        </Box>
    );
}

export default AllRoutes;