import doctorModel from "../models/doctorModel.js"
import  bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

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

export {changeAvailability, doctorList,loginDoctor}