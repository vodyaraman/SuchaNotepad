// Графическое исполнение информации о пользователе в заметках
import NoteUser from "./UI/user";

// Графические элементы для просмотра заметок
import NoteTitle from "./UI/title";
import Note from "./UI/note";

// Графические элементы для редактирования заметок
import EditNote from "./UI/edit-note";
import EditNoteTitle from "./UI/edit-title";

// Прочие графические элементы заметок
import NoteManipulate from "./UI/manipulate";

// Провайдер контекста заметки
import { NoteManagerProvider } from "./Helpers/note-manager";

export { Note, NoteUser, NoteTitle, NoteManipulate, EditNoteTitle, EditNote, NoteManagerProvider };