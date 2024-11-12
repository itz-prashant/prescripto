import { createContext, useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) =>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')
    const [appointments, setAppointments] = useState([])

    const getAppointment = async()=>{
        try {
            const {data} = await axios.get(backendUrl+'/api/doctor/appointments', {headers:{dToken}})
            if(data.success){
                setAppointments(data.appointments.reverse())
                console.log(data.appointments.reverse());
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const value = {
        dToken, setDToken, backendUrl, getAppointment, appointments, setAppointments
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider;