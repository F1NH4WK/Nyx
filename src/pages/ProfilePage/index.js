import { View, Dimensions, Text, Modal, TouchableNativeFeedback, Image } from "react-native";
import { MotiImage, MotiText, MotiView } from 'moti'
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons, MaterialIcons, Entypo, AntDesign } from '@expo/vector-icons';
import { useState, useEffect, useRef } from "react";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

// LOCAL IMPORTS
import styles from "./styles";

const { width, height } = Dimensions.get('window')
 
// MAIN PROFILE
export function ProfilePage({ navigation, route }){

    const currentSummoner = route.params.currentUserInfos
    const champions = currentSummoner.champions
    const lanes = currentSummoner.mainLane
    const email = route.params.email
    const time = currentSummoner.timePlaying
    const days = currentSummoner.weekPlay
    const rank = currentSummoner.rankInfo
    const nick = currentSummoner.nick

    return(
        <View style = {styles.container}>
            <View style = {styles.header}>
                <MotiImage
                style = {{width: width, height: height * 0.25}}
                resizeMode = 'cover'
                blurRadius = {10}
                source = {{uri: 'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg'}}
                 />
                <MotiImage
                style = {{width: 80, height: 80, borderColor: '#232323', borderWidth: 5, borderRadius: 100, position: 'absolute', alignSelf: 'center', zIndex: 2}}
                source = {{uri: 'http://ddragon.leagueoflegends.com/cdn/12.18.1/img/champion/Azir.png'}}
                 />

                <MotiText style = {{position: 'absolute', bottom: -5, fontSize: 25, fontWeight: 'bold', zIndex: 2, alignSelf: 'center', color: 'white'}}>O Azir</MotiText>
                <LinearGradient 
                colors={['rgba(0, 0, 0, 0)', '#232323']}
                style = {{position: 'absolute', bottom: -20, width: width, height: height * 0.22}}
                />
            </View>

            <View style = {styles.accountInfos}>
    
                <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#505050')}
                onPress = {() => navigation.navigate('Account', {email, lanes, champions, rank})}
                >
                    <MotiView style = {styles.infosView}>
                        <View style = {{width: '20%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <MaterialIcons name="account-box" size={27} color="#959595" />
                        </View>
                        
                        <View style = {{width: '50%', height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style = {styles.subTopics}>Account</Text>
                        </View>

                        <View style = {{width: '40%', height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                            <Entypo name="chevron-right" size={23} color="white" />
                        </View>
                    </MotiView>
                </TouchableNativeFeedback>


                <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#505050')}
                onPress = {() => navigation.navigate('AboutYou', { time, days })}
                >
                    <MotiView style = {styles.infosView}>
                        <View style = {{width: '20%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="pencil" size={27} color="#959595" />
                        </View>
                        
                        <View style = {{width: '50%', height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style = {styles.subTopics}>About You</Text>
                        </View>

                        <View style = {{width: '40%', height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                            <Entypo name="chevron-right" size={23} color="white" />
                        </View>
                    </MotiView>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#505050')}
                onPress = {() => navigation.navigate('HowDisplayed', {champions, time, days, lanes, rank, nick})}
                >
                    <MotiView style = {styles.infosView}>
                        <View style = {{width: '20%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="account-eye" size={27} color="#959595" />
                        </View>
                        
                        <View style = {{width: '50%', height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style = {styles.subTopics}>Display</Text>
                        </View>

                        <View style = {{width: '40%', height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                            <Entypo name="chevron-right" size={23} color="white" />
                        </View>
                    </MotiView>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#505050')}>
                    <MotiView style = {styles.infosView}>
                        <View style = {{width: '20%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <MaterialIcons name="exit-to-app" size={27} color="red" style = {{opacity: 0.7}} />
                        </View>
                        
                        <View style = {{width: '50%', height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <Text style = {{...styles.subTopics, color: 'red', opacity: 0.7}}>Log out</Text>
                        </View>
                    </MotiView>
                </TouchableNativeFeedback>

                <View style = {styles.divider}/>
                <MotiText
                from = {{opacity: 0, translateX: -20}}
                animate = {{opacity: 0.7, translateX: 0}}
                transition = {{delay: 100, type: 'timing'}}  
                style = {styles.categoryText}>
                    App Settings
                </MotiText>

                <MotiView style = {styles.infosView}>
                    <View style = {{width: '20%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <MaterialCommunityIcons name="information" size={27} color="#959595" />
                    </View>
                    
                    <View style = {{width: '50%', height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                        <Text style = {styles.subTopics}>1.2.5</Text>
                    </View>

                </MotiView>
            </View>
        </View>
    )
}

export function Account({ route }){

    const email = route.params.email
    const lanes = route.params.lanes
    const champions = route.params.champions

    return(
        <View style = {styles.container}>
            <MotiText
            from = {{opacity: 0, translateX: -20}}
            animate = {{opacity: 0.7, translateX: 0}}
            transition = {{delay: 100, type: 'timing'}} 
            style = {styles.categoryText}>
                user
            </MotiText>

            <MotiView style = {styles.infosView}
                from = {{opacity: 0, translateX: -20}}
                animate = {{opacity: 1, translateX: 0}}
                transition = {{delay: 200, type: 'timing'}}
                >
                <View style = {{width: '20%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Text style = {styles.subTopics}>Email</Text>
                </View>
                        
                <View style = {{width: '80%', height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Text style = {{color: 'gray', fontSize: 15, alignSelf: 'flex-end'}}>{email}</Text>
                </View>
            </MotiView>

            <View style = {styles.divider}/>
            <MotiText
            from = {{opacity: 0, translateX: -20}}
            animate = {{opacity: 0.7, translateX: 0}}
            transition = {{delay: 300, type: 'timing'}}  
            style = {styles.categoryText}>
                League of Legends
            </MotiText>

            <MotiView 
            style = {styles.infosView}
            from = {{opacity: 0, translateX: -20}}
            animate = {{opacity: 1, translateX: 0}}
            transition = {{delay: 200, type: 'timing'}}
            >
                <View style = {{width: '30%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Text style = {styles.subTopics}>Lanes</Text>
                </View>
                        
                <View style = {{width: '70%', height: height * 0.08, alignItems: 'flex-start', justifyContent: 'flex-end', flexDirection: 'row'}}>
                    { lanes.map((i, index) => {

                        let LaneRender = () => {
                        
                        switch(i){
                            case 'Support': 
                            return(
                                <MotiImage
                                from = {{opacity: 0, translateY: -20}}
                                animate = {{opacity: 0.7, translateY: 0}}
                                delay = {100 + index * 200}
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Support.png')}
                                />
                            )

                            case 'Bot': 
                            return(
                                <MotiImage
                                from = {{opacity: 0, translateY: -20}}
                                animate = {{opacity: 0.7, translateY: 0}}
                                delay = {100 + index * 200}
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Bot.png')}
                                />
                            )

                            case 'Jungle': 
                            return(
                                <MotiImage
                                from = {{opacity: 0, translateY: -20}}
                                animate = {{opacity: 0.7, translateY: 0}}
                                delay = {100 + index * 200}
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Jungle.png')}
                                />
                            )

                            case 'Top': 
                            return(
                                <MotiImage
                                from = {{opacity: 0, translateY: -20}}
                                animate = {{opacity: 0.7, translateY: 0}}
                                delay = {100 + index * 200}
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Top.png')}
                                />
                            )

                            case 'Mid': 
                            return(
                                <MotiImage
                                from = {{opacity: 0, translateY: -20}}
                                animate = {{opacity: 0.7, translateY: 0}}
                                delay = {100 + index * 200}
                                style = {styles.lanesStyle}
                                source = {require('../../../assets/lanes/Mid.png')}
                                />   
                            )
                        }
                    }
                        return <LaneRender key = {index}/>
                
                        })}
                </View>
            </MotiView>

            <MotiView style = {styles.infosView}
                from = {{opacity: 0, translateX: -20}}
                animate = {{opacity: 1, translateX: 0}}
                transition = {{delay: 200, type: 'timing'}}
                >
                <View style = {{width: '30%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                    <Text style = {styles.subTopics}>Champs</Text>
                </View>
                        
                <View style = {{width: '70%', height: height * 0.08, alignItems: 'flex-start', justifyContent: 'flex-end', flexDirection: 'row'}}>
                    { champions.map((champion, index) => 
                            <MotiImage
                            from = {{opacity: 0, translateY: -20}}
                            animate = {{opacity: 0.7, translateY: 0}}
                            delay = {100 + index * 200}
                            key= {index + '-championIcon'} 
                            style = {{width: 40, height: 40, borderRadius: 120, borderWidth: 2, borderColor: '#232323', alignSelf: 'center', marginRight: 10}}
                            source={{uri: champion.championIcon}}/>
                            )
                        }
                </View>
            </MotiView>
        </View>
    )
}

export function AboutYou({ route }){

    const { time, days} = route.params

    return (
        <View style = {styles.container}>
            <MotiText
            from = {{opacity: 0, translateX: -20}}
            animate = {{opacity: 0.7, translateX: 0}}
            transition = {{delay: 100, type: 'timing'}} 
            style = {styles.categoryText}>
                your frequency
            </MotiText>

            <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#505050')}
                onPress = {() => alert('This function still in development!')}
                >
                    <MotiView
                    from = {{opacity: 0, translateX: -20}}
                    animate = {{opacity: 1, translateX: 0}}
                    transition = {{delay: 200, type: 'timing'}}
                    style = {styles.infosView}>
                        <View style = {{width: '20%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="clock" size={27} color="#959595" />
                        </View>
                        
                        <View style = {{width: '60%', height: height * 0.08, alignItems: 'flex-end', justifyContent: 'center'}}>
                            <Text style = {styles.disabledSubTopics}>{time.timeStart} - {time.timeEnd}</Text>
                        </View>

                        <View style = {{width: '20%', height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                            <Entypo name="chevron-right" size={23} color="gray" />
                        </View>
                    </MotiView>
                </TouchableNativeFeedback>

                <TouchableNativeFeedback
                background={TouchableNativeFeedback.Ripple('#505050')}
                onPress = {() => alert('This function still in development!')}
                >
                    <MotiView
                    from = {{opacity: 0, translateX: -20}}
                    animate = {{opacity: 1, translateX: 0}}
                    transition = {{delay: 300, type: 'timing'}} 
                    style = {styles.infosView}>
                        <View style = {{width: '20%',  height: height * 0.08, alignItems: 'flex-start', justifyContent: 'center'}}>
                            <MaterialCommunityIcons name="calendar" size={27} color="#959595" />
                        </View>
                        
                        <View style = {{width: '60%', height: height * 0.08, alignItems: 'flex-end', justifyContent: 'center'}}>
                            <Text style = {styles.disabledSubTopics}>{days.join(', ')}</Text>
                        </View>

                        <View style = {{width: '20%', height: height * 0.08, alignItems: 'center', justifyContent: 'center'}}>
                            <Entypo name="chevron-right" size={23} color="gray" />
                        </View>
                    </MotiView>
                </TouchableNativeFeedback>
        </View>
    )
}

export function HowDisplayed({ navigation, route }){

    const { lanes, time, champions, days, rank, nick} = route.params
    const mainChampion = champions[0].championSplash
    
    const ITEM_SIZE = width * 0.72
    const BACKDROP_HEIGHT = height  * 0.8

    function TimePlaying({ time }){

        const timeStart = time.timeStart;
        const timeEnd = time.timeEnd;
    
        return(
            <View style = {styles.timePlayingWrapper}>
                <AntDesign name="clockcircleo" size = { 17 } color="white" />
                
                <Text style = {styles.hoursText}>
                    { timeStart + ' - ' + timeEnd }
                </Text>
            </View>
        )
    }

    function HighlightChampion({ item, tier }){

        let frameTier = '';
        
        switch(tier){
            case 'IRON' || 'Unraked':
                frameTier = require('../../../assets/frames/ironFrame.png');
                break
            case 'BRONZE':
                frameTier = require('../../../assets/frames/bronzeFrame.png');
                break
            case 'SILVER':
                frameTier = require('../../../assets/frames/silverFrame.png');
                break
            case 'GOLD':
                frameTier = require('../../../assets/frames/goldFrame.png');
                break
            case 'PLATINUM':
                frameTier = require('../../../assets/frames/PlatinumFrame.png');
                break
            case 'DIAMOND':
                frameTier = require('../../../assets/frames/DiamondFrame.png');
                break
            case 'MASTER':
                frameTier = require('../../../assets/frames/MasterFrame.png');
                break
            case 'GRANDMASTER':
                frameTier = require('../../../assets/frames/GrandmasterFrame.png');
                break
            case 'CHALLENGER':
                frameTier = require('../../../assets/frames/ChallengerFrame.png');
                break
        }
    
        return(
            <View>
                {/* ARRUMAR PARA OS ELOS: bronze, prata e gold */}
                <Image
                style = {styles.tierBackImage}
                source = { frameTier } />
                <Image
                style = {styles.highlightChampion}
                source={{uri: item}}/>
            </View>
        )
    }

    function DaysPlaying({ weekPlay }){

        const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']
    
        return(
            <View style = {styles.daysWrapperStyle}>
                { days.map((day, index) => {
    
                    if (weekPlay.includes(day)){
                        return (
                        <View key = {index} style = {{...styles.daysStyle, backgroundColor: '#707070'}}>
                            <Text style = {{fontSize: 9, color: 'white', fontWeight: 'bold'}}>{day}</Text>
                        </View>
                        )
                    }
                    
                    return(
                        <View key = {index} style = {styles.daysStyle}>
                            <Text style = {{fontSize: 9, color: 'white'}}>{day}</Text>
                        </View>
                    )
                })}
                
            </View>
        )
    }
    
    function SummonerLanes({ lanes }){
        return(
            <View style = {{...styles.timePlayingWrapper, borderColor: '#C8AA6E'}}>
                { lanes.map((i, index) => {
    
                    let LaneRender = () => {
                    
                    switch(i){
                        case 'Support': 
                        return(
                            <Image
                            style = {styles.displayLanesStyle}
                            source = {require('../../../assets/lanes/Support.png')}
                            />
                        )
    
                        case 'Bot': 
                        return(
                            <Image
                            style = {styles.displayLanesStyle}
                            source = {require('../../../assets/lanes/Bot.png')}
                            />
                        )
    
                        case 'Jungle': 
                        return(
                            <Image
                            style = {styles.displayLanesStyle}
                            source = {require('../../../assets/lanes/Jungle.png')}
                            />
                        )
    
                        case 'Top': 
                        return(
                            <Image
                            style = {styles.displayLanesStyle}
                            source = {require('../../../assets/lanes/Top.png')}
                            />
                        )
    
                        case 'Mid': 
                        return(
                            <Image
                            style = {styles.displayLanesStyle}
                            source = {require('../../../assets/lanes/Mid.png')}
                            />   
                        )
                    }
                }
                    return(
                        <LaneRender key = {index}/>
                    )
                }
            )
        }
            </View>
        )
    }

    function Backdrop({ splash }){

        return(
            <View style = {styles.backdropView}>
                <BackdropImage splash = { splash }/>
                <LinearGradient 
                colors={['rgba(0, 0, 0, 0)', '#232323']}
                style = { styles.fadeGradient }
                />
            </View>
        )
    }

    function BackdropImage({ splash }){

        return(
            <View
            style = {styles.backdropImage}>
                <Image
                blurRadius={10}
                style = {{ width: width, height: BACKDROP_HEIGHT , resizeMode: 'cover' }}
                source = {{ uri: splash }}
                />
            </View>
        )
    }

    return(
        <MotiView
        from = {{opacity: 0.5, translateY: 20}}
        animate = {{opacity: 1, translateY: 0}} 
        transition = {{type: 'timing'}}
        style = {styles.container}>
            <MaterialCommunityIcons 
            name="close" size={30} color="white" 
            style = {{position: 'absolute', zIndex: 3, top: 40, left: 20}}
            onPress = {() => navigation.goBack()}
            />
            <Backdrop splash = { mainChampion }/>
            <View style = {{width: ITEM_SIZE, marginTop: height * 0.1}}>
                <View style = {styles.suggestedWrapper}>
                    
                    <HighlightChampion 
                    item = { mainChampion }
                    tier = { rank.rank }
                    />
                    
                    <View
                    style = {styles.suggestedWrapper}>
                        <Text style = {{...styles.nickStyle, 
                        fontSize: nick.length > 9
                        ? 23
                        : 30
                        }}>
                            { nick }
                        </Text>
                        
                        <View style = { styles.laneAndTime }>
                            <TimePlaying time = { time }/>
                            <SummonerLanes lanes = { lanes }/>
                        </View>

                        <DaysPlaying weekPlay = { days }/>
                    </View>
                </View>
            </View>
        </MotiView>
    )
}