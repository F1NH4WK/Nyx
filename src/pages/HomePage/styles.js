import { StyleSheet, Dimensions, StatusBar } from "react-native";

const { width, height} = Dimensions.get('window')
const STATUSBAR_HEIGHT = StatusBar.currentHeight

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: STATUSBAR_HEIGHT + height * 0.15,
        paddingHorizontal: width * 0.06
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
        fontSize: 30
        // AJUSTAR PARA NICKS GRANDES
    },

    timePlayingWrapper: {
        flexDirection: 'row',
        borderColor: '#A7A7A7',
        borderWidth: 1.5,
        borderRadius: 30,
        height: height * 0.04,
        width: width * 0.3,
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    
    laneAndTime: {
        width: width * 0.65,
        flexDirection: 'row',
        justifyContent: 'space-between'

    },

    lanesStyle: {
        width: width * 0.065,
        height: width * 0.065,
    }

})

export default styles