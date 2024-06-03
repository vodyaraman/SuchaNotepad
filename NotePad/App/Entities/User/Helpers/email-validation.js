export const emailValidation = (email) => {
    const correct = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/
    if (!correct.test(email)) {
        return false
    }
    return true;
}