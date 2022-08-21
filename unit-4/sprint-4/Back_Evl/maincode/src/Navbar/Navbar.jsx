import { Box } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <Box p={"2rem"}>
            <NavLink to="/" > Home </NavLink>
            <NavLink to="/doctor">View Doctors</NavLink>
        </Box>
    )
}

export { Navbar }