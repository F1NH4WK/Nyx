import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')
const ITEM_SIZE = width * 0.72
const BACKDROP_HEIGHT = height  * 0.8;


const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#232323',
        padding: 20
    },
    
    header: {
        height: height * 0.2,
        width: width,
        // borderColor: 'red',
        // borderWidth: 2,
        justifyContent: 'center',
        marginBottom: 20
    },

    accountInfos: {
        width: width,
        height: height * 0.32,
        // borderColor: 'blue',
        // borderWidth: 2,
        alignItems: 'center',
        padding: 12,
    },

    infosView: { 
        width: width * 0.95,
        padding: 10,
        height: height * 0.08,
        // borderColor: 'green',
        // borderWidth: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row',
    },
    
    lanesStyle: {
        width: 30,
        height: 30,
        alignSelf: 'center',
        marginRight: 15,
        opacity: 0.8
    },

    categoryText: {
        fontSize: 14, 
        fontWeight: 'bold', 
        color: 'white', 
        marginVertical: 10, 
        opacity: 0.7, 
        alignSelf: 'flex-start', 
        textTransform: 'uppercase'
    },

    divider: {
        width: width, 
        height: 1, 
        backgroundColor: 'gray', 
        opacity: 0.5, 
        marginVertical: 5
    },
    
    subTopics: {
        fontSize: 17,
        color: 'white',
    },

    disabledSubTopics: {
        fontSize: 15,
        color: 'gray'
    },

    tierBackImage:{
        width: width * 0.666, 
        height: height * 0.6, 
        resizeMode: 'stretch', 
        position: 'absolute',
        zIndex: 2, 
        top: -27, 
        alignSelf: 'center', 
        left: -11,
    },

    suggestedWrapper: {
        marginHorizontal: 10,
        padding: 5,
        alignItems: 'center',
        // backgroundColor: 'red',
        
    },

    nickStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: height * 0.01,
        color: 'white'
        // AJUSTAR PARA NICKS GRANDES
    },

    timePlayingWrapper: {
        flexDirection: 'row',
        borderWidth: 1.5,
        borderRadius: 30,
        height: height * 0.045,
        width: width * 0.3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        borderColor: 'white', 
        opacity: 0.9
    },
    
    laneAndTime: {
        width: width * 0.65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height * 0.05,
        alignItems: 'center',

    },

    displayLanesStyle: {
        width: width * 0.05,
        height: width * 0.052,
    },

    daysWrapperStyle: {
        width: width * 0.65,
        // borderColor: 'red',
        // borderWidth: 2,
        height: height * 0.05,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    daysStyle: {
        borderRadius: 30,
        height: height * 0.03,
        width: width  * 0.6 / 7,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#A7A7A7',
        opacity: 1,
    },

    likesStyle: {
        // position: 'absolute',
        flexDirection: 'row',
        // bottom: height * 0.04,
        width: width * 0.75,
        height: height * 0.1,
        marginTop: height * 0.02,
        // left: width * 0.12,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,

    },

    likesImageStyle: {
        width: 70,
        height: 70,
    },

    highlightChampion: {
        width: width * 0.62, 
        height: height * 0.55, 
        borderRadius: 5, 
        borderColor: 'rgba(39, 39, 39, 0.6)',
        marginBottom: height * 0.01,
    },

    returnStyle: {
        position: 'absolute', 
        top: 35, 
        left: 20, 
        zIndex: 2, 
        opacity: 0.8
    },

    hoursText: {
        fontSize: 11, 
        fontWeight: 'bold', 
        color: 'white'
    },

    fadeGradient: {
        width: width, 
        height: BACKDROP_HEIGHT , 
        position: 'absolute', 
        bottom: 0
    },

    backdropView: {
        position: 'absolute', 
        width: width, 
        height: BACKDROP_HEIGHT
    },

    backdropImage: {
        position: 'absolute', 
        height: height, 
        width: width,
        overflow: 'hidden'
    },

})

export default styles;