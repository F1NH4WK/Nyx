import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { width, height} = Dimensions.get('window')
const STATUSBAR_HEIGHT = StatusBar.currentHeight

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // paddingTop: STATUSBAR_HEIGHT + height * 0.13,
    },
    
    suggestedWrapper: {
        marginHorizontal: 10,
        padding: 20,
        alignItems: 'center',
        // backgroundColor: 'red',
        borderRadius: 34,
    },
    
    nickStyle: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: height * 0.01
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
        width: '120%',
        height: height * 0.05,
        alignItems: 'center',
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    },

    daysStyle: {
        borderRadius: 30,
        height: height * 0.03,
        width: width * 0.11,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A7A7A7',
        opacity: 0.9,
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
    }


})

export default styles