export const toggleComplete = (items, index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    return newItems;
};
