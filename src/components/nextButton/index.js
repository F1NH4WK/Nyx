import { MotiView, MotiImage } from "moti";
import { Pressable, Text } from "react-native";

// LOCAL IMPORTS
import styles from "./styles";

export default function NextButton(props){

    return(
        <Pressable style = {styles.nextButton} 
        onPress = {props.done ? props.to : () => alert('Insert your nickname')}>
            <MotiView
            from = {{translateY: 100}}
            animate = {{translateY: 0}}
            delay =  {500}
            style = {{...styles.nextButton, opacity: props.done ? 1 : 0.5}}> 
                    <Text style = {styles.textInside}>{props.title}</Text>
                    <MotiImage
                    style = {styles.nextButtonImage}
                    source={require('../../../assets/iconGradient.png')}/>
            </MotiView>
        </Pressable>
    )
}