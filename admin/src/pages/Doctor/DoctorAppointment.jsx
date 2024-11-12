import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'

const DoctorAppointment = () => {

  const {dToken,getAppointment, appointments,} = useContext(DoctorContext)

  useEffect(()=>{
    getAppointment()
  },[dToken])

  return (
    <div>DoctorAppointment</div>
  )
}

export default DoctorAppointment