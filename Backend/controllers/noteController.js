import NoteModel from '../models/note.js';


export const create = async (req, res) =>{
    try {
        const userID = req.userId,
              {userId = userID, noteType, title, noteText, additionalParams} = req.body;

        const newNote = new NoteModel({
            userId,
            noteType,
            title,
            noteText,
            additionalParams
        })

        const post = await newNote.save();

        res.json({
            post
        })
    } catch (error) {
        res.json({
            error
        })
    }   
}