import express from 'express'
import { addDoctor, alldoctors, appointmentAdmin, appointmentCancel, loginAdmin } from '../controllers/adminController.js'
import upload from '../middlewares/multer.js'
import authAdmin from '../middlewares/authAdmin.js'
import { changeAvailability } from '../controllers/doctorController.js'

const adminRouter = express.Router()

adminRouter.post('/add-doctor', authAdmin ,upload.single('image'), addDoctor)
adminRouter.post('/login', loginAdmin)
adminRouter.post('/all-doctors',authAdmin, alldoctors)
adminRouter.post('/change-availablity',authAdmin, changeAvailability)
adminRouter.get('/appointments',authAdmin, appointmentAdmin)
adminRouter.post('/cancel-appointments',authAdmin, appointmentCancel)

export default adminRouter;