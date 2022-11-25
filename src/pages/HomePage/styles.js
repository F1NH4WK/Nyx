import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#232323',
        padding: 20
    }
})

export default styles;