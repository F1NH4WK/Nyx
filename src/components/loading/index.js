import { View } from "react-native";
import { MotiImage } from "moti";

// LOCAL IMPORTS
import styles from "./styles";

export default function Loading(){
    return(
        <View style = {styles.modalStyle}>
            <MotiImage 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            delay = {100}    
            style = {styles.modalImage}
            source={require('../../../assets/gifs/processing.gif')}/>
        </View>
    )
}