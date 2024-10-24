import validator from 'validator'
import bcrypt from 'bcrypt'
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from '../models/doctorModel.js'

// Api fro adding doctors

const addDoctor = async (req, res) =>{

    try {
        const {name, email, password,about, speciality, degree, experience, fees, address} = req.body
        const imageFile = req.file

        // check for all data to add doctors
        if(!name || !email || !password || !about || !speciality || !degree || !experience || !fees || !address ){
            return res.json({
                success: false,
                message: "Missing Details"
            })
        }

        // validation email format
        if(!validator.isEmail(email)){
            return res.json({
                success: false,
                message: "Please enter a valid email"
            })
        }

        // validating strong password
        if(password.length < 8){
            return res.json({
                success: false,
                message: "Please enter a Strong password"
            })
        }
    
        // hashing doctor password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // upload image to cloudinary
        const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
            resource_type: "image"
        })
        const imageUrl = imageUpload.secure_url

        const doctorData = {
            name,
            email,
            image: imageUrl,
            password: hashedPassword,
            speciality,
            degree,
            experience,
            about,
            fees,
            address: JSON.parse(address),
            date: Date.now()
        }

        const newDoctor = new doctorModel(doctorData)
        await newDoctor.save()

        res.json({
            success: true,
            message: "Doctor Added"
        })

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

export {addDoctor}