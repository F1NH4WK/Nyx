import { useState } from "react";
import { View, Text, TextInput} from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';



const slides = [
    {
        key: 1,
        title: 'A',
        text: 'nao sei'
    },
    {
        key: 2,
        title: 'B',
        text: 'nao sei'
    },

]


export default function IntroSlider(){
    
    function renderSlides({item}){
        return(
            <View style = {{flex: 1}}>
                <Text>{item.tile}</Text>
                <Text>{item.text}</Text>
                <TextInput></TextInput>
            </View>

        )
    }
    
    return(
        <AppIntroSlider
        renderItem={renderSlides}
        data = {slides}
        activeDotStyle = {{
            backgroundColor: 'red',
            width: 30
        }} />
    )
}