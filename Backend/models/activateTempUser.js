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
    createdAt: { type: Date, expires: '1m', default: Date.now },
})

export default mongoose.model('TempUser', activateTempUserSchema);