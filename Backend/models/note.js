import mongoose from '../mongoDB.js';

const noteSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, //Специальный тип айдишника, который имеется внутри монгуза
        ref: 'user', //Ссылается на модель user
        required: true,
    },
    noteType:{
        type: Number,
        required: true,
    },
    title:{
        type: String,
        required: true,
    },
    noteText:{
        type: String,
        required: true,
    },
    additionalParams: Array,

})

export default mongoose.model('Note', noteSchema)