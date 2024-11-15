import React, { useContext, useEffect } from 'react'
import { DoctorContext } from '../../context/DoctorContext'
import { AppContext } from '../../context/AppContext'

const DoctorProfile = () => {

  const {dToken,profileData, setProfileData, getProfileData,} = useContext(DoctorContext)
  const {currency} = useContext(AppContext)

  useEffect(()=>{
    getProfileData()
  },[dToken])

  return (
    <div>DoctorProfile</div>
  )
}

export default DoctorProfile