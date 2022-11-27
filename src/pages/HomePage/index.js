import { Text, View, Image, Dimensions, ImageBackground } from "react-native";

// LOCAL IMPORTS
import styles from "./styles";

const { width, height } = Dimensions.get('window') 

export default function HomePage({ navigation, route }){

    console.log(route.params)
    return(
        <View style = {styles.container} />
    )
}