import { Box } from "@chakra-ui/react"
import { Route, Routes } from "react-router-dom"
import { Doctor } from "../Component/doctor"
import { DoctorDetail } from "../Component/forDoctorDetail/doctorDetail"
import { Home } from "../Component/home"

function AllRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/doctor" element={<Doctor/>} ></Route>
            <Route path="/doctor/:id" element={<DoctorDetail/>} ></Route>
            <Route></Route>
        </Routes>
    )
}

export {AllRoutes}