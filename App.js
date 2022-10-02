import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, Button } from 'react-native';
import { MotiView, MotiImage } from 'moti';
import Lottie from 'lottie-react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions, Animated } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState, useRef } from 'react';


import requestLoL from './src/api/lolProfile';
import SearchinPage from './src/pages/SearchingPage';
import IntroSlider from './src/pages/IntroSlider';


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

    const Tab = createBottomTabNavigator();

    const animation = useRef(0);
    const searchAnimation = useRef(0);
    const homeAnimation = useRef(0);

    
    return (

      <NavigationContainer>
        <StatusBar style='auto'/>

        <Tab.Navigator initialRouteName = {'IntroSlider'} screenOptions = {{
          tabBarShowLabel: false,
          
          tabBarStyle: {
            backgroundColor: '#232323',
            paddingBottom: 15,
            borderTopWidth: 0,
          },
          style: {
            borderTopWidth: 0,
            backgroundColor: '#232323'
          },
        }}>
          
          <Tab.Screen name='Home' component={Splash}  
          listeners = {{
            tabPress: () => homeAnimation.current?.play()
          }}
          
          options={{
            tabBarIcon: ({size, focused}) => focused
            ?
            <View style = {{width: size +30, height: size+30, justifyContent: 'center', alignItems: 'center'}}>
              <Image 
              source={require('./assets/iconGradient.png')}
              style = {{width: size + 20, height: size + 20, borderRadius:60}}
              />
              <Lottie 
              ref = {homeAnimation}
              autoPlay = {false}
              loop = {false}
              duration = {500}
              style = {{width: size + 10 , height: size + 10, position: 'absolute'}}
              source={require('./assets/animations/home.json')}
              />
            </View>
            : 
            <Lottie 
            
            autoPlay = {false}
            loop = {false}
            style = {{width: size + 10 , height: size + 10, position: 'absolute'}}
            source={require('./assets/animations/home.json')}
            />
             
          }}/>

          <Tab.Screen name='Searching' component={SearchinPage} 
          listeners = {
            {tabPress: () => searchAnimation.current?.play(0, 120)}
          }
          options = {{

            header: () => 
              <View style = {{width: '100%', alignItems: 'center', paddingTop: 30, marginBottom: 10}}>
                <Image source={require('./assets/LogoHeader.png')}/>
              </View>,

            tabBarIcon: ({size, focused}) => focused
            ?
            <View style = {{width: size +30, height: size+30, justifyContent: 'center', alignItems: 'center'}}>
              <Image 
              source={require('./assets/iconGradient.png')}
              style = {{width: size + 20, height: size + 20, borderRadius:60}}
              />
               <Lottie 
              ref = {searchAnimation}
              autoPlay = {false}
              loop = {false}
              duration = {1000}
              style = {{width: size + 5 , height: size + 5, position: 'absolute'}}
              source={require('./assets/animations/search.json')}
              />

            </View>
            :
            <Lottie 
            ref = {animation}
            autoPlay = {false}
            loop = {false}
            duration = {500}
            style = {{width: size + 5 , height: size + 5, position: 'absolute'}}
            source={require('./assets/animations/search.json')}
            />
          }}/>


          <Tab.Screen name='IntroSlider' component={IntroSlider}  
          listeners = {{
            tabPress: () => {
              animation.current?.play(20, 55);
            }
          }} 
          options = {{
            tabBarIcon: ({size, focused}) => focused
            ? 
            
            <MotiView 
            style = {{width: size +30, height: size+30, justifyContent: 'center', alignItems: 'center'}}>

              <MotiImage 
              from = {{transform: [{scale: 0}], opacity: 0}}
              animate = {{transform: [{scale: 1}], opacity: 1}}
              source={require('./assets/iconGradient.png')}
              style = {{width: size + 20, height: size + 20, borderRadius:60}}
              />

              <Lottie 
              ref = {animation}
              autoPlay = {false}
              loop = {false}
              duration = {1500}
              style = {{width: size , height: size , position: 'absolute'}}
              source={require('./assets/animations/tabBar.json')}
              />
              </MotiView>
            : 
            <Lottie 
              autoPlay = {false}
              loop = {false}
              style = {{width: size , height: size }}
              source={require('./assets/animations/tabBar.json')}
              />
            // <FontAwesome name="user-o" size={size} color="black" />,
          }
        }
          />
        </Tab.Navigator>
      </NavigationContainer>

      
  );
}