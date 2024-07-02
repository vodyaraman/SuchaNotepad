import React from 'react';
import { NoteManagerProvider } from './note-manager';
import { NoteTypeProvider } from './type-manager';

const CombinedNoteProviders = ({ children }) => {
    return (
        <NoteManagerProvider>
            <NoteTypeProvider>
                {children}
            </NoteTypeProvider>
        </NoteManagerProvider>
    );
};

export default CombinedNoteProviders;
