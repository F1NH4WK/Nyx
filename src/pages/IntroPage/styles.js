import { StyleSheet, Dimensions, StatusBar } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight + height * 0.02,
        paddingHorizontal: width * 0.05,
        alignItems: 'center',
        backgroundColor: '#272727'
    },

    title: {
        fontWeight: 'bold',
        color: 'white',
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
        marginVertical: width * 0.03,
    },

    questionTitle: {
        fontSize: width * 0.11,
        textAlign: 'center',
        marginTop: StatusBar.currentHeight + height * 0.03,
        color: 'white',
    },

    textInput: {
        fontSize: width * 0.065,
        borderBottomColor: '#A7A7A7',
        width: '100%',
        height: '80%',
        marginTop: height * 0.01,
        borderBottomWidth: 2,
        borderBottomStartRadius: 10,
        color: 'white',
        
    },

    animation: {
        width: width * 0.5,
        height: height * 0.5,
        alignSelf: 'center',
    },

    optionsChose: {
        fontSize: 18,
        borderBottomColor: '#A7A7A7',
        borderBottomWidth: 2,
        opacity: 0.9,
        color: 'white'
    },

    iconsStyle: {
        width: width * 0.1, 
        height: height * 0.05,
        marginRight: width * 0.06
    },

    weekdaysStyle: {
        width: width * 0.14,
        height: height * 0.07,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A7A7A7',
        borderColor: 'black',
        borderWidth: 0.1,
    },

    selectedStyle: {
        width: width * 0.135,
        height: height * 0.07,
        borderRadius: 40,
        position: 'absolute',
    },

    userInfos: {
        fontWeight: 'bold',
        fontSize: 10,
        color: 'white'
    },

    weekdaysWrapper: {
        width: '80%',
        justifyContent: 'space-around',
        flexDirection: 'row',
    },

    hoursWrapper: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    noDisplay: {
        display: 'none',
    },

    logoDisplay: {
        width: 0.4 *  width,
        height: 0.2 * height,
        alignSelf: 'center',
    },

    subQuestion: {
        fontWeight: 'bold',
        fontSize: width * 0.045,
        margin: height * 0.005,
        color: 'white'
    },

    subDescription: {
        color: '#A7A7A7',
        fontSize: width * 0.045,
        textAlign: 'left',
    },

    goBack: {
        position: 'absolute', 
        top: height * 0.065, 
        left: width * 0.03
    },


    modalQuestions: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: height * 0.025,
        color: 'white'
    },

    modalQuestionsWrapper: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },

    modalAnswer: {
        fontSize: 30,
        color: '#A7A7A7',
        opacity: 1,
        fontWeight: 'bold',
        marginBottom: height * 0.025,
        textTransform: 'capitalize'
        
    },

    modalCollumn: {
        flex: 0.45,
        alignItems: 'center',
    },

    modalYesNo:{
        width: 120,
        height: 40,
        borderRadius: 200,
    },

    pressableYesNo:{
        width: 100,
        height: 50,
    },
})

export default styles;