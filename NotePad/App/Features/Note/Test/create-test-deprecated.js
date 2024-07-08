import React from 'react';
import { render } from '@testing-library/react-native';
import NoteWrite from './NoteWrite';
import { NoteManagerProvider } from "../../../Entities/Note";

// Мокаем getNoteType, чтобы эмулировать его поведение
jest.mock('../../../Pull/Note', () => ({
    getNoteType: jest.fn().mockImplementation((note) => {
        if (note.type === 'invalid') {
            throw new Error('Invalid note type');
        }
        return { backgroundColor: 'blue' };
    }),
    FullScaledNotePlate: ({ backgroundColor, height, Orion, Scorpius, Andromeda, Prometheus }) => (
        <div style={{ backgroundColor, height }}>
            <Orion />
            <Scorpius />
            <Andromeda />
            <Prometheus />
        </div>
    )
}));

describe('NoteWrite', () => {
    test('renders correctly with valid note', () => {
        const note = { type: 'important', content: 'Контент' };

        const { getByText } = render(
            <NoteManagerProvider>
                <NoteWrite note={note} />
            </NoteManagerProvider>
        );

        // Проверяем, что компоненты рендерятся корректно
        expect(getByText('Контент')).toBeTruthy();
    });

    test('renders error message with invalid note type', () => {
        const note = { type: 'invalid', content: 'Контент' };

        const { getByText } = render(
            <NoteManagerProvider>
                <NoteWrite note={note} />
            </NoteManagerProvider>
        );

        // Проверяем, что сообщение об ошибке рендерится корректно
        expect(getByText('Ошибка при определении типа заметки')).toBeTruthy();
    });
});
