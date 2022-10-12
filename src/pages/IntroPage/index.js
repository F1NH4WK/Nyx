import { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Button} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MotiView, MotiImage } from "moti";
import Lottie from 'lottie-react-native';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

// LOCAL IMPORTS
import styles from "./styles";
import NextButton from "../../components/nextButton";


export function FirstPage({navigation}){
    return(

        <MotiView 
        from = {{opacity: 0}}
        animate = {{opacity: 1}}
        transition = {{type: 'spring', delay: 500}}
        style = {styles.container}>
            
            <MotiImage 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            style = {styles.logoDisplay}
            source={require('../../../assets/OnlyNyxLogo.png')}/>
            <Text style = {styles.title}>Welcome to Nyx!</Text>
            <Text style = {styles.descriptions}>Read the infos below, they will explain about the app.</Text>

            <MotiView style = {styles.infosView}>
                <MotiImage 
                style = {styles.iconsStyle}
                source = {require('../../../assets/questionGradient.png')} />
                <Text style = {styles.subQuestion}>What's Nyx?</Text>
            </MotiView>
            <Text style = {styles.subDescription}>Nyx is an app made to find players that fits with your conditions.</Text>
            
            <MotiView style = {styles.infosView}>
                <MotiImage 
                style = {styles.iconsStyle}
                source = {require('../../../assets/InfoGradient.png')} />
                <Text style = {styles.subQuestion}>What infos should I pass?</Text>
            </MotiView>
            <Text style = {styles.subDescription}>You only need to pass your League of Legends’ nickname and the frequency you play. Simple, right? You can change them whenever you want.</Text>
            <NextButton title = "LET'S START!" to = {() => navigation.push('NicknamePage')} done/>
        </MotiView>
    )
}

export function NicknamePage({navigation}){

    const [done, setDone] = useState(false)

    return(
        <View style = {styles.container}>
            
            <Text style = {styles.questionTitle}>My nickname is</Text>
            <TextInput 
            style = {styles.textInput} placeholder="Nickname"
            onEndEditing = {() => setDone(true)}
            />

            <Text style = {{...styles.descriptions, fontStyle: 'italic', textAlign: 'left', fontSize: 13}}>Example: O Azir {'\n'}
            This will be used to search your profile and catch infos about you. You will not be able to change it.</Text>
            <Lottie
            source={require('../../../assets/animations/khazix.json')}
            style = {styles.animation}
            autoPlay
            autoSize
            loop/>

            <NextButton 
            title = "continue" 
            to = {() => navigation.push('FrequencyPage')}
            done = {done}/>
        </View>
    )
}

export function FrequencyPage({navigation, route}){

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
    
    const showTime = (option) => 
    DateTimePickerAndroid.open({
        value: option == 1? time1 : time2,
        mode: 'time',
        display: 'spinner',
        positiveButtonLabel: 'Set',
        minuteInterval: 15,
        onChange: (event, date) => option == 1? setTime1(date) : setTime2(date)
    })


    const  setIsSignedIn = route.params.setIsSignedIn
    const signed = () => navigation.setOptions({
        setSignIn: setIsSignedIn(true)
    }, [navigation])


    return(

        <View style = {styles.container}>
        <Text style = {styles.questionTitle}>Your gameplay frequency</Text>
        <MotiView style = {styles.infosView}>
            <MotiImage
            source={require('../../../assets/clockGradient.png')}
            style = {styles.iconsStyle} />
            <View style = {styles.hoursWrapper}>
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
            <View style = {styles.weekdaysWrapper}>
            {
            days.map((val, index) => 
            val.selected 
               ? 
               <Pressable
                onPress={() => setWeekdays(index)}
                key={val.key}
                style = {styles.weekdaysStyle}>
                    <MotiImage 
                    style = {styles.selectedStyle}
                    source = {require('../../../assets/iconGradient.png')} />
                    <Text style = {styles.userInfos}>{val.label}</Text>
                </Pressable>
                :
                <Pressable
                onPress={() => setWeekdays(index)}
                key={val.key}
                style = {{...styles.weekdaysStyle, backgroundColor: '#A7A7A7'}}>
                    <Text style = {styles.userInfos}>{val.label}</Text>
                </Pressable>
                )}
        </View>
        </MotiView>
        <NextButton title = "Finish" done to = {() => signed()}/>
    </View>
    )
}

function IntroSlider(){

    function _renderPrevButton(){
        return(
            <View style = {styles.container}>
                <Entypo name="chevron-thin-left" size = {24} color="black" 
                style = {{position: 'absolute', top: 50, left: 20}}/>
            </View>
        )
    }
}