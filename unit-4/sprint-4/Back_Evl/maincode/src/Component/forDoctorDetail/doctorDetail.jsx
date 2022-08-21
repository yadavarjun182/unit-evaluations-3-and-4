import { Box, Button, Input, useDisclosure } from "@chakra-ui/react"
import { useEffect } from "react"
import { useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { contextApi } from "../../Context/Contextapi"
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
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

function DoctorDetail() {

    let { doctorDetail, newText, getDoctorDetails, handDeleteDoctor, handleNewText, handleUpdate } = useContext(contextApi)
    console.log(doctorDetail)

    let navigate = useNavigate()
    let params = useParams()
    const { isOpen, onOpen, onClose } = useDisclosure()

    useEffect(() => {
        getDoctorDetails(params.id)
    }, [])

    return (
        <Box>
            {
                JSON.stringify(doctorDetail) === JSON.stringify({})
                    ?
                    <Box>Loading...</Box>
                    :
                    <Box>
                        <TableContainer>
                            <Table variant='simple'>
                                <TableCaption></TableCaption>
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
                                    <Tr>
                                        <Td>{doctorDetail.id}</Td>
                                        <Td>{doctorDetail.name}</Td>
                                        <Td>{doctorDetail.hospital}</Td>
                                        <Td>{doctorDetail.profession}</Td>
                                        <Td>{doctorDetail.salary}</Td>
                                        <Td> <Button onClick={() => {
                                            handDeleteDoctor(doctorDetail.id)
                                            navigate("/")
                                        }
                                        } >Delete</Button> </Td>
                                        <Td>

                                            <Button onClick={onOpen}>Update</Button>

                                            <Modal isOpen={isOpen} onClose={onClose}>
                                                <ModalOverlay />
                                                <ModalContent>
                                                    <ModalHeader>Update Name</ModalHeader>
                                                    <ModalCloseButton />
                                                    <ModalBody>
                                                        <Input onChange={(e) => handleNewText(e)} placeholder="New Name" />
                                                    </ModalBody>

                                                    <ModalFooter>
                                                        <Button colorScheme='blue' mr={3} onClick={() => {

                                                            onClose()
                                                            handleUpdate(doctorDetail.id, newText)
                                                            getDoctorDetails(doctorDetail.id)

                                                        }
                                                        }>

                                                            Update
                                                        </Button>
                                                    </ModalFooter>
                                                </ModalContent>
                                            </Modal>

                                        </Td>
                                    </Tr>
                                </Tbody>
                            </Table>
                        </TableContainer>
                    </Box>
            }
        </Box>
    )
}

export { DoctorDetail }