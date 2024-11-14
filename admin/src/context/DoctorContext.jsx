import { createContext, useState } from "react";
import {toast} from 'react-toastify'
import axios from 'axios'

export const DoctorContext = createContext()

const DoctorContextProvider = (props) =>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const [dToken, setDToken] = useState(localStorage.getItem('dToken') ? localStorage.getItem('dToken') : '')
    const [appointments, setAppointments] = useState([])
    const [dashData, setDashData] = useState(false)

    const getAppointment = async()=>{
        try {
            const {data} = await axios.get(backendUrl+'/api/doctor/appointments', {headers:{dToken}})
            if(data.success){
                setAppointments(data.appointments)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const completeAppointment = async (appointmentId)=>{
        try {
            const {data} = await axios.post(backendUrl+'/api/doctor/complete-appointment',{appointmentId}, {headers:{dToken}})
            if(data.success){
                toast.success(data.message)
                getAppointment()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const cancelAppointment = async (appointmentId)=>{
        try {
            const {data} = await axios.post(backendUrl+'/api/doctor/cancel-appointment',{appointmentId}, {headers:{dToken}})
            if(data.success){
                toast.success(data.message)
                getAppointment()
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const getDashData = async ()=>{
        try {
            const {data} = await axios.get(backendUrl+'/api/doctor/dashboard',{headers:{dToken}})
            
            if(data.success){
                setDashData(data.dashData)
                console.log(data.dashData);
                
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message)
        }
    }

    const value = {
        dToken, setDToken, backendUrl, getAppointment, appointments, setAppointments, completeAppointment,dashData,setDashData,getDashData, cancelAppointment
    }

    return (
        <DoctorContext.Provider value={value}>
            {props.children}
        </DoctorContext.Provider>
    )
}

export default DoctorContextProvider;