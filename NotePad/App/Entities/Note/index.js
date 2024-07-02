// Графическое исполнение информации о пользователе в заметках
import NoteUser from "./UI/user";

// Графические элементы для просмотра заметок
import NoteTitle from "./UI/title";
import Note from "./UI/note";

// Графические элементы для редактирования заметок
import EditNote from "./UI/edit-note";
import EditNoteTitle from "./UI/edit-title";
import NoteAddEdit from "./UI/add-edit";
import EditNoteList from "./UI/edit-note-list";
import NoteList from "./UI/note-list";

// Прочие графические элементы заметок
import NoteManipulate from "./UI/manipulate";
import NoteChangeType from "./UI/change-type"
import NoteBackground from "./UI/background";

// Провайдер контекста заметки
import CombinedNoteProviders from "./Helpers/manager";

export { Note, NoteUser, NoteTitle, NoteManipulate, EditNoteTitle, EditNote, NoteAddEdit, NoteChangeType, NoteBackground, NoteList, EditNoteList, CombinedNoteProviders };