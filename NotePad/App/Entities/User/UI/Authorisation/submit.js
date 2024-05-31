// кнопка для отправки содержимого инпутов без логики отправки, только передаём выше по пропсам событие нажатия
import UserSubmitButton from "../../../../Pull/Buttons/submit";
import {heightPercentageToDP as hg} from 'react-native-responsive-screen';

const UserSubmit = ({onPressHandler}) => {
    return (
      <UserSubmitButton 
        textColor={'white'} 
        text={'Login'}
        fontSize={hg('2.8%')}
        fontWeight={'bold'}
        onPressHandler={onPressHandler} />
    );
  };
  
  export default UserSubmit;
  