import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        // borderColor: 'red',
        // borderWidth: 2,
        alignItems: 'center',
        paddingHorizontal: 20,
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
        // borderColor: 'blue',
        // borderWidth: 2,
        position: 'absolute',
        height: '30%',
        top: Dimensions.get('window').height - 430,
        flex: 0.5,
        flexDirection: 'row',
        zIndex: 2,
        justifyContent: 'space-between'
        
    },

    containerTexts:{
        height: '85%',
        alignSelf: 'center',
        // borderColor: 'green',
        // borderWidth: 2,
        justifyContent: 'space-evenly',
        width: '60%'
    },

    containerRank: {
        // borderColor: 'purple',
        // borderWidth: 2,
        alignItems: 'center',
        width: '45%',
        justifyContent: 'space-evenly',
    },
    
    nickStyle: {
        fontSize: 40,
        fontWeight: 'bold',
        // fontStyle: 'italic',
        marginRight: 10,
        // borderColor: 'red',
        // borderWidth: 2,
    },

    displayLikes: {
        width: '100%',
        // borderColor: 'red',
        // borderWidth: 2,
        position: 'absolute',
        zIndex: 2,
        height: '20%',
        bottom: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 30,

    },

    likeStyle: {
        width: 75,
        height: 75,
    },
})

export default styles;