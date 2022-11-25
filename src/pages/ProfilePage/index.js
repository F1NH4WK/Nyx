import { View, Dimensions, Text, Modal, Pressable } from "react-native";
import { MotiImage, MotiText, MotiView } from 'moti'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState, useEffect } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";



// LOCAL IMPORTS
import styles from "./styles";

const { width, height } = Dimensions.get('window')

export default function ProfilePage({ navigation, route }){

    const currentSummoner = route.params.currentUserInfos
    const champions = currentSummoner.champions
    const lanes = currentSummoner.mainLane
    const email = route.params.email
    const time = currentSummoner.timePlaying
    const days = currentSummoner.weekPlay

    const [time1, setTime1] = useState(time.timeStart)
    const [time2, setTime2] = useState(time.timeEnd)
    const [isEditingTime, setIsEditingTime] = useState(false)
    const [isEditingDays, setIsEditingDays] = useState(false)
    const [saved, setSaved] = useState(false)

    const showTime = (option) => 
    DateTimePickerAndroid.open({
        value: option == 1? time1 : time2,
        mode: 'time',
        display: 'clock',
        minuteInterval: 15,
        positiveButtonLabel: 'Set',
        negativeButtonLabel: 'Nop',
        onChange: (event, date) => option == 1? setTime1(date) : setTime2(date),
    })


    useEffect(() => {
        setSaved(!saved)
    }, [isEditingDays || isEditingTime])

    return(
        <View style = {styles.container}>
            <MotiText style = {{position: 'absolute', top:20, right: 20, fontSize: 20, color: 'white'}}>Sign Out</MotiText>
            <View style = {styles.header}>
                <MotiImage
                style = {{width: width, height: height * 0.35}}
                resizeMode = 'cover'
                blurRadius = {10}
                source = {{uri: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg'}}
                 />
                <MotiImage
                style = {{width: 100, height: 100, borderColor: '#232323', borderWidth: 5, borderRadius: 100, position: 'absolute', alignSelf: 'center', zIndex: 2}}
                source = {{uri: 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/Azir.png'}}
                 />

                <MotiText style = {{position: 'absolute', bottom: -5, fontSize: 25, fontWeight: 'bold', zIndex: 2, alignSelf: 'center', color: 'white'}}>O Azir</MotiText>
                <LinearGradient 
                colors={['rgba(0, 0, 0, 0)', '#232323']}
                style = {{position: 'absolute', bottom: -40, width: width, height: height * 0.35}}
                />
            </View>

            <View style = {styles.accountInfos}>
                <MotiText style = {{fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 5, opacity: 0.9}}>Account</MotiText>
                <MotiView style = {styles.infosView}>
                    <View style = {{width: width * 0.22,  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>E-mail:</Text>
                    </View>
                    
                    <View style = {{width: width * 0.5, height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style = {{color: 'gray'}}>{email}</Text>
                    </View>

                    <View style = {{width: width * 0.15, height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name="email-lock" size={24} color="gray" />
                    </View>
                </MotiView>

                <MotiView style = {styles.infosView}>
                    <View style = {{width: width * 0.22,  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Champs:</Text>
                    </View>

                    <View style = {{width: width * 0.5, height: height * 0.08, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', opacity: 0.6}}>
                        { champions.map((champion, index) => 
                            <MotiImage
                            from = {{opacity: 0, translateY: -20}}
                            animate = {{opacity: 1, translateY: 0}}
                            delay = {100}
                            key= {index + '-championIcon'} 
                            style = {{width: 40, height: 40, borderRadius: 120, borderWidth: 2, borderColor: '#232323', alignSelf: 'center', marginRight: 10}}
                            source={{uri: champion.championIcon}}/>
                            )
                        }
                    </View>

                    <View style = {{width: width * 0.15, height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name="sword-cross" size={24} color="gray" />
                    </View>
                </MotiView>

                <MotiView style = {styles.infosView}>
                    <View style = {{width: width * 0.22,  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Lanes:</Text>
                    </View>
                    
                    <View style = {{width: width * 0.5, height: height * 0.08, alignItems: 'flex-start', justifyContent: 'flex-start', flexDirection: 'row', opacity: 0.6}}>
                        { lanes.map((i, index) => {

                        let LaneRender = () => {
                        
                        switch(i){
                            case 'Support': 
                            return(
                                <MotiImage
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Support.png')}
                                />
                            )

                            case 'Bot': 
                            return(
                                <MotiImage
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Bot.png')}
                                />
                            )

                            case 'Jungle': 
                            return(
                                <MotiImage
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Jungle.png')}
                                />
                            )

                            case 'Top': 
                            return(
                                <MotiImage
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Top.png')}
                                />
                            )

                            case 'Mid': 
                            return(
                                <MotiImage
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Mid.png')}
                                />   
                            )
                        }
                    }
                        return <LaneRender key = {index}/>
                
                        })}

                </View>

                    <View style = {{width: width * 0.15, height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name="routes" size={24} color="gray" />
                    </View>
                </MotiView>
            </View>
 
            <View style = {styles.accountInfos}>
                <MotiText style = {{fontSize: 28, fontWeight: 'bold', color: 'white', marginBottom: 5, textAlign: 'left'}}>Your frequency</MotiText>

                { !isEditingTime
                ?
                <MotiView style = {styles.infosView}>
                    <View style = {{width: width * 0.22,  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Time:</Text>
                    </View>
                    <View style = {{width: width * 0.5, height: height * 0.08, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                        <Text style = {{color: 'white', fontSize: 15}}>{time1}</Text>
                        <Text style = {{color: 'white', fontSize: 15}}> - </Text>
                        <Text style = {{color: 'white', fontSize: 15}}>{time2}</Text>
                    </View>

                    <View style = {{width: width * 0.15, height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name = "pencil" size = {24} color = "white" onPress={() => setIsEditingTime(true)}/>
                    </View>
                </MotiView>

                :

                <MotiView style = {styles.infosView}>
                    <View style = {{width: width * 0.22,  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Time:</Text>
                    </View>
                    <View style = {{width: width * 0.5, height: height * 0.08, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                        <Pressable onPress = {() => showTime(1)}>
                            <Text style = {{color: 'white', fontSize: 15, textDecorationLine: 'underline'}}>{time1}</Text>
                        </Pressable>
                        <Text style = {{color: 'white', fontSize: 15}}> - </Text>
                        <Pressable onPress = {() => showTime(2)}>
                            <Text style = {{color: 'white', fontSize: 15, textDecorationLine: 'underline'}}>{time2}</Text>
                        </Pressable>
                    </View>

                    <View style = {{width: width * 0.15, height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name = "pencil-off" size = {24} 
                        color = "white" onPress={() => setIsEditingTime(false)}/>
                    </View>
                </MotiView>

                }
                
                {!isEditingDays
                ?
                <MotiView style = {styles.infosView}>
                    <Pressable style = {{width: width * 0.22,  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Days:</Text>
                    </Pressable>

                    <View style = {{width: width * 0.5, height: height * 0.08, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                        <Text style = {{color: 'white', fontSize: 13, textAlign: 'left'}}>{days.join(', ')}</Text>
                    </View>

                    <View style = {{width: width * 0.15, height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name="pencil" size={24} color="white" onPress={() => {setIsEditingDays(true)}} />
                    </View>
                </MotiView>
                :
                <MotiView style = {styles.infosView}>
                    <Pressable style = {{width: width * 0.22,  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style = {{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Days:</Text>
                    </Pressable>

                    <View style = {{width: width * 0.5, height: height * 0.08, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row'}}>
                        <Text style = {{color: 'white', fontSize: 13, textAlign: 'left'}}>{days.join(', ')}</Text>
                    </View>

                    <View style = {{width: width * 0.15, height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name="pencil-off" size={24} color="white" onPress={() => {setIsEditingDays(false)}}/>
                    </View>
                </MotiView>
                }
            </View>

            {saved
            ?
            <Pressable style = {styles.nextButton} 
            onPress = {() => {}}>
                <MotiView
                from = {{translateY: 100, opacity: 0}}
                animate = {{translateY: 0, opacity: 1}}
                transition = {{type: 'timing'}}
                style = {styles.nextButton}> 
                    <Text style = {styles.textInside}>Save</Text>
                    <MotiImage
                    style = {styles.nextButtonImage}
                    source={require('../../../assets/iconGradient.png')}/>
                </MotiView>
            </Pressable>
            :
            <View/>
            }
        </View>
    )
}