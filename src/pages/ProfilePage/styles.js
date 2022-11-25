import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#232323',
        padding: 20
    },
    
    header: {
        height: height * 0.25,
        width: width,
        // borderColor: 'red',
        // borderWidth: 2,
        justifyContent: 'center'
    },

    accountInfos: {
        width: width,
        height: height * 0.32,
        // borderColor: 'blue',
        // borderWidth: 2,
        padding: 12,
    },

    infosView: { 
        width: width * 0.92,
        padding: 10,
        height: height * 0.08,
        // borderColor: 'green',
        // borderWidth: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    
    lanesStyle: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginRight: 15,
        opacity: 0.8
    },

    nextButton: {
        width: width * 0.7,
        height: height * 0.07,
        borderRadius: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: height * 0.02 ,
    },

    nextButtonImage: {
        height: height * 0.06,
        width: width * 0.6,
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

export default styles;