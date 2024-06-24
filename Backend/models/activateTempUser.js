import mongoose from "../mongoDB.js";

const activateTempUserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    code:{
        type: String,
        required: true,
    },
    expiredAt: {
        type: Date,
        default: Date.now,
        required: true,
       
    }
})

// activateTempUserSchema.index({"expiredAt": 1},{expireAfterSeconds: 10})
//нихера не работает автоудаление, но пока оставить это


export default mongoose.model('TempUser', activateTempUserSchema);