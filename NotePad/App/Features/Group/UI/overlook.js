import React, {useEffect} from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';

//Импорт составных компонентов
import { ItemBlock, AnimatedSearchButton, EmptyGroupMessage } from '../../../Entities/Group';
import { heightPercentageToDP as hg } from 'react-native-responsive-screen';

//Импорт навигации
import { Show } from '../../../Processes/Navigation/Rules';

//Импорт кастомного хука fetchBaseQuery для запроса на сервер
import { useGetGroupListQuery } from '../../../Processes/Group/API/group-api';

const Overlook = () => {
    
    const { data=[], isLoading, error } = useGetGroupListQuery()

    const onPressHandler = (id) => {
        Show.Control({id: id})
    }

    const groupListControlRender = (item, index) => {
        return(
            <ItemBlock 
                key={item._id}
                id={item._id}
                groupName={item.groupName} 
                ownerName={item.ownerId.name} 
                fontColor={'purple'}
                onPressHandler={onPressHandler} />
        )
    }

    if (isLoading) {
        return(<Text style={{fontWeight:'900', textAlign:'center'}}>Loading...</Text>)
    }

    return (
            <View style={styles.mainContainer}>
                <AnimatedSearchButton />
                {error && <EmptyGroupMessage />}
                
                    <ScrollView  
                        style={styles.scrollContainer} 
                        showsVerticalScrollIndicator={false} 
                        contentContainerStyle={styles.scrollContentContainer}
                    > 
                        {data.map((item, index) => groupListControlRender(item, index))}
                    </ScrollView>
            </View>  
    );
};

export default Overlook;

const styles = StyleSheet.create({
    mainContainer:{
        height: hg('72%'),
        paddingHorizontal: 15,
    },

    scrollContainer:{
        borderRadius: 25, 
    },

    scrollContentContainer:{
        height: '100%',
    }
})
