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
        padding: width * 0.04,
        alignItems: 'center'
    },

    displayChampion:{
        borderRadius: 20,
        width: width - width * 0.05,
        position: 'absolute',
        height: height - height * 0.18,
    },

    displayInfos: {
        width: width - width * 0.09,
        paddingHorizontal: width * 0.01,
        position: 'absolute',
        height: '30%',
        top: height - height * 0.58,
        flex: 0.5,
        flexDirection: 'row',
        zIndex: 2,
        justifyContent: 'space-between',
        opacity: 0.78
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
        bottom: height * 0.025,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: width * 0.09,
        opacity: 0.75

    },

    likeStyle: {
        width: 75,
        height: 75,
    },
})

export default styles;