import { Box, Button, useDisclosure } from "@chakra-ui/react"
import { useContext } from "react"
import { contextApi } from "../Context/Contextapi"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { Hospital } from "./forHome/hospital"
import { Doctor } from "./forHome/doctor"
import { AllDoctors } from "./forHome/allDoctors"

function Home(){


    let { formArr } = useContext(contextApi)



    return (
        <Box>
           <Hospital/>
           <Doctor/>
        </Box>
    )
}

export {Home}