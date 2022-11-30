import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#232323',
        padding: 20,
    },

    containerNoMatches: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#232323',
        padding: 20,
        justifyContent: 'center'
    },

    noMatches: {
        width: width * 0.5,
        height: height * 0.5,
        resizeMode: 'contain',
        opacity: 0.5
    }
})

export default styles;