import HttpClient from './HttpClient'; // Импорт вашего класса HttpClient

// Создаем экземпляр HttpClient с базовым URL вашего сервера
const apiClient = new HttpClient('http://localhost/');

export default apiClient;