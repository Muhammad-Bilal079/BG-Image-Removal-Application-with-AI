import jwt from "jsonwebtoken";

const authUser = async (req, res, next) => {
try {
    const token = req.headers
    if(!token) {
       return res.status(401).json({success: false, message: "Unauthorized Token"})
    }

    const token_decode = jwt.decode(token)
    req.body.clerkId = token_decode.clerkId
    next()
} 
catch (error) {
    console.error(error.message);
    return res.status(500).json({ success: false, message: error.message });
}
}

export default authUser