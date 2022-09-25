import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { MotiView, MotiImage } from 'moti';
import Lottie from 'lottie-react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, Animated } from 'react-native'; 
import { MaterialCommunityIcons, FontAwesome, Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';

import requestLoL from './src/api/lolProfile';
import SearchinPage from './src/pages/SearchingPage';


export default function App() {

  const {width, height} = Dimensions.get('window')
  const [infoProfile, setInfoProfile] = useState({})

    function Splash(){

      // useEffect(() => {
      //   requestLoL(setInfoProfile)
      //   console.log(infoProfile);
      // }, [])


      return(
        <View>
          <MotiView 
          style = {{backgroundColor: '#232323', width: '100%', height: '100%', alignItems: 'center'}}>
            <Text>Splash</Text> 
            <Button title = "LOL"></Button>  
          </MotiView>
        </View>

      )
    }

    function Teste(){
      return(
        <View/>
      )
    }


    const Tab = createBottomTabNavigator();
    return (
      <NavigationContainer>
        <StatusBar style='auto'/>
        <Tab.Navigator screenOptions = {{
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: '#232323',
            position: 'absolute',
            bottom: 20,
            height: 60,
            borderRadius: 10,
            marginHorizontal: width/6,
          }
        }}>
          <Tab.Screen name='Home' component={Splash} options={{
            tabBarIcon: ({size, focused}) => focused
            ?<MaterialCommunityIcons name="home-variant" size={size} color="black" />
            :<MaterialCommunityIcons name="home-variant-outline" size={24} color="black" />
          }}/>

          <Tab.Screen name='Searching' component={SearchinPage} options = {{
            tabBarIconStyle: {
              backgroundColor: 'red',
            },


            header: () => 
              <View style = {{width: '100%', alignItems: 'center', paddingTop: 30, marginBottom: 10}}>
                <Image source={require('./assets/LogoHeader.png')}/>
              </View>,

            tabBarIcon: ({size, focused}) => 
            <View style = {{position: 'absolute', width: size +30, height: size+30, justifyContent: 'center', alignItems: 'center'}}>
              <Image 
              source={require('./assets/iconGradient.png')}
              style = {{width: size + 30, height: size + 30, borderRadius:60, marginBottom: 50}}
              />
              <Ionicons name="search" size={24} color="black" style = {{position: 'absolute', top: -10}}/>
            </View>
          }}/>
          <Tab.Screen name='Profile' component={Teste} options = {{
            tabBarIcon: ({size, focused}) => focused
            ? <FontAwesome name="user" size={size} color="black" />
            : <FontAwesome name="user-o" size={size} color="black" />
          
            
          }}/>
        </Tab.Navigator>

        <View style = {{
          width: width-320,
          height: 2,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 77,
          left: width/6 + 19,
          borderRadius: 60
        }}/>
      </NavigationContainer>

      
  );
}