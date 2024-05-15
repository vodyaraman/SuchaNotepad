import { StyleSheet, View } from "react-native";

const NavigationPlate = ({ Caesar, Bismark, Napoleon, Lenin }) => {
    return (
        <View style={styles.NavigationPlate}>
            <View style={[styles.component, styles.Caesar, { left: Caesar }]}>
                {Caesar}
            </View>
            <View style={[styles.component, styles.Bismark, { right: Bismark }]}>
                {Bismark}
            </View>
            <View style={[styles.component, styles.Napoleon, { top: Napoleon }]}>
                {Napoleon}
            </View>
            <View style={[styles.component, styles.Lenin, { bottom: Lenin }]}>
                {Lenin}
            </View>
        </View>
    );
};

export default NavigationPlate;

const styles = StyleSheet.create({
    NavigationPlate: {
        width: 350,
        height: '100%',
        position: 'absolute',
    },
    component: {
        position: 'absolute',
        bottom: '5vh',

        zIndex: 5,
    },
    Caesar: {
        left: 0,
        float: 'left',   
    },
    Bismark: {
        bottom: '6vh',
        left: '38vw',
    },
    Napoleon: {
        right: 0,
        float: 'right',
    },
    Lenin: {
        // Optional: additional styling specific to the Lenin view
    }
});
