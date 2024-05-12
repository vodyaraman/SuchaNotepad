import React from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../../Processes/Authorisation/index'; 
import { SubmitButton } from '../../../Pull/User/index';

const Register = (props) => { // props позволяет передавать данные извне
  const dispatch = useDispatch();

  const userData = {
    name: "Anton Saevskii",
    email: "a.vodyaraman@gmail.com",
    password: "cVj5bD8x",
    ...props.userData, // это удалить в задницу
  };

  const handleRegister = () => {
    console.warn("Дисетчер отправляет действие")
    dispatch(registerUser(userData)); // Отправляем действие action при вызове функции handleRegister через диспетчер dispatch
  };

  return (
    <SubmitButton onPress={handleRegister} buttonText={"Кнопка отправлять регистрация производит"}/>
  );
};

export default Register;

