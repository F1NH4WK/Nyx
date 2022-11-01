import { useEffect, useState} from "react";
import { View, Text, TextInput, Pressable, Image, Modal, Button} from "react-native";
import { Entypo } from '@expo/vector-icons';
import { MotiView, MotiImage, MotiText } from "moti";
import Lottie from 'lottie-react-native';
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

// LOCAL IMPORTS
import styles from "./styles";
import NextButton from "../../components/nextButton";
import requestLoL from "../../api/lolProfile";
import { pushData, getData } from "../../firebase";


export function FirstPage({navigation, route}){

    console.log(route.params.userData)

        const [currentUser, setCurrentUser] = useState(null)
        const [modal, setModal] = useState(false)
        currentUser == null
        ? null
        : navigation.navigate('NicknamePage', {currentUser})

        // const auth = getAuth(initializeApp(require('../../firebase/firebase.json')))
        // OAUTH SESSION --------------
        // const { client_id, android_client } = require('../../auth/googleAuth.json')
        // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({ 
        //     loginHint: 'youremail@gmail.com',
        //     scopes: encodeURI('profile email'),
        //     clientId: client_id,
        //     androidClientId: android_client 
        // });
        
        // useEffect(() => {
            
        //     if (response?.type === 'success'){
        //         const { id_token } = response.params;
        //         const credential = GoogleAuthProvider.credential(id_token)
        //         signInWithCredential(auth, credential)
        //     }
        // }, [response])

        // async function signIn(){
        //     await promptAsync({
        //         useProxy: false,
        //     })
        //     setCurrentUser({
        //         name: auth.currentUser.displayName,
        //         uid: auth.currentUser.uid,
        //         email: auth.currentUser.email,
        //         photo: auth.currentUser.photoURL
        //     })
        //     navigation.navigate('NicknamePage', { currentUser })
        // }

        // ----------

        // -------------- LOCAL SIGN UP -----------------
        
        console.log(route.params.userData)
    return(
 
        <MotiView style = {styles.container}>
            <MotiImage 
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{duration: 600, delay: 800, type: 'timing'}}
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

            <NextButton title = "LET'S START!" to = { () => 
            navigation.navigate('NicknamePage', {currentUser})}
            done/>
        </MotiView>
    )
}

export function NicknamePage({navigation, route}){

    const infoTemp = {
    champions: [{
        championName: undefined,
        championIcon: undefined
        },
        {
        championName: undefined,
        championIcon: undefined
        },
        {
        championName: undefined,
        championIcon: undefined
        }],
    
    rankInfo: {
        rank: undefined
    }
}
    const [nick, setNick] = useState('')
    const [done, setDone] = useState(false)
    const [info, setInfoProfile] = useState(infoTemp)
    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {setLoading(false)},[info])

    const searchNick = nick => requestLoL(nick)
    .then(data => setInfoProfile(data))

    const search = () => {searchNick(nick); setModal(true); setLoading(true)}

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
                placeholderTextColor={'white'}
                onChangeText={(text) => setNick(text)}
                onSubmitEditing = { async() => {
                    exists = await getData(nick)
                    await exists
                    ? alert("There's already an user signed with this account!")
                    : search()
                }}
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

            <Modal 
            animationType = "fade"
            visible = {modal}
            statusBarTranslucent
            transparent>
                <View style = {styles.modalStyle}>
                    {
                    loading
                    ?
                    <Lottie
                    source={require('../../../assets/animations/loading.json')}
                    style = {styles.animation}
                    autoPlay
                    autoSize
                    loop />
                    :
                    
                    info != null
                    ?
                    <View style = {{width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <MotiImage 
                        from = {{opacity: 0}}
                        animate = {{opacity: 1}}
                        delay = {100}
                        style = {styles.modalImage}
                        source={require('../../../assets/gifs/modalAsk.gif')} />

                        <MotiText
                        from = {{opacity: 0, translateY: -50}}
                        animate = {{opacity: 1, translateY: 0}}
                        transition = {{type: 'timing'}}
                        style = {styles.modalQuestions}>Is that your account?</MotiText>

                        <View style = {{ flexDirection: 'row', marginTop: 30}}>
                            <View style = {styles.modalCollumn}>
                                <MotiText
                                from = {{opacity: 0, translateX: -20}}
                                animate = {{opacity: 1, translateX: 0}} 
                                style = {styles.modalQuestions}>Nick:</MotiText>

                                <MotiText
                                from = {{opacity: 0, translateX: -20}}
                                animate = {{opacity: 1, translateX: 0}} 
                                style = {styles.modalQuestions}>Champs:</MotiText>

                                <MotiText 
                                from = {{opacity: 0, translateX: -20}}
                                animate = {{opacity: 1, translateX: 0}}
                                style = {styles.modalQuestions}>Rank: </MotiText>
                            </View>
                            <View style = {styles.modalCollumn}>
                                <MotiText
                                from = {{opacity: 0, translateY: -20}}
                                animate = {{opacity: 1, translateY: 0}} 
                                style = {styles.modalAnswer}>{nick}</MotiText>

                                <View style = {{flexDirection: 'row', width: '100%', marginBottom: 20, justifyContent: 'space-around'}}>
                                {
                                info.champions.map((champion, index) => 
                                    <MotiImage
                                    from = {{opacity: 0, translateY: -20}}
                                    animate = {{opacity: 1, translateY: 0}}
                                    delay = {100}
                                    key= {index} 
                                    style = {{width: 40, height: 40, borderRadius: 200}}
                                    source={{uri: champion.championIcon}}/>
                                    )}
                                </View>

                                <MotiText
                                from = {{opacity: 0, translateY: -20}}
                                animate = {{opacity: 1, translateY: 0}} 
                                style = {styles.modalAnswer}>{ info.rankInfo.rank }
                                </MotiText>
                            </View>
                        </View>
                    
                        <View style = {{width: '85%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 60}}>
                            <Pressable 
                            onPress={() => {setModal(false); setDone(true)}}
                            style = {styles.pressableYesNo}>
                                <MotiImage
                                from = {{scale: 0}}
                                animate = {{scale: 1}} 
                                style = {styles.modalYesNo}
                                source={require('../../../assets/modalYes.png')} />
                            </Pressable>

                            <Pressable 
                            onPress={() => {
                                setModal(false); 
                                setInfoProfile(infoTemp)
                                }}
                            style = {styles.pressableYesNo}>
                                <MotiImage 
                                from = {{scale: 0}}
                                animate = {{scale: 1}}
                                style = {styles.modalYesNo}
                                source={require('../../../assets/modalNo.png')} />
                            </Pressable>
                        </View>
                </View>
                :
                <View>
                    <Text>Doesn't exist.</Text>
                    <Button
                    onPress={() => setModal(false)} 
                    title="Return"/>
                </View>
                
                }
                </View>
            </Modal>

            <NextButton 
            title = "continue" 
            to = {() => navigation.push('FrequencyPage', {infos: info, nick: nick, user: route.params.currentUser})}
            done = {done == true && info != infoTemp}/>
        </View>
    )
}

export function FrequencyPage({navigation, route}){

    const daysTemp = [
        {key: 0, label: 'SUN', value: 'Sunday', selected: false},
        {key: 1, label: 'MON', value: 'Monday', selected: false},
        {key: 2, label: 'TUE', value: 'Tuesday', selected: false},
        {key: 3, label: 'WED', value: 'Wednesday', selected: false},
        {key: 4, label: 'THU', value: 'Thursday', selected: false},
        {key: 5, label: 'FRI', value: 'Friday', selected: false},
        {key: 6, label: 'SAT', value: 'Saturday', selected: false}
    ]

    const lanesTemp = [
        {key: 0, value: require('../../../assets/lanes/Position_Diamond-Mid.png'), label: 'Mid', selected: false},
        {key: 1, value: require('../../../assets/lanes/Position_Diamond-Top.png'), label: 'Top', selected: false},
        {key: 2, value: require('../../../assets/lanes/Position_Diamond-Jungle.png'), label: 'Jungle', selected: false},
        {key: 3, value: require('../../../assets/lanes/Position_Diamond-Bot.png'), label: 'ADC', selected: false},
        {key: 4, value: require('../../../assets/lanes/Position_Diamond-Support.png'), label: 'Support', selected: false}
    ]

    const [time1, setTime1] = useState(new Date())
    const [time2, setTime2] = useState(new Date())
    const [days, setDays] = useState(daysTemp)
    const [lanes, setLanes] = useState(lanesTemp)
    const [modal, setModal] = useState(false)

    function setWeekdays(id){
        setDays(days.filter((i, index) => {
        index == id
        ? days[index].selected = !i.selected
        : days[index].selected = i.selected
        return days[index]
        }))
    }

    function defineLanes(id){
        setLanes(lanes.filter((i, index) => {
            index == id
            ? lanes[index].selected = !i.selected
            : lanes[index].selected = i.selected
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

    const infos = route.params.infos
    const setIsSignedIn = route.params.setSignIn
    const nick = route.params.nick
    const user = route.params.user

    function getData(){
        const data = {
            user,
            nick,
            ...infos,
            timePlaying: {timeStart: time1, timeEnd: time2},
            weekPlay: daysPlaying,
            mainLane: mainLanes
        }
        return data
    }

    async function finish(){
        setModal(true)
        await pushData(getData())
        alert("You're all done, thanks for supporting the Nyx Alpha!")
        setModal(false)
        // setIsSignedIn();
    }

    let daysPlaying = []
    days.forEach(i => 
        i.selected
        ? daysPlaying.push(i.label)
        : null
    )

    let mainLanes = []
    lanes.forEach(i =>
        i.selected
        ? mainLanes.push(i.label)
        : null
    )


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
        style = {styles.questionTitle}>About You</MotiText>

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

        <MotiView style = {{...styles.infosView, justifyContent: 'center'}}>
            { lanes.map((val, index) => 
            val.selected
            ?
            <Pressable key = {val.key} onPress = {() => defineLanes(index)}>
                <MotiImage
                from = {{scale: 1, opacity: 0.3}}
                animate = {{scale: 1.1, opacity: 1}}
                style = {styles.iconsStyle} 
                source = {val.value}/>
            </Pressable>
            :
            <Pressable key = {val.key} onPress = {() => defineLanes(index)}>
                <Image
                style = {{...styles.iconsStyle, opacity: 0.3}}
                source = {val.value} />
            </Pressable>
            )}
        </MotiView>

        <NextButton title = "Finish" 
        done = {lanes != lanesTemp && days != daysTemp} to = {() => finish()}/>

            <Modal 
            animationType = "fade"
            visible = {modal}
            statusBarTranslucent
            transparent>
                <View style = {styles.modalStyle}>
                    <MotiImage 
                    from = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    delay = {100}    
                    style = {styles.modalImage}
                    source={require('../../../assets/gifs/processing.gif')}/>
                </View>
            </Modal>
    </View>
    )
}