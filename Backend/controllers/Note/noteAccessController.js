import NoteAccess from '../../models/noteAccess.js';

// Controller to add note access
export const addNoteAccess = async (req, res) => {
    const { noteId, userId, groupId } = req.body;

    try {
        if (!noteId || (!userId && !groupId)) {
            return res.status(400).json({ message: 'Note ID and either User ID or Group ID are required.' });
        }

        const noteAccess = new NoteAccess({ noteId, userId, groupId });
        await noteAccess.save();
        res.status(201).json(noteAccess);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to update note access
export const updateNoteAccess = async (req, res) => {
    const { accessId, userId, groupId } = req.body;

    try {
        const noteAccess = await NoteAccess.findById(accessId);
        if (!noteAccess) {
            return res.status(404).json({ message: 'Note access not found' });
        }

        if (userId) {
            noteAccess.userId = userId;
        }
        if (groupId) {
            noteAccess.groupId = groupId;
        }

        await noteAccess.save();
        res.status(200).json(noteAccess);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to remove note access
export const removeNoteAccess = async (req, res) => {
    const { accessId } = req.body;

    try {
        const noteAccess = await NoteAccess.findByIdAndDelete(accessId);
        if (!noteAccess) {
            return res.status(404).json({ message: 'Note access not found' });
        }

        res.status(200).json({ message: 'Note access removed' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Controller to get note access details
export const getNoteAccessDetails = async (req, res) => {
    const { noteId } = req.params;

    try {
        const noteAccessDetails = await NoteAccess.find({ noteId })
            .populate('userId', 'name email')
            .populate('groupId', 'groupName');
        res.status(200).json(noteAccessDetails);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
