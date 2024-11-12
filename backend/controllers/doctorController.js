import doctorModel from "../models/doctorModel.js"
import  bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import appointmentModel from "../models/appointmentModel.js"

const changeAvailability = async (req, res)=>{

    try {
        const {docId} = req.body
        const docData = await doctorModel.findById(docId)

        await  doctorModel.findByIdAndUpdate(docId, {available: !docData.available})
        res.json({
            success: true,
            message: 'Availablity change'
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

}

const doctorList = async (req, res)=>{

    try {
        const doctors = await doctorModel.find({}).select(['-password', '-email'])
        res.json({
            success: true,
            doctors
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }

}

// Api for doctor login
const loginDoctor = async(req,res)=>{
    try {
        const {email, password} = req.body
        const doctor = await doctorModel.findOne({email})

        if(!doctor){
            return res.json({
                success: false,
                message: 'Invalid Credentials'
            })
        }

        const isMatch = await bcrypt.compare(password, doctor.password)

        if(isMatch){
            const token = jwt.sign({id:doctor._id}, process.env.JWT_SECRET)
            return res.json({
                success: true,
                token
            })
        }else{
            return res.json({
                success: false,
                message: error.message
            })
        }

    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Api to get doctor appointment for doctor panel
const appointmentsDoctor = async (req,res)=>{
    try {
        const {docId}  = req.body
        const appointments = await appointmentModel.find({docId})

        res.json({
            success:true,
            appointments
        })
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Api to mark appointment completed for doctor panel
const appointmentComplete =async (req,res)=>{
    try {
        const {docId, appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if(appointmentData && appointmentData.docId === docId){
            await appointmentModel.findByIdAndUpdate(appointmentId, {isCompleted:true})
            return res.json({
                success:true,
                message:"Appointment completed"
            })
        }else{
            return res.json({
                success:false,
                message:"Mark Failed"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

// Api to cancel appointment for doctor panel
const appointmentCanCel =async (req,res)=>{
    try {
        const {docId, appointmentId} = req.body
        const appointmentData = await appointmentModel.findById(appointmentId)
        if(appointmentData && appointmentData.docId === docId){
            await appointmentModel.findByIdAndUpdate(appointmentId, {cancelled:true})
            return res.json({
                success:true,
                message:"Appointment cancelled"
            })
        }else{
            return res.json({
                success:false,
                message:"Cancilation Failed"
            })
        }
    } catch (error) {
        res.json({
            success: false,
            message: error.message
        })
    }
}

export {changeAvailability, doctorList,loginDoctor, appointmentsDoctor, appointmentComplete, appointmentCanCel}