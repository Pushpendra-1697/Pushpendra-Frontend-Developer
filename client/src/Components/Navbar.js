import { Avatar, Box, Button, Center, Flex, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Stack, useColorMode, useColorModeValue, Image, Text, Input } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../Styles/Comman.css';
import { ReactNode } from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import './navbar.css';
import { useDispatch } from 'react-redux';
import { serachCapsules } from '../redux/Action';


const NavLink = ({ children }: { children: ReactNode }) => (
    <Link
        px={2}
        py={1}
        rounded={'md'}
        _hover={{
            textDecoration: 'none',
            bg: useColorModeValue('gray.200', 'gray.700'),
        }}
        href={'#'}>
        {children}
    </Link>
);


const Navbar = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const dispatch = useDispatch();

    const handleLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('token');
        navigate('/');
    };

    const handleSearch = () => {
        if (!search) {
            return;
        }
        dispatch(serachCapsules(search));
    };

    return (
        <Box mb={["15%", "15%", "4%"]}>
            <Box bg={useColorModeValue('goldenrod', 'gray.900')} px={4} position={"fixed"} top={"0.1px"} w="100%" zIndex={"100"}>
                <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
                    <Link to="/"> <Image className='icon' w={"10px"} src="./logo.png" alt='logo' /> </Link>

                    <Text display={["none", "none", "block"]}><Link className='icon' to="/">Home</Link></Text>
                    <Text><Link className='icon' to="/spacex">SpaceX</Link></Text>

                    <Box display={["none", "none", "flex"]}>
                        <Input
                            placeholder="Enter Original Launch"
                            onChange={(e) => setSearch(e.target.value)}
                            fontSize={"20px"}
                        />
                        <Button ml="3px" onClick={handleSearch}>
                            Search
                        </Button>
                    </Box>

                    <Flex alignItems={'center'}>
                        <Stack direction={'row'} spacing={7}>
                            <Button className='icon' onClick={toggleColorMode}>
                                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <MenuButton
                                    className='icon'
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={"profile"}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={"profile"}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <Text fontSize={"23px"}>
                                            <Link to="/admin">{localStorage.getItem('name')}</Link>
                                        </Text>
                                    </Center>
                                    <MenuDivider />
                                    <MenuItem> <Link to="/" className='Link'>Home</Link></MenuItem>
                                    <MenuItem><Link to="/login" className='Link'>Login</Link></MenuItem>
                                    <MenuItem><Link to="/register" className='Link'>Register</Link></MenuItem>
                                    <MenuItem><Button onClick={handleLogout} bg="black" color={"red"}>Logout</Button></MenuItem>
                                </MenuList>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    );
}

export default Navbar;