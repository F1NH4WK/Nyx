import { Text, View, FlatList, Dimensions, Image, Animated, Pressable, StatusBar } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import MaskedView from '@react-native-masked-view/masked-view';
import Svg, { Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';
import { MotiView } from 'moti';

// LOCAL IMPORTS
import styles from './styles'
import { getSummoner } from '../../firebase';
import Loading from '../../components/loading';

// FIXED VALUES
const { width, height } = Dimensions.get('window')
const ITEM_SIZE = width * 0.72
const SPACER_ITEM_SIZE = ( width - ITEM_SIZE ) / 2
const BACKDROP_HEIGHT = height  * 0.9;


const getItemLayout = (data, index) => (
    { length: ITEM_SIZE, offset: ITEM_SIZE * index, index}
  );

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
                
                return <BackdropImage opacity = { opacity } splash = { splash }/>

            }} />

            <LinearGradient 
            colors={['rgba(0, 0, 0, 0)', '#232323']}
            style = { styles.fadeGradient }
            />
        </View>
    )
}

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

function HighlightChampion({ item, animation,tier }){

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

function Spacer(){
    return(
        <View style = {{ width: SPACER_ITEM_SIZE }}/>
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


export default function SearchingPage({ navigation }){

    // SUMMONERS TO BE DISPLAYED
    const [summoners, setSummoners] = useState([])
    let currentIndex = 0

    // ---------ANIMATION----------
    
    const likePress = useRef(new Animated.Value(1)).current
    const dislikePress = useRef(new Animated.Value(1)).current
    const now = useRef()
    const scrollX = useRef(new Animated.Value(0)).current;

    const pressAnimation = (pressIn, target) => {
        pressIn
        // pressIn
        ? Animated.timing(target, {
            toValue: 0.93,
            duration: 200,
            useNativeDriver: true,
        }).start()

        // pressOut
        : Animated.timing(target, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true
        }).start()
    }   

    function userPress(){
        currentIndex = currentIndex + 1
        now.current?.scrollToIndex({
            index: currentIndex,
            animated: true,
        })
    }

    // ---------------------------------------

    async function getAllSummoners(){
        let allSummoners = await getSummoner();
        let summonersShuffled = allSummoners
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        if (summoners.length > 0){
        
        }
        setSummoners([{ key: 'left-spacer' }, ...summonersShuffled, { key: 'right-spacer' }])
        
        return currentIndex = 0
    }

    useEffect(() => {
            try{
                getAllSummoners()
            }
            catch(e){
                console.log(e)
                alert('Something went wrong: ' + e )
                setSummoners([])
            }
    }, [])


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
                    />
                    
                    <Animated.View
                    style = {{...styles.suggestedWrapper, opacity: translateOpacity}}>
                        <Text style = {{...styles.nickStyle, 
                        fontSize: item.nick.length > 9
                        ? 23
                        : 30
                        }}>
                            { item.nick }
                        </Text>
                        
                        <View style = { styles.laneAndTime }>
                            <TimePlaying time = { item.timePlaying }/>
                            <SummonerLanes lanes = { item.mainLane } tier = { item.rankInfo.rank }/>
                        </View>
    
                        <DaysPlaying weekPlay = { item.weekPlay }/>
    
                        <View style = {styles.likesStyle}>
                            <Pressable 
                            onPressIn = { () => pressAnimation(true, likePress)}
                            onPressOut = { () => { 
                                pressAnimation(false, likePress)
                                userPress()
                             }}  
                            >                            
                                <Animated.Image
                                style = {{...styles.likesImageStyle, transform: [{ scale: likePress}]}}
                                source = {require('../../../assets/LikeGradient.png')}/>
                            </Pressable>
    
                            <Pressable 
                            onPressIn = { () => pressAnimation(true, dislikePress)}
                            onPressOut = { () => {
                                pressAnimation(false, dislikePress )
                                userPress()
                            }}
                            >
                                <Animated.Image
                                style = {{...styles.likesImageStyle, transform: [{ scale: dislikePress }]}}
                                source={require('../../../assets/DislikeGradient.png')}/>
                            </Pressable>
                        </View>
                    </Animated.View>
                </Animated.View>
        </View>
        )
    }

    if (summoners.length != 0){
        return(
            <MotiView
            from = {{opacity: 0}}
            animate = {{opacity: 1}}
            transition = {{delay: 300}}
            style = { styles.container }>
                <StatusBar translucent/>
                <Ionicons
                name = "close" size = { 30 } color = "white" 
                style  = { styles.returnStyle }
                onPress = {() => navigation.navigate('ProfilePage')} />

                <Backdrop champions = { summoners } scrollX = { scrollX }/>
                
                <Animated.FlatList
                renderToHardwareTextureAndroid
                snapToInterval = { ITEM_SIZE }
                bounces = { false }
                initialNumToRender = { 3 }
                decelerationRate = { 0 }
                maxToRenderPerBatch = { 5 }
                windowSize = { 5 }
                keyExtractor = { (item, index) => item.id + '-' + index }
                horizontal
                ref = { now }
                getItemLayout = { getItemLayout }
                initialScrollIndex = { currentIndex }
                scrollEnabled = { false }
                contentContainerStyle = {{ alignItems: 'center' }}
                scrollEventThrottle = { 16 }
                showsHorizontalScrollIndicator = { false }
                data = { summoners }
                onEndReached = { async() => await getAllSummoners() }
                onEndReachedThreshold = { 1 }
                onScroll = { Animated.event(
                    [{ nativeEvent: { contentOffset: { x: scrollX }}}],
                    { useNativeDriver: true }
                )}
                renderItem = { ({ item, index }) => 
                item.id
                ? <RenderSummoner item = { item } index = { index }/>
                : <Spacer/>
                }/>
            </MotiView>
        )
    }
    else{
        return <Loading/>
    }
}