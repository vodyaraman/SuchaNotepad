import HttpClient from './HTTPClientAxios';

// Создаем экземпляр HttpClient с базовым URL вашего сервера
const apiClient = new HttpClient(`http://${process.env.HOST}:${process.env.PORT}`);

export default apiClient;