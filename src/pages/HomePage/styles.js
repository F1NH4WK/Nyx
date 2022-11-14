import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { width, height} = Dimensions.get('window')
const STATUSBAR_HEIGHT = StatusBar.currentHeight
const ITEM_SIZE = width * 0.72
const SPACER_ITEM_SIZE = ( width - ITEM_SIZE ) / 2
const BACKDROP_HEIGHT = height  * 0.85

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#232323'
        // paddingTop: STATUSBAR_HEIGHT + height * 0.13,
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
        borderColor: '#A7A7A7',
        borderWidth: 1.5,
        borderRadius: 30,
        height: height * 0.045,
        width: width * 0.3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    
    laneAndTime: {
        width: width * 0.65,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height * 0.05,
        alignItems: 'center',

    },

    lanesStyle: {
        width: width * 0.06,
        height: width * 0.06,
    },

    daysWrapperStyle: {
        width: width * 0.65,
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },

    daysStyle: {
        borderRadius: 30,
        height: height * 0.03,
        width: width * 0.11,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#A7A7A7',
        opacity: 0.7,
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
        borderRadius: 40, 
        borderColor: 'rgba(39, 39, 39, 0.6)',
        marginBottom: height * 0.01,
        borderWidth: 8
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

export default styles