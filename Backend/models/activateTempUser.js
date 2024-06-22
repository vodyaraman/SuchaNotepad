import mongoose from "../mongoDB.js";
import bcrypt from 'bcrypt';

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
// Создание hash пароля
activateTempUserSchema.pre('save', async function (next) {
    if (this.isModified('password')) {
      const salt = await bcrypt.genSalt(10);
      this.password = await bcrypt.hash(this.password, salt);
    }
    next();
});
  
  // Проверка пароля по hash
activateTempUserSchema.methods.validatePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

export default mongoose.model('TempUser', activateTempUserSchema);