import { useState } from "react";
import { View, Text, TextInput, StatusBar} from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import { Entypo } from '@expo/vector-icons';
import { MotiView, MotiImage } from "moti";

import styles from "./styles";


const slides = [
    {
        key: 1,
        title: 'Intro',
        text: null,
        buttonText: "Let's start!",
        hasBackButton: false
    },
    {
        key: 2,
        title: 'B',
        text: 'nao sei tambem',
        buttonText: 'b',
        hasBackButton: false,
    },
    

]




export default function IntroSlider(){

    function _renderNextButton(){
        return(
            <MotiView style = {styles.nextButton}>
                <Text style = {styles.textInside}>let's start!</Text>
                <MotiImage
                style = {styles.nextButtonImage}
                source={require('../../../assets/iconGradient.png')}/>
            </MotiView>
        )
    }
    
    function renderSlides({item}){
        return(
            <View style = {styles.container}>
                <Entypo name="chevron-thin-left" size={24} color="black" style = {{position: 'absolute', top: 40, display: item.hasBackButton ? 'flex' : 'none' }}/>
                <MotiImage 
                style = {{width: 150, height: 150, alignSelf: 'center', marginBottom: 5}}
                source={require('../../../assets/OnlyNyxLogo.png')}/>
                <Text style = {styles.title}>Welcome to Nyx!</Text>
                <Text style = {styles.descriptions}>Read the infos below, they will explain about the app.</Text>

                <MotiView style = {styles.infosView}>
                    <MotiImage 
                    style = {{width: 40, height: 40, marginRight: 15}}
                    source = {require('../../../assets/questionGradient.png')} />
                    <Text style = {{...styles.title, fontSize: 20}}>What's Nyx?</Text>
                </MotiView>
                <Text style = {{...styles.descriptions, textAlign: 'left'}}>Nyx is an app made to find players that fits with your conditions.</Text>
                
                <MotiView style = {styles.infosView}>
                    <MotiImage 
                    style = {{width: 40, height: 40, marginRight: 15}}
                    source = {require('../../../assets/InfoGradient.png')} />
                    <Text style = {{...styles.title, fontSize: 20}}>What infos should I pass?</Text>
                </MotiView>
                <Text style = {{...styles.descriptions, textAlign: 'left'}}>You only need to pass your League of Legends’ nickname and the frequency you play. Simple, right? You can change them whenever you want.</Text>
                
            </View>
        )
    }
    
    return(
        <AppIntroSlider
        bottomButton
        scrollEnabled = {false}
        renderItem={renderSlides}
        renderNextButton = {_renderNextButton}
        data = {slides}
        activeDotStyle = {{display: 'none'}}
        dotStyle = {{display: 'none'}}
        keyExtractor = {({key}) => key} />
    )
}