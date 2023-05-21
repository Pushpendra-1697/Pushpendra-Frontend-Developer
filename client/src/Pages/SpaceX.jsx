import React, { useEffect, useState } from "react";
import { Alert, AlertIcon, Box, Button, Heading, Portal, Select, Text } from "@chakra-ui/react";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverArrow,
    PopoverCloseButton,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from 'react-router-dom';
import { getCapsules, statusCapsules, typesCapsules } from "../redux/Action";
import { BiLoaderCircle } from "react-icons/bi";

var totalPages = 5;
const SpaceX = () => {
    let [page, setPage] = useState(1);
    let dispatch = useDispatch();
    let { data, loading, error } = useSelector((store) => store.capsules);

    useEffect(() => {
        dispatch(getCapsules(page));
    }, [page]);

    let handleStatus = (e) => {
        const { value } = e.target;
        if (!value) {
            return;
        }
        dispatch(statusCapsules(value));
    };

    let handleType = (e) => {
        const { value } = e.target;
        if (!value) {
            return;
        }
        dispatch(typesCapsules(value));
    };


    if (localStorage.getItem('token') === null) {
        return <Navigate to={'/login'} />
    };
    return (
        <Box
            bgImage={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWGIMPT3zXhJuooNt_pSOKaFhFcMZxI8nCzQ&usqp=CAU"
            }
            backgroundRepeat="no-repeat"
            backgroundSize=" cover"
        >
            <Box>
                <Heading
                    size="md"
                    fontSize={"25px"}
                    fontWeight={400}
                    p="15px"
                    color={"white"}
                >
                    Capsules data
                </Heading>

                {loading && (
                    <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                        {" "}
                        <BiLoaderCircle fontSize={"34px"} />{" "}
                    </Box>
                )}
                {error && <Box display={"flex"} justifyContent="center" alignItems={"center"}>
                    <Alert status='error' w="300px" >
                        <AlertIcon />
                        {`Something went Wrong 😒`}
                    </Alert>
                </Box>}

                {/* Filter */}
                <Box
                    display={"flex"}
                    flexWrap={"wrap"}
                    justifyContent={"space-around"}
                    m="20px auto"
                    color={'green.400'}
                >
                    <Box>
                        <Select onChange={handleStatus}>
                            <option value="">Filter By Status</option>
                            <option value="retired">Retired</option>
                            <option value="active">Active</option>
                            <option value="unknown">Unknown</option>
                        </Select>
                    </Box>

                    <Box>
                        <Select onChange={handleType}>
                            <option value="">Filter By Type</option>
                            <option value="Dragon 1.0">Dragon 1.0</option>
                            <option value="Dragon 2.0">Dragon 2.0</option>
                            <option value="Dragon 3.0">Dragon 3.0</option>
                        </Select>
                    </Box>
                </Box>

                <Box
                    display={"grid"}
                    gridTemplateColumns={[
                        "repeat(1,1fr)",
                        "repeat(2,1fr)",
                        "repeat(3,1fr)",
                    ]}
                    gap="20px"
                    p="20px"
                >
                    {data &&
                        data.map((elem) => {
                            return (
                                <Box
                                    key={elem.capsule_serial}
                                    boxShadow={"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;x"}
                                    cursor={"pointer"}
                                    p="15px"
                                    bg="linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(238,194,100,1) 100%)"
                                >
                                    <Text> Status - {elem.status} </Text>
                                    <Text> Serial - {elem.capsule_serial} </Text>{" "}
                                    <Text> Causule - {elem.capsule_id} </Text>
                                    <Text> Type - {elem.type} </Text>
                                    <Popover>
                                        <PopoverTrigger>
                                            <Button border={"0px"}>View Details</Button>
                                        </PopoverTrigger>
                                        <Portal>
                                            <PopoverContent bg="blue.100" fontSize={"20px"}>
                                                <PopoverArrow />
                                                <PopoverHeader>Details of Capsules</PopoverHeader>
                                                <PopoverCloseButton />
                                                <PopoverBody>
                                                    <Text> Status - {elem.status} </Text>
                                                    <Text> serial - {elem.capsule_serial} </Text>
                                                    <Text> Details - {elem.details} </Text>
                                                    <Text> Type - {elem.type} </Text>
                                                    <Text> Landings - {elem.landings} </Text>
                                                    <Text>
                                                        original_launch - {elem.original_launch}
                                                    </Text>{" "}
                                                    <Text> Reuse count - {elem.reuse_count} </Text>
                                                    <Box>
                                                        Missions -
                                                        {elem.missions.map((mission, index) => {
                                                            return (
                                                                <Text key={index}>
                                                                    Name {mission.name} Flight {mission.flight}
                                                                </Text>
                                                            );
                                                        })}
                                                    </Box>
                                                </PopoverBody>
                                            </PopoverContent>
                                        </Portal>
                                    </Popover>
                                </Box>
                            );
                        })}
                </Box>

                {/* Pagination */}
                <Box display={'flex'} justifyContent={'center'} alignItems={'center'} gap={'5px'}>
                    <Button onClick={() => setPage(page - 1)} isDisabled={page <= 1}>
                        Prev
                    </Button>
                    <Button variant={'outline'} color={'white'} isDisabled>{page}</Button>
                    <Button ml="5px" onClick={() => setPage(page + 1)} isDisabled={page === totalPages}>
                        Next
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default SpaceX;