import { Box } from "@chakra-ui/react"
import { AllRoutes } from "../AllRoutes/AllRoutes"
import { Navbar } from "../Navbar/Navbar"

function Main(){
    return (
        <Box>
            <Navbar />
            <AllRoutes />
        </Box>
    )
}

export {Main}