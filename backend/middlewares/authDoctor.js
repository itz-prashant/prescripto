import jwt from 'jsonwebtoken'

// Doctor authentication middleware

const authDoctor = async (req, res, next)=>{
    try {
        const {dToken} = req.headers

        if(!dToken){
            return res.json({
                success: false,
                message: "Not Authorized login again"
            })
        }
        const tokenDecode = jwt.verify(dToken, process.env.JWT_SECRET)

        req.body.docId = tokenDecode.id

        next()

    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}

export default authDoctor;