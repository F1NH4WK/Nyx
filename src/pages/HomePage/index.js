import { MotiImage, MotiText, MotiView } from "moti";
import { Text, View, Image, Dimensions, ImageBackground } from "react-native";

// LOCAL IMPORTS
import styles from "./styles";

const { width, height } = Dimensions.get('window') 

export default function HomePage({ navigation, route }){

    const matches = [{}]

    
    if (matches.length == 0){
        return(
            <MotiView style = {styles.container}>

            </MotiView>
        )
    }

    else{
        return(
            <MotiView style = {styles.containerNoMatches}>
                <MotiImage
                style = {styles.noMatches}
                source = {require('../../../assets/gifs/noMatches.gif')}
                 />
                <MotiText
                style = {{color: 'gray', fontSize: 16}}
                numberOfLines = {2}
                lineBreakMode = {'tail'}>
                    Looks like you don't have any matches yet :(
                </MotiText>
            </MotiView>
        )
    }
}