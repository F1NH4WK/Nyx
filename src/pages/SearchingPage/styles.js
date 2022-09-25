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
        width: Dimensions.get('window').width - 30,
        position: 'absolute',
        alignSelf: 'center',
        height: Dimensions.get('window').height - 150,
        
    },

    displayInfos: {
        width: Dimensions.get('window').width - 35,
        paddingHorizontal: 20,
        borderColor: 'blue',
        borderWidth: 2,
        position: 'absolute',
        height: '30%',
        top: Dimensions.get('window').height - 340,
        borderRadius:20,
        flex: 0.5,
        flexDirection: 'row',
    },

    containerTexts:{
        height: '70%',
        alignSelf: 'center',
        // borderColor: 'green',
        // borderWidth: 2,
        width: '50%',
        justifyContent: 'space-evenly'
    },

    containerRank: {
        // borderColor: 'purple',
        // borderWidth: 2,
        alignItems: 'center',
        width: '50%',
        justifyContent: 'space-evenly'
    },
    
    nickStyle: {
        fontSize: 30,
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginRight: 10,
    },
})

export default styles;