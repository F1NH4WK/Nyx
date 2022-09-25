import { Image, Text, View } from "react-native";
import styles from "./styles";

export default function SearchingPage(){

    return(
        <View style = {styles.container}>
            <View style = {{width: '100%', height: '100%', padding: 20}}>
                <Image 
                style = {{...styles.displayChampion, zIndex: 2, opacity: 0.8}}
                source = {require('../../../assets/EfeitoEscurecer.png')}
                />
                <Image 
                style = {styles.displayChampion}
                source={require('../../../assets/Azir_0.jpg')}
                resizeMode = {"cover"}
                />
                <View style = {styles.displayInfos}>
                    <View style = {styles.containerTexts}>
                        <View style = {{flexDirection: 'row', alignItems: 'center', width: '100%'}}>
                            <Text style = {styles.nickStyle}>O Azir</Text>
                            <Image source={require('../../../assets/rank.png')}/>
                        </View>
                        <View style = {{flexDirection: 'row', alignItems: 'center',}}>
                            <Image 
                            style = {{marginRight: 10}}
                            source={require('../../../assets/clock.png')}/>
                            <Text>10: 00 - 10:30</Text>
                        </View>
                        <View style = {{flexDirection: 'row', alignItems: 'center',}}>
                            <Image source={require('../../../assets/Days.png')}
                            style = {{marginRight: 10}}/>
                            <Text>Sab - Dom</Text>
                        </View>
                    </View>
                    <View style = {styles.containerRank}>
                        <Image 
                        source={require('../../../assets/Elo.png')}/>
                        <Text>45 PDL</Text>
                    </View>

                </View>
            </View>
        </View>
    )
}