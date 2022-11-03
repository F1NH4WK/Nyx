import { Dimensions, StyleSheet, StatusBar } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + width * 0.05,
        flex: 1,
        // alignItems: 'center',
        backgroundColor: '#272727',
        padding: width * 0.02
    },
    

    formContainer: {
        backgroundColor: 'rgba(34, 34, 34, 0.9)',
        width: '90%',
        height: height * 0.55,
        shadowColor: 'red',
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,
        borderRadius: 15,
        alignItems: 'center',
        padding: 10,
        justifyContent: 'space-between',
    },

    formHeaderWrapper: {
        width: '100%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center'
    },

    formHeader: {
        fontSize: 25,
        opacity: 0.9,
        fontWeight: 'bold',
        letterSpacing: 0.5,
        color: 'white'
    },

    formSubHeader: {
        opacity: 0.85,
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
    },
    
    inputWrapper: {
        padding: 10,
        width: '100%',
        height: '50%',
    },

    inputGroup: {
        width: '100%',
        height: '100%'
    },

    formInput: {
        flexDirection: 'row',
        width: '100%',
        height: height * 0.065,
        alignItems: 'center',
        borderRadius: 60,
        color: 'white',
    },

    formInputWrapper: {
        height: height * 0.2,
        justifyContent: 'space-around'
    },

    input: {
        width: '100%',
        borderColor: '#392190',
        borderBottomWidth: 2,
        height: height * 0.065,
        borderRadius: 20,
        shadowColor: 'white',
        padding: 15,
        marginBottom: height * 0.03,
        alignSelf: 'baseline',
        color: 'white',
        
    },

    inputIcon: {
        position: 'absolute',
        right: 20,
        opacity: 0.8
    },

    logButton: {
        width: '100%',
        height: height * 0.08,
        backgroundColor: '#303030',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 15,
        opacity: 0.9
    },

    formButtonText: {
        fontSize: 16, 
        fontWeight: 'bold',
        color: 'white'
    },

    socialGroup: {
        flexDirection: 'row',
        width: width * 0.18,
        justifyContent: 'space-between'
    },

    socialImage: {
        opacity: 1,
        width: 20,
        height: 20,
    },

    logoDisplay: {
        width: 0.4 *  width,
        height: 0.2 * height,
        alignSelf: 'center',
        marginBottom: height * 0.04
    },

    nextButton: {
        width: '70%',
        height: height * 0.06,
        borderRadius: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    nextButtonImage: {
        height: height * 0.06,
        width: width * 0.7,
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

    withGoogle: {
        width: '70%',
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        height: height * 0.06,
        marginTop: height * 0.04,
        borderRadius: 200,
        borderColor: '#A7A7A7',
        borderWidth: 0.5,
        paddingHorizontal: 30
    },

    signUp: {
        width: '70%',
        height: height * 0.06,
        borderRadius: width * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height * 0.03,
        borderColor: '#392190',
        borderWidth: 1
    },
})

export default styles