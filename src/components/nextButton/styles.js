import { StyleSheet, Dimensions } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

    nextButton: {
        width: width * 0.9,
        height: height * 0.07,
        borderRadius: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: height * 0.02,
    },

    nextButtonImage: {
        height: height * 0.07,
        width: width * 0.9,
        borderRadius: width * 0.1,
        position: 'absolute',
    },

    textInside: {
        zIndex: 2,
        fontWeight: 'bold',
        fontSize: 20,
        textTransform: 'uppercase',
        color: 'white',
    },

})

export default styles