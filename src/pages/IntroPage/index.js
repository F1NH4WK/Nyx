import { useState} from "react";
import { View, Text, TextInput, Pressable, Image} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MotiView, MotiImage, MotiText } from "moti";
import Lottie from 'lottie-react-native';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

// LOCAL IMPORTS
import styles from "./styles";
import NextButton from "../../components/nextButton";


export function FirstPage({navigation}){
    return(

        <MotiView style = {styles.container}>
        
            <MotiImage 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{duration: 600, delay: 1000, type: 'timing'}}
            style = {styles.logoDisplay}
            source={require('../../../assets/OnlyNyxLogo.png')}/>

            <MotiText 
            from = {{opacity: 0, translateX: -100}}
            animate = {{opacity: 1, translateX: 0}}
            delay = {300}
            style = {styles.title}>Welcome to Nyx!</MotiText>

            <MotiText 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            delay = {300}
            style = {styles.descriptions}>Read the infos below, they will explain about the app.</MotiText>

            <MotiView 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            delay = {500}
            style = {styles.infosView}>
                <Image 
                style = {styles.iconsStyle}
                source = {require('../../../assets/questionGradient.png')} />
                <Text style = {styles.subQuestion}>What's Nyx?</Text>
            </MotiView>

            <MotiText 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            delay = {500}
            style = {styles.subDescription}>Nyx is an app made to find players that fits with your conditions.</MotiText>
            
            <MotiView 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            delay = {700}
            style = {styles.infosView}>
                <Image 
                style = {styles.iconsStyle}
                source = {require('../../../assets/InfoGradient.png')} />
                <Text style = {styles.subQuestion}>What infos should I pass?</Text>
            </MotiView>

            <MotiText 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            delay = {700}
            style = {styles.subDescription}>You only need to pass your League of Legends’ nickname and the frequency you play. Simple, right? You can change them whenever you want.</MotiText>

            <NextButton title = "LET'S START!" to = {() => navigation.push('NicknamePage')} done/>
        </MotiView>
    )
}

export function NicknamePage({navigation}){

    const [done, setDone] = useState(false)

    return(
        <View style = {styles.container}>
            <MotiView
            from = {{translateX: -50, opacity: 0.5}} 
            animate = {{translateX: 0, opacity: 1}}
            delay = {800}
            style = {styles.goBack} >
                <Entypo name="chevron-thin-left" size = {28} color="white" 
                onPress = {() => navigation.goBack()}/>
             </MotiView>
            
            <MotiText 
            from = {{opacity: 0, scale: 0.3}}
            animate = {{opacity: 1, scale: 1}}
            transition = {{delay: 300, type: 'spring'}}
            style = {styles.questionTitle}>My nickname is</MotiText>

            <MotiView
            style = {{width: '100%', height: '10%', marginBottom: 10}}
            from = {{opacity: 0}}
            animate = {{opacity: 1}}>
                <TextInput 
                style = {styles.textInput} placeholder="Nickname"
                onEndEditing = {() => setDone(true)}
                />

            </MotiView>

            <MotiText 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 800, duration: 1000}}
            style = {{...styles.descriptions, fontStyle: 'italic', textAlign: 'left', fontSize: 13}}>Example: O Azir {'\n'}
            This will be used to search your profile and catch infos about you. You will not be able to change it.</MotiText>

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

            <MotiView
            from = {{translateX: -50, opacity: 0.5}} 
            animate = {{translateX: 0, opacity: 1}}
            delay = {800}
            style = {styles.goBack} >
                <Entypo name="chevron-thin-left" size = {28} color="white" 
                onPress = {() => navigation.goBack()}/>
             </MotiView>

        <MotiText 
        from = {{opacity: 0, scale: 0.5}}
        animate = {{opacity: 1, scale: 1}}
        transition = {{delay: 500, type: 'spring'}}
        style = {styles.questionTitle}>Your gameplay frequency</MotiText>
        <MotiView 
        from = {{translateX: -200}}
        animate = {{translateX: 0}}
        delay = {200}
        style = {styles.infosView}>
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

        <MotiView 
        from = {{translateX: -300, opacity: 0}}
        animate = {{translateX: 0, opacity: 1}}
        delay = {300}
        style = {styles.infosView}>
            <MotiImage
            source={require('../../../assets/calendarGradient.png')}
            style = {styles.iconsStyle}/>
            <View style = {styles.weekdaysWrapper}>
                
            { days.map((val, index) => 
            val.selected 
               ? 
               <Pressable
                onPress={() => setWeekdays(index)}
                key={val.key}
                style = {styles.weekdaysStyle}>
                    <MotiImage 
                    from = {{scale: 1}}
                    animate = {{scale: 1.02}}
                    style = {styles.selectedStyle}
                    source = {require('../../../assets/iconGradient.png')} />
                    <Text style = {styles.userInfos}>{val.label}</Text>
                </Pressable>
                :
                    <Pressable
                    key={val.key}
                    onPress={() => setWeekdays(index)}
                    style = {styles.weekdaysStyle}>
                        <Text style = {styles.userInfos}>{val.label}</Text>
                    </Pressable>
                )}
            </View>
        </MotiView>
        <NextButton title = "Finish" done to = {() => signed()}/>
    </View>
    )
}