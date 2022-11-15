import { Text, View, FlatList, Dimensions, Image, Animated, Pressable, StatusBar } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiImage } from 'moti';

// LOCAL IMPORTS
import styles from './styles'
import { getSummoner } from '../../firebase';
import { or } from 'react-native-reanimated';


// FIXED VALUES
const { width, height } = Dimensions.get('window')

const ITEM_SIZE = width * 0.72
const SPACER_ITEM_SIZE = ( width - ITEM_SIZE ) / 2
const BACKDROP_HEIGHT = height  * 0.85


const tempData = [

    {
    id: 1,
    text: 'O Azir',
    days: ['SUN', 'FRI', 'MON', 'SAT', 'WED'],
    timePlaying: '14:00 - 21:00',
    lanes: ['Top', 'Bot', 'Mid'],
    tier: 'Gold',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg'
    },

    {
    id: 2,
    text: 'M4jorzin',
    days: ['SAT', 'TUE', 'WED'],
    timePlaying: '10:00 - 20:00',
    lanes: ['Mid', 'Top'],
    tier: 'Diamond',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ryze_0.jpg'
    },

    {
    id: 3,
    text: 'M4jorzin',
    days: ['SAT', 'TUE', 'WED'],
    timePlaying: '10:00 - 20:00',
    lanes: ['Mid', 'Top'],
    tier: 'Diamond',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Aatrox_0.jpg'
    },

    {
    id: 4,
    text: 'GabrielBlack',
    days: ['SAT', 'TUE', 'WED', 'SUN'],
    timePlaying: '10:00 - 20:00',
    lanes: ['Mid', 'Top'],
    tier: 'Diamond',
    splash: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Anivia_0.jpg'
    },
]


function BackdropImage({ splash, opacity }){

    return(
        <Animated.View
        removeClippedSubviews = {false}
        style = {{ ...styles.backdropImage, opacity: opacity}}>
            <Image
            blurRadius={10}
            style = {{ width: width, height: BACKDROP_HEIGHT , resizeMode: 'cover' }}
            source = {{ uri: splash }}
            />
        </Animated.View>
    )
}

function Backdrop({ champions, scrollX }){

    return(
        <View style = {styles.backdropView}>
            <FlatList
            contentContainerStyle = {{width: width, height: BACKDROP_HEIGHT}}
            data = { champions }
            removeClippedSubviews = {false}
            keyExtractor = {({ index }) => index } 
            renderItem = {({ item, index }) => {

                if (!item.id){ return null}
                
                const opacity = scrollX.interpolate({
                    inputRange: [(index - 2) * ITEM_SIZE, (index - 1) * ITEM_SIZE],
                    outputRange: [0, 1],
                  })
                
                const splash = item.champions[0].championSplash
                const tier = item.rankInfo.rank
                
                return <BackdropImage opacity = { opacity } splash = { splash }/>


            }} />

            <LinearGradient 
            colors={['rgba(0, 0, 0, 0)', '#232323']}
            style = { styles.fadeGradient }
            />
        </View>
    )
}


export default function HomePage(){


    const [summoners, setSummoners] = useState([])
    async function getUsers(){
        const someProfiles = await getSummoner();
        return setSummoners(someProfiles)
    }

    useEffect(() => {
        const user = async() => {
            await getUsers()
        }
        user();
    }, [])
    

    // ANIMATION
    const scrollX = useRef(new Animated.Value(0)).current;
    // [space, ...data, space]


    function Spacer(){
        return(
            <View style = {{ width: SPACER_ITEM_SIZE }}/>
        )
    }

    function HighlightChampion({ item, animation, translateFrame, tier }){
        
        console.log(tier)
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
                <Animated.Image
                style = {{...styles.tierBackImage, opacity: animation, 
                    // transform: [{translateY: translateFrame}] 
                }}
                source = { frameTier } />

                <Animated.Image
                style = {styles.highlightChampion}
                source={{uri: item}}/>
            </View>
        )
    }

    function DaysPlaying({ weekPlay }){

        return(
            <View style = {styles.daysWrapperStyle}>
                { weekPlay.map((day, index) => {

                    return(
                        <View key = {index} style = {styles.daysStyle}>
                            <Text style = {{fontSize: 11, color: 'white', fontWeight: 'bold'}}>{day}</Text>
                        </View>
                    )
                })}
                
            </View>
        )
    }

    function TimePlaying({ time }){
        return(
            <View style = {styles.timePlayingWrapper}>
                <AntDesign name="clockcircleo" size={17} color="white" />
                <Text style = {styles.hoursText}>
                    {time.timeStart + ' - ' + time.timeEnd}
                </Text>
            </View>
        )
    }

    function SummonerLanes({lanes}){
        return(
            <View style = {{...styles.timePlayingWrapper, borderColor: '#C8AA6E', opacity: 0.9}}>
                { lanes.map((i, index) => {

                    let LaneRender = () => {
                    
                    switch(i){
                        case 'Support': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            source = {require('../../../assets/lanes/Support.png')}
                            />
                        )

                        case 'Bot': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            source = {require('../../../assets/lanes/Bot.png')}
                            />
                        )

                        case 'Jungle': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            source = {require('../../../assets/lanes/Jungle.png')}
                            />
                        )

                        case 'Top': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            source = {require('../../../assets/lanes/Top.png')}
                            />
                        )

                        case 'Mid': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
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

    const Loading = () => {

        return(
            <View style = {styles.modalStyle}>
                    <MotiImage 
                    from = {{opacity: 0}}
                    animate = {{opacity: 1}}
                    delay = {100}    
                    style = {styles.modalImage}
                    source={require('../../../assets/gifs/processing.gif')}/>
                </View>
        )
    }

    function RenderSummoner({ item, index }){

        const inputRange = [
             (index - 2) * ITEM_SIZE,
             (index - 1) * ITEM_SIZE,
             index * ITEM_SIZE, 
        ]

        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [30, -20, 30],
            extrapolate: 'clamp'
        })

        const translateOpacity = scrollX.interpolate({
            inputRange,
            outputRange: [0, 0.9, 0],
        })

        // const translateFrame = scrollX.interpolate({
        //     inputRange,
        //     outputRange: [-20, 0, 30]
        // })

        const splash = item.champions[0].championSplash
        const tier = item.rankInfo.rank
    
        return(
            <View style = {{width: ITEM_SIZE, marginTop: height * 0.15,}}>
                <Animated.View style = {{...styles.suggestedWrapper,
                transform: [{translateY: translateY}]}}>
                    
                    <HighlightChampion 
                    item = { splash }
                    animation = { translateOpacity }
                    tier = { tier }
                    // translateFrame = { translateFrame }
                    />
                    
                    <Animated.View
                    style = {{...styles.suggestedWrapper, opacity: translateOpacity}}>
                        <Text style = {styles.nickStyle}>
                            { item.nick }
                        </Text>
                        
                        <View style = {styles.laneAndTime}>
                            <TimePlaying time = { item.timePlaying }/>
                            <SummonerLanes lanes = { item.mainLane } tier = { item.rankInfo.rank }/>
                        </View>

                        <DaysPlaying weekPlay = {item.weekPlay}/>

                        <View style = {styles.likesStyle}>
                            <Pressable onPress={async() => {}}>
                                <Image
                                style = {styles.likesImageStyle}
                                source={require('../../../assets/LikeGradient.png')}/>
                            </Pressable>

                            <Pressable onPress = { async() => {
                                // const summoner = await getSummoner();
                                // console.log(summoner[1])
                            }}>
                                <Image
                                style = {styles.likesImageStyle}
                                source={require('../../../assets/DislikeGradient.png')}/>
                            </Pressable>
                        </View>
                    </Animated.View>
                </Animated.View>
        </View>
    )
}   

    const champions = [
        {
            key: 'left-spacer',
        },
        ...summoners,
        {
            key: 'right-spacer'
        }
]


    if (summoners.length != 0){
        return(
            <View style = {styles.container}>
                <StatusBar translucent/>
                <Ionicons name="close" size = {30} color = "white" style  = {styles.returnStyle} />
                <Backdrop champions = { champions } scrollX = { scrollX }/>
                
                <Animated.FlatList
                renderToHardwareTextureAndroid
                snapToInterval = { ITEM_SIZE }
                bounces = {false}
                decelerationRate = {0.8}
                keyExtractor = { item => item.id }
                horizontal
                contentContainerStyle = {{alignItems: 'center'}}
                scrollEventThrottle = {16}
                showsHorizontalScrollIndicator = {false}
                data = { champions }
                onScroll = { Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX }}}],
                    { useNativeDriver: true }
                )}
                renderItem = { ({ item, index }) => 
                item.id
                ? <RenderSummoner item = {item} index = {index} />
                : <Spacer/>
                }/>
            </View>
        )
    }
    else{
        return <Loading/>
    }
}