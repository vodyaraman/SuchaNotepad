//Импорт библиотеки для отправки почты
import * as nodemailer from 'nodemailer'

//Инициализация и настройка почтового сервера
const transporter = nodemailer.createTransport({
    host: "smtp.yandex.ru",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
});

export const sendEmailCode = async (email, activateCode) => {
    await transporter.sendMail({
        from: process.env.EMAIL, //Адрес отправителя
        to: email, //Адрес получателя
        subject: 'Активация почты для NotePad', //Заголовок письма
        html: `<b>Пожалуйста введите проверочный код в приложении:</b>
              <p>${activateCode}</p>`
    })
}