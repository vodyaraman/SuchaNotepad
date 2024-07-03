export const getCurrentDateTime = () => {
    const now = new Date();

    const date = now.toISOString().slice(0, 10);

    const time = now.toTimeString().slice(0, 8);

    return {
        date,
        time
    };
};
