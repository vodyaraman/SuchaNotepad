import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wd, heightPercentageToDP as hg } from 'react-native-responsive-screen';

const TextBetweenLine = ({
    text, 
    lineColor='#999999', 
    lineWidth='50%',
    textBackground='white',
    textColor='#999999',
    fontSize=hg('2%')}
    ) => {

    return(
        <>
            <View style={[Styles.lines, {borderColor:lineColor, width:lineWidth}]}/>
            <Text style={[Styles.text, {backgroundColor: textBackground, color: textColor, fontSize: fontSize}]}>{text}</Text>
        </>
    )
}

export default TextBetweenLine;

const Styles = StyleSheet.create({
    lines: {
        position:'absolute',
        alignSelf:'center',
        borderWidth: 1,
        
    },

    text: {
        alignSelf:'center',
        paddingHorizontal: hg('2%'),
        
    },
})