import { Text, View, FlatList, Dimensions, Image } from 'react-native'
import { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';


// LOCAL IMPORTS
import styles from './styles'



// FIXED VALUES
const { width, height } = Dimensions.get('window')
const ITEM_SIZE = width * 0.72

const tempData = [{
    
    id: 1,
    text: 'O Azir',
    days: ['SUN', 'FRI'],
    timePlaying: '14:00 - 21:00',
    lanes: ['Support', 'Bot'],
    tier: 'Gold'
},
{
    id: 2,
    text: 'Suporte Drogado',
    days: ['SAT', 'TUE', 'WED'],
    timePlaying: '10:00 - 20:00',
    lanes: ['Mid', 'Top'],
    tier: 'Diamond'
}]

export default function HomePage(){


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
        
        const lanes = props.lanes
        const tier = props.tier

        return(
            <View style = {{...styles.timePlayingWrapper, borderColor: '#E1C156'}}>
                { lanes.map((i, index) => {
                    console.log('../../../assets/lanes/Position_Gold-' + i + '.png')
                    const teste = '../../../assets/lanes/Position_Gold-' + 'Support' + '.png'
                    const lane = require(teste)
                    return(
                        <Image
                        style = {styles.lanesStyle}
                        key = {index}
                        source = {lane}/>
                    )
                })}
            </View>
        )
    }

    const Loading = () => {
        return(
            <View/>
        )
    }

    function _renderItem({item}){
        return(
            <View style = {{width: ITEM_SIZE, borderColor: 'red', borderWidth: 2, borderRadius: 10}}>
                <View style = {styles.suggestedWrapper}>

                    <Image
                    style = {{width: width * 0.5, height: height * 0.5, borderRadius: 20, borderColor: '#282828', borderWidth: 5}}
                    source={{uri: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg'}}/>
                    <Text style = {styles.nickStyle}>
                        {item.text}
                    </Text>
                    <View style = {styles.laneAndTime}>
                        <TimePlaying time = {item.timePlaying}/>
                        <SummonerLanes lanes = {item.lanes} tier = {item.tier}/>
                    </View>

                </View>
            </View>
        )
    }

    return(
        <View style = {styles.container}>
            <FlatList
            keyExtractor={item => item.id}
            horizontal
            data = {tempData}
            renderItem = {_renderItem}/>
        </View>
    )
}