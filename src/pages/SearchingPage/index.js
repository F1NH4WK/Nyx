import { Image, Text, View, Dimensions } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./styles";



export default function SearchingPage(){

    const {width, height} = Dimensions.get('window');
    const nick = "O Azir"

    return(
        <View style = {styles.container}>
            <View style = {{width: '100%', height: '100%', padding: 20}}>

                <Image 
                style = {{...styles.displayChampion, 
                    zIndex: 2, 
                    opacity: 0.95,
                }}
                source = {require('../../../assets/EfeitoEscurecer.png')}
                />

                <Image 
                style = {styles.displayChampion}
                source={require('../../../assets/Azir_0.jpg')}
                resizeMode = {"cover"}
                />
                
                <View style = {styles.displayInfos}>
                    <View style = {styles.containerTexts}>
                        <View style = {{flexDirection: 'row', alignItems: 'center'}}>
                            <Text style = {{
                                ...styles.nickStyle, 
                                fontSize: 40 - nick.length * 0.7,
                                textAlign: 'left',
                                }}>{nick}</Text>
                            <Image 
                            style = {{width: '20%', height: '100%'}}
                            resizeMode = {'contain'}
                            source={require('../../../assets/mid.png')}/>
                        </View>

                        <View style = {{flexDirection: 'row', alignItems: 'center',}}>
                            <MaterialCommunityIcons name="clock" size={24} color="black" style = {{marginRight: 5}}/>
                            <Text>10: 00 - 10:30</Text>
                        </View>
                        <View style = {{flexDirection: 'row', alignItems: 'center',}}>
                            <MaterialCommunityIcons name="calendar" size={24} color="black" style = {{marginRight: 5}}/>
                            <Text>Sab - Dom</Text>
                        </View>
                    </View>

                    <View style = {styles.containerRank} >
                        <Image 
                        source={require('../../../assets/Emblem_Gold.png')}
                        style = {{width: '80%', height: '80%'}}
                        fadeDuration = {5}
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