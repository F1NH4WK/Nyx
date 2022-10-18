import { Image, Text, View } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import styles from "./styles";

export default function SearchingPage(){

    const nick = "O Azir"

    return(
        <View style = {styles.container}>
            <View style = {styles.mainView}>

                <Image 
                style = {{...styles.displayChampion, zIndex: 2, opacity: 0.95}}
                source = {require('../../../assets/FadeEffect.png')}
                />

                <Image 
                style = {styles.displayChampion}
                source={{uri: 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Azir_0.jpg'}}
                resizeMode = {"cover"}
                />
                
                <View style = {styles.displayInfos}>
                    <View style = {styles.containerTexts}>
                        <View style = {styles.infoIcons}>
                            <Text style = {{
                                ...styles.nickStyle, 
                                fontSize: 40 - nick.length * 0.7,
                                textAlign: 'left',
                                }}>{nick}</Text>
                            <Image 
                            style = {styles.laneStyle}
                            resizeMode = {'contain'}
                            source={require('../../../assets/mid.png')}/>
                        </View>

                        <View style = {styles.infoIcons}>
                        <AntDesign name="clockcircleo" size={24} color="white" style = {styles.iconsSpacing}/>
                            <Text>10:00 - 10:30</Text>
                        </View>
                        <View style = {styles.infoIcons}>
                            <AntDesign name="calendar" size={24} color="white" style = {styles.iconsSpacing}/>
                            <Text>Sab - Dom</Text>
                        </View>
                    </View>

                    <View style = {styles.containerRank} >
                        <Image 
                        source={require('../../../assets/Emblem_Gold.png')}
                        style = {styles.rankStyle}
                        resizeMode = {'cover'}/>
                        <Text style = {{fontStyle: 'italic'}}>45 PDL</Text>
                    </View>
                </View>
                
            </View>

            <View style = {styles.displayLikes}>
                <Image 
                style = {styles.likeStyle}
                source={require('../../../assets/LikeGradient.png')}/>

                <Image 
                style = {styles.likeStyle}
                source={require('../../../assets/DislikeGradient.png')}/>
            </View>
        </View>
    )
}