import { StyleSheet, Dimensions, StatusBar } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + height * 0.02,
        paddingHorizontal: width * 0.05,
        alignItems: 'center',

    },

    nextButton: {
        width: width * 0.9,
        opacity: 0.5,
        height: height * 0.07,
        borderRadius: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center'
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
        textTransform: 'uppercase'
    },

    title: {
        fontWeight: 'bold',
        fontSize: width * 0.075,
        margin: height * 0.005
    },

    descriptions: {
        color: '#A7A7A7',
        fontSize: width * 0.045,
        textAlign: 'center',
        
    },

    infosView: {
        width: '100%',
        height: '8%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: width * 0.03
        
    },

    questionTitle: {
        fontSize: width * 0.12,
        textAlign: 'center',
        marginTop: StatusBar.currentHeight + height * 0.01,
    },

    textInput: {
        fontSize: width * 0.065,
        borderBottomColor: '#A7A7A7',
        width: '100%',
        height: '10%',
        alignItems: 'center',
        borderBottomWidth: 2,
        borderBottomStartRadius: 10,
        marginBottom: height * 0.01
    },

    animation: {
        width: width * 0.5,
        height: height * 0.5,
        alignSelf: 'center',
    },
    

})

export default styles;