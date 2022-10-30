import { Dimensions, StyleSheet, StatusBar } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        paddingTop: StatusBar.currentHeight + width * 0.05,
        flex: 1,
        alignItems: 'center'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'left',
        alignSelf: 'flex-start',
        marginLeft: width * 0.1,
        marginBottom: height * 0.04
    },

    input: {
        width: '80%',
        borderColor: '#392190',
        borderWidth: 1,
        height: height * 0.065,
        borderRadius: 200,
        shadowColor: 'white',
        shadowOffset: {width: 2, height: 5},
        shadowOpacity: 1,
        shadowRadius: 1,
        padding: 15,
        marginBottom: height * 0.03
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