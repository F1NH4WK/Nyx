import { StyleSheet, Dimensions } from "react-native";

const { width, height} = Dimensions.get('window')

const styles = StyleSheet.create({

    modalStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.9)'
    },

    modalImage: {
        width: width * 0.6,
        height: height * 0.3,
        opacity: 0.85
    },
})

export default styles