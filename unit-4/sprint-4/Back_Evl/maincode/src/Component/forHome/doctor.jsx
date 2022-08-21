import { Box, Button, Input, useDisclosure } from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'
import { useContext } from "react";
import { contextApi } from "../../Context/Contextapi";
import { Select } from '@chakra-ui/react'

function Doctor() {

    let { hospitalData, handleDoctorFormData, postDoctorData } = useContext(contextApi)

    const { isOpen, onOpen, onClose } = useDisclosure()



    return (
        <Box>
            <Button onClick={onOpen}>ADD Doctor</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Doctor Form</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>

                        <Input onChange={(e) => handleDoctorFormData(e)} placeholder="Name" name="name" />
                        <Select onChange={(e) => handleDoctorFormData(e)} name="hospital" >
                            {
                                hospitalData.map((el) => (
                                    <option value={el.name}>{el.name}</option>
                                ))
                            }
                        </Select>
                        <Select name="profession" onChange={(e) => handleDoctorFormData(e)} >
                            <option value='Nephrology'>Nephrology</option>
                            <option value='General'>General</option>
                            <option value='Radiologist'>Radiologist</option>
                        </Select>
                        <Input type="number" name="salary" placeholder="salary" onChange={(e) => handleDoctorFormData(e)} />
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            onClose()
                            postDoctorData()
                        }}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export { Doctor }