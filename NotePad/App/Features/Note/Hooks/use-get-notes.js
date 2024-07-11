import { useGetNotesListQuery } from "../../../Processes/Store";

export const useGetNotes = () => {
    const { data: notes = [], isLoading, error } = useGetNotesListQuery();
    return { notes, isLoading, error };
};
