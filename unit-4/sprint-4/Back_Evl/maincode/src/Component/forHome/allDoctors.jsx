import { Box, Button } from "@chakra-ui/react";

import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { Select } from '@chakra-ui/react'
import { contextApi } from "../../Context/Contextapi";

function AllDoctors() {

    let { doctorsData, handleSort, handlePage, handleFilter, hospitalData } = useContext(contextApi)

    return (
        <>
            <Box>
                <Button onClick={() => handlePage(-1)} >Prev</Button>
                <Button onClick={() => handlePage(+1)}  >Next</Button>
            </Box>
            <Box>
                <Select onChange={(e) => handleFilter(e)} name="hospital" >
                    <option value="x" >All</option>
                    {
                        hospitalData.map((el) => (
                            <option value={el.name}>{el.name}</option>
                        ))
                    }
                </Select>
            </Box>
            <Select onChange={(e) => handleSort(e)} >
                <option value='asc'>Hight to Low</option>
                <option value='desc'>Low to High</option>
            </Select>
            <Box>
                <TableContainer>
                    <Table variant='simple'>
                        <TableCaption>All Doctors</TableCaption>
                        <Thead>
                            <Tr>
                                <Th>id</Th>
                                <Th>Name</Th>
                                <Th>Hospital</Th>
                                <Th>Specialisation</Th>
                                <Th>Salary</Th>
                                <Th>View More Details</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {
                                doctorsData.map((el) => (
                                    <Tr>
                                        <Td>{el.id}</Td>
                                        <Td>{el.name}</Td>
                                        <Td>{el.hospital}</Td>
                                        <Td>{el.profession}</Td>
                                        <Td>{el.salary}</Td>
                                        <Td> <NavLink to={`/doctor/${el.id}`} >View More Details</NavLink> </Td>
                                    </Tr>
                                ))
                            }
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

        </>
    )
}

export { AllDoctors }