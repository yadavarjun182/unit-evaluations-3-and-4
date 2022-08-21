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
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { useContext } from "react";
import { contextApi } from "../../Context/Contextapi";



function Hospital() {

    let { handleFormData, postHospitalData } = useContext(contextApi)

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Box>
            <Button onClick={onOpen}>ADD Hospital</Button>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Hospital Form</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                    </ModalBody>

                    <Box p="10px" gap="10px" >
                        <Input onChange={(e) => handleFormData(e)} name="name" placeholder="Hospital Name" />
                        <Input onChange={(e) => handleFormData(e)} name="address" marginTop={"10px"} placeholder="Address" />
                    </Box>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={() => {
                            onClose()
                            postHospitalData()
                        }}>
                            Submit
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export { Hospital }