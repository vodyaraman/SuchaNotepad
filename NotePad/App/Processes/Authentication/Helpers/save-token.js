// Функция для сохранения токена в localStorage
const saveTokenToLocalStorage = (token) => {
    try {
      localStorage.setItem('authToken', token);
    } catch (error) {
      console.error('Failed to save token to localStorage:', error);
    }
  };

export { saveTokenToLocalStorage };