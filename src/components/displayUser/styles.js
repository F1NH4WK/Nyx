import { StyleSheet, Dimensions, StatusBar } from "react-native";

const {width, height} = Dimensions.get('window')

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        backgroundColor: '#232323',
        paddingTop: StatusBar.currentHeight * 0.2
    },

    mainView: {
        width: '100%',
        height: '95%',
        padding: width * 0.04
    },

    displayChampion:{
        borderRadius: 20,
        width: Dimensions.get('window').width - 15,
        position: 'absolute',
        alignSelf: 'center',
        height: Dimensions.get('window').height - 125,
    },

    displayInfos: {
        width: Dimensions.get('window').width - 35,
        paddingHorizontal: 5,
        position: 'absolute',
        height: '30%',
        top: Dimensions.get('window').height - 415,
        flex: 0.5,
        flexDirection: 'row',
        zIndex: 2,
        justifyContent: 'space-between',
        opacity: 0.85
    },

    containerTexts:{
        height: '80%',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        width: '60%'
    },

    containerRank: {
        alignItems: 'center',
        width: '45%',
        justifyContent: 'space-evenly',
    },
    
    nickStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        marginRight: 10,
        maxWidth: '80%'
    },

    laneStyle: {
        width: '20%',
        height: '100%'
    },

    infoIcons: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    iconsSpacing: {
        marginRight: 10
    },

    rankStyle: {
        width: '80%', 
        height: '80%', 
        opacity: 0.75
    },

    displayLikes: {
        width: '100%',
        position: 'absolute',
        zIndex: 2,
        height: '20%',
        bottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,
        opacity: 0.75

    },

    likeStyle: {
        width: 75,
        height: 75,
    },
})

export default styles;