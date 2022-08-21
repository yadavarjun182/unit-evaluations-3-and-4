import { createContext, useState } from "react"
import axios from 'axios'
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
export const contextApi = createContext()
function ContextProvider({ children }) {
    let formArr = ["Hospital", "Doctor"]
    let [formData, setFormData] = useState({})
    let [hospitalData, setHospitalData] = useState([])
    let [formSecData, setFromSecData] = useState({})
    let [toggle, setToggle] = useState(false)
    let [doctorsData, setDoctorsData] = useState([])
    let [doctorDetail, setDoctorDetails] = useState({})
    let [page, setPage] = useState(1)
    let [filter, setFilter] = useState("")
    let [sort, setSort] = useState("asc")
    let [dtoggle, setDtoggle] = useState(false)
    let [newText, setNewText] = useState("")
    
    let handleFormData = (e) => {

        let { name, value } = e.target

        setFormData({
            ...formData,
            [name]: value
        })
    }

    useEffect(() => {
        getHospitalData()
    }, [toggle])

    let postHospitalData = () => {

        axios.post('https://my-first-masai-json-server.herokuapp.com/hospitalData', formData)
        setToggle(!toggle)
        getHospitalData()
    }
    let getHospitalData = () => {
        axios.get('https://my-first-masai-json-server.herokuapp.com/hospitalData').then((res) => {
            setHospitalData(res.data)
        })
    }
    let handleDoctorFormData = (e) => {

        let { value, name } = e.target;

        setFromSecData({
            ...formSecData,
            [name]: value
        })
    }

    useEffect(() => {
        getDoctorData()
    }, [page, filter, sort, dtoggle])

    let postDoctorData = () => {
        axios.post('https://my-first-masai-json-server.herokuapp.com/doctorsData', formSecData)
        setDtoggle(!dtoggle)
        getDoctorData()
    }

    let getDoctorData = () => {
        axios.get(`https://my-first-masai-json-server.herokuapp.com/doctorsData?${filter}_sort=salary&_order=${sort}&_page=${page}&_limit=5`).then((res) => {
            setDoctorsData(res.data)
        })
    }
    let handlePage = (value) => {
        setPage(page + value)
    }

    let handleFilter = (e) => {
        if (e.target.value === "x") {
            setFilter("")
        }
        else {
            setFilter(`hospital=${e.target.value}&`)
        }

    }
    let getDoctorDetails = (id) => {
        axios.get(`https://my-first-masai-json-server.herokuapp.com/doctorsData/${id}`).then((res) => {
            setDoctorDetails(res.data)
            console.log(res.data)
        })
    }
    let handleSort = (e) => {
        setSort(e.target.value)
    }
    let handDeleteDoctor = (id) => {
        axios.delete(`https://my-first-masai-json-server.herokuapp.com/doctorsData/${id}`)
        setDtoggle(!dtoggle)
        getDoctorData()
    }
    let handleNewText = (e) => {
        setNewText(e.target.value)
    }
    let handleUpdate = (id, newTex) => {

        axios(`https://my-first-masai-json-server.herokuapp.com/doctorsData/${id}`, {
            method: "PATCH",
            data: {
                name: newTex
            }
        })

    }
    return (
        <contextApi.Provider value={{ handleNewText, newText, handleUpdate, handDeleteDoctor, handleSort, handleFilter, handlePage, doctorDetail, getDoctorDetails, doctorsData, postDoctorData, formArr, handleDoctorFormData, handleFormData, postHospitalData, hospitalData }} >
            {children}
        </contextApi.Provider>)
}

export { ContextProvider }