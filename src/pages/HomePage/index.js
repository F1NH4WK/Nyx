import { Text, View, FlatList, Dimensions, Image, Animated, Pressable } from 'react-native'
import { useEffect, useRef, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';


// LOCAL IMPORTS
import styles from './styles'
import { getSummoner } from '../../firebase';


// FIXED VALUES
const { width, height } = Dimensions.get('window')
const ITEM_SIZE = width * 0.72
const SPACER_ITEM_SIZE = ( width - ITEM_SIZE ) / 2

const tempData = [
    {
        key: 'left-spacer'
    },

    {
    id: 1,
    text: 'O Azir',
    days: ['SUN', 'FRI', 'MON', 'SAT', 'WED'],
    timePlaying: '14:00 - 21:00',
    lanes: ['Top', 'Bot', 'Mid'],
    tier: 'Gold'
},
{
    id: 2,
    text: 'M4jorzin',
    days: ['SAT', 'TUE', 'WED'],
    timePlaying: '10:00 - 20:00',
    lanes: ['Mid', 'Top'],
    tier: 'Diamond'
},
{
    id: 3,
    text: 'M4jorzin',
    days: ['SAT', 'TUE', 'WED'],
    timePlaying: '10:00 - 20:00',
    lanes: ['Mid', 'Top'],
    tier: 'Diamond'
},

{
    key: 'right-spacer'
}
]

export default function HomePage(){

    // ANIMATION
    const scrollX = useRef(new Animated.Value(0)).current
    // [space, ...data, space]


    function Spacer(){
        return(
            <View style = {{width: SPACER_ITEM_SIZE}}/>
        )
    }

    function DaysPlaying(props){

        const days = props.days

        return(
            <View style = {styles.daysWrapperStyle}>
                { days.map((day, index) => {

                    return(
                        <View key = {index} style = {styles.daysStyle}>
                            <Text style = {{fontSize: 11}}>{day}</Text>
                        </View>
                    )
                })}
                
            </View>
        )
    }

    function TimePlaying(props){
        return(
            <View style = {styles.timePlayingWrapper}>
                <AntDesign name="clockcircleo" size={17} color="white" />
                <Text style = {{fontSize: 11, fontWeight: 'bold'}}>
                    {props.time}
                </Text>
            </View>
        )
    }

    function SummonerLanes(props){
        console.log(props.lanes)
        
        const lanes = props.lanes
        const tier = props.tier

        return(
            <View style = {{...styles.timePlayingWrapper, borderColor: '#E1C156'}}>
                { lanes.map((i, index) => {

                    let LaneRender = () => {
                    
                    switch(i){
                        case 'Support': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            key = {index}
                            source = {require('../../../assets/lanes/Position_Gold-Support.png')}
                            />
                        )

                        case 'Bot': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            key = {index}
                            source = {require('../../../assets/lanes/Position_Gold-Bot.png')}
                            />
                        )

                        case 'Jungle': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            key = {index}
                            source = {require('../../../assets/lanes/Position_Gold-Jungle.png')}
                            />
                        )

                        case 'Top': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            key = {index}
                            source = {require('../../../assets/lanes/Position_Gold-Top.png')}
                            />
                        )

                        case 'Mid': 
                        return(
                            <Image
                            style = {styles.lanesStyle}
                            key = {index}
                            source = {require('../../../assets/lanes/Position_Gold-Mid.png')}
                            />   
                        )
                    }
                }
                    return(
                        <LaneRender/>
                    )
                }
            )
        }
            </View>
        )
    }

    const Loading = () => {
        return(
            <View/>
        )
    }

    function RenderSummoner(props){
        const item = props.item
        const index = props.index


        const inputRange = [
             (index - 2) * ITEM_SIZE,
             (index - 1) * ITEM_SIZE,
             index * ITEM_SIZE, 
        ]

        const translateY = scrollX.interpolate({
            inputRange,
            outputRange: [50, -20, 50] 
        })


        return(
            <View style = {{width: ITEM_SIZE, marginTop: height * 0.15,}}>
                <Animated.View style = {{...styles.suggestedWrapper,
                transform: [{translateY: translateY}]}}>

                    <Image
                    style = {{width: width * 0.58, height: height * 0.5, borderRadius: 20, borderColor: '#282828', borderWidth: 5, marginBottom: height * 0.01}}
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg'}}/>
                    <Text style = {styles.nickStyle}>
                        {item.text}
                    </Text>
                    
                    <View style = {styles.laneAndTime}>
                        <TimePlaying time = {item.timePlaying}/>
                        <SummonerLanes lanes = {item.lanes} tier = {item.tier}/>
                    </View>

                    <DaysPlaying days = {item.days}/>

                    <View style = {styles.likesStyle}>
                        <Pressable onPress={async() => await getSummoner()}>
                            <Image
                            style = {styles.likesImageStyle}
                            source={require('../../../assets/LikeGradient.png')}/>
                        </Pressable>

                        <Pressable onPress={async() => await getSummoner()}>
                            <Image
                            style = {styles.likesImageStyle}
                            source={require('../../../assets/DislikeGradient.png')}/>
                        </Pressable>
                    </View>
                </Animated.View>
        </View>
    )
}   

    return(
        
        <View style = {styles.container}>

            <Animated.FlatList
            snapToInterval = {ITEM_SIZE}
            bounces = {false}
            decelerationRate = {0}
            keyExtractor={item => item.id}
            horizontal
            contentContainerStyle = {{alignItems: 'center'}}
            scrollEventThrottle={16}
            showsHorizontalScrollIndicator = {false}
            data = {tempData}
            onScroll = {Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX }}}],
                { useNativeDriver: true }
            )}
            // contentContainerStyle = {{alignItems: 'center'}}
            renderItem = { ({item, index}) => {
                if (item.id != undefined){
                    return <RenderSummoner item = {item} index = {index} />
                } 
                else{
                    return(
                        <Spacer/>
                    )
                }
                
            }
            }/>
        </View>
    )
}