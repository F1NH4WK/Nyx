import { useState } from "react";
import { View, Text, TextInput, StatusBar, Pressable, Button} from "react-native";
import AppIntroSlider from 'react-native-app-intro-slider';
import { Entypo } from '@expo/vector-icons';
import { MotiView, MotiImage } from "moti";
import Lottie from 'lottie-react-native';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

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
        title: 'Nickname',
        text: null,
        buttonText: 'Continue',
        hasBackButton: false,
    },
    {
        key: 3,
        title: 'DaysAndHours',
        text: null,
        buttonText: 'Continue',
        hasBackButton: true
    }
    

]




export default function IntroSlider(){

    const [done, setDone] = useState(false)
    const [time1, setTime1] = useState(new Date())
    const [time2, setTime2] = useState(new Date())
    const [days, setDays] = useState([
        {key: 0, label: 'SUN', value: 'Sunday', selected: false},
        {key: 1, label: 'MON', value: 'Monday', selected: false},
        {key: 2, label: 'TUE', value: 'Tuesday', selected: false},
        {key: 3, label: 'WED', value: 'Wednesday', selected: false},
        {key: 4, label: 'THU', value: 'Thursday', selected: false},
        {key: 5, label: 'FRI', value: 'Friday', selected: false},
        {key: 6, label: 'SAT', value: 'Saturday', selected: false}
    ])

    function setWeekdays(id){
        setDays(days.filter((i, index) => {
        index == id
        ? days[index].selected = !i.selected
        : days[index].selected = i.selected
        return days[index]

        }))
    }
    
    const showTime = (args) => args == 1
    ? DateTimePickerAndroid.open({
        value: time1,
        mode: 'time',
        display: 'spinner',
        positiveButtonLabel: 'Set',
        minuteInterval: 15,
        onChange: (event, date) => setTime1(date)
    })

    : DateTimePickerAndroid.open({
        value: time2,
        mode: 'time',
        display: 'spinner',
        positiveButtonLabel: 'Set',
        minuteInterval: 15,
        onChange: (event, date) => setTime2(date)
    })

    function _renderNextButton(){
        return(
            <MotiView style = {{...styles.nextButton, opacity: done? 1 : 0.5}}>
                <Text style = {styles.textInside}>Continue</Text>
                <MotiImage
                style = {styles.nextButtonImage}
                source={require('../../../assets/iconGradient.png')}/>
            </MotiView>
        )
    }
    
    function NicknamePage(){
        return(
            <View style = {styles.container}>
                <Entypo name="chevron-thin-left" size={24} color="black" style = {{position: 'absolute', top:StatusBar.currentHeight + 10, left: 20}}/>
                <Text style = {styles.questionTitle}>My nickname is</Text>
                <TextInput 
                style = {styles.textInput} placeholder="Nickname"
                onSubmitEditing={() => setDone(true)}
                />

                <Text style = {{...styles.descriptions, fontStyle: 'italic', textAlign: 'left'}}>Example: O Azir {'\n'}
                This will be used to search your profile and catch infos about you. You will not be able to change it.</Text>
                <Lottie
                source={require('../../../assets/animations/khazix.json')}
                style = {styles.animation}
                autoPlay
                autoSize
                loop/>
            </View>
        )
    }

    function FirstPage(){
        return(
            <View style = {styles.container}>
                <Entypo name="chevron-thin-left" size={24} color="black" style = {{position: 'absolute', top: 40, display: item.hasBackButton ? 'flex' : 'none', left: 20 }}/>
                <MotiImage 
                style = {{width: 150, height: 150, alignSelf: 'center'}}
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
                    style = {styles.iconsStyle}
                    source = {require('../../../assets/InfoGradient.png')} />
                    <Text style = {{...styles.title, fontSize: 20}}>What infos should I pass?</Text>
                </MotiView>
                <Text style = {{...styles.descriptions, textAlign: 'left'}}>You only need to pass your League of Legends’ nickname and the frequency you play. Simple, right? You can change them whenever you want.</Text>
            </View>
        )
    }
     
    function renderSlides({item}){
        return(
            <View style = {styles.container}>
                <Entypo name="chevron-thin-left" size={24} color="black" style = {{position: 'absolute', top: 40, display: item.hasBackButton ? 'flex' : 'none', left: 20}}/>
                <Text style = {styles.questionTitle}>Your gameplay frequency</Text>
                <MotiView style = {styles.infosView}>
                    <MotiImage
                    source={require('../../../assets/clockGradient.png')}
                    style = {styles.iconsStyle} />
                    <View style = {{width: '40%', flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Pressable onPress={() => showTime(1)}>
                            <Text  style = {styles.optionsChose}>{time1.getHours().toString() + " : " + time1.getMinutes().toString()}</Text>
                        </Pressable>
                        <Text style = {{...styles.optionsChose, borderBottomWidth: 0}}>-</Text>
                        <Pressable onPress={() => showTime(2)}>
                            <Text style = {styles.optionsChose}>{time2.getHours().toString() + " : " + time2.getMinutes().toString()}</Text>
                        </Pressable>
                    </View>
                </MotiView>

                <MotiView style = {styles.infosView}>
                    <MotiImage
                    source={require('../../../assets/calendarGradient.png')}
                    style = {styles.iconsStyle}/>
                    <View style = {{width: '80%', flexDirection: 'row', justifyContent: 'space-around'}}>
                    
                    {
                    days.map((val, index) => 
                    val.selected 
                       ? 
                       <Pressable
                        onPress={() => setWeekdays(index)}
                        key={val.key}
                        style = {{...styles.weekdaysStyle, backgroundColor: val.selected ? 'deeppink' : '#A7A7A7'}}>
                            <MotiImage 
                            style = {styles.selectedStyle}
                            source = {require('../../../assets/iconGradient.png')} />
                            <Text style = {{fontWeight: 'bold', fontSize: 10}}>{val.label}</Text>
                        </Pressable>
                        :
                        <Pressable
                        onPress={() => setWeekdays(index)}
                        key={val.key}
                        style = {{...styles.weekdaysStyle, backgroundColor: '#A7A7A7'}}>
                            <Text style = {{fontWeight: 'bold', fontSize: 10}}>{val.label}</Text>
                        </Pressable>
                        
                        
                        )}
                </View>
                </MotiView>


            </View>

        )
    }
    
    return(
        <AppIntroSlider
        bottomButton
        scrollEnabled = {true}
        renderItem={renderSlides}
        renderNextButton = {_renderNextButton}
        data = {slides}
        activeDotStyle = {{display: 'none'}}
        dotStyle = {{display: 'none'}}
        keyExtractor = {({key}) => key} />
    )
}