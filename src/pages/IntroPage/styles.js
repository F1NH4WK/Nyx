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
        fontSize: width * 0.12,
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
        width: 40, 
        height: 40,
        marginRight: 15
    },

    weekdaysStyle: {
        width: 50,
        height: 50,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#A7A7A7',
        borderColor: 'black',
        borderWidth: 0.1,
    },

    selectedStyle: {
        width: 50,
        height: 50,
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
        width: 150,
        height: 150,
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
        top: 50, 
        left: 10
    },

    modalStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },

    modalQuestions: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'left',
        marginBottom: 20,
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
        marginBottom: 20,
        textTransform: 'capitalize'
        
    },

    modalImage: {
        width: 200,
        height: 200,
        opacity: 0.85
    },

    modalCollumn: {
        flex: 0.45,
        alignItems: 'center',
    }
})

export default styles;