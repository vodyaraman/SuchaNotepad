import mongoose from "../mongoDB.js";

const activateTempUserSchema = new mongoose.Schema({
    email:{
        type: String,
        unique: true,
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