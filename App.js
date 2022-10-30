import { Text, View, Image, Dimensions, StatusBar } from 'react-native';
import { MotiView, MotiImage } from 'moti';
import Lottie from 'lottie-react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState, useRef } from 'react';

import SearchinPage from './src/pages/SearchingPage';
import { FirstPage, NicknamePage, FrequencyPage } from './src/pages/IntroPage';
import ProfilePage from './src/pages/ProfilePage';
import SignPage from './src/pages/SignPage';


export default function App() {

  const {width, height} = Dimensions.get('window')
  const [isSignedIn, setIsSignedIn] = useState(false)


  function Home(){
    return(
      <Text>Home</Text>
    )
  }
    const Tab = createBottomTabNavigator();
    const Stack = createNativeStackNavigator()

    const profileAnimation = useRef(0);
    const searchAnimation = useRef(0);
    const homeAnimation = useRef(0);

    
    return (
      <NavigationContainer >
        <StatusBar translucent/>

        {isSignedIn ?
        <Tab.Navigator initialRouteName = {'Home'}  screenOptions = {{
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
      <Tab.Screen name='Home' component={Home}  
          listeners = {{tabPress: () => homeAnimation.current?.play()}} 
          options={{
            tabBarIcon: ({size, focused}) => focused
            ?
            <View style = {{width: size + 30, height: size + 30, justifyContent: 'center', alignItems: 'center'}}>
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
          listeners = {{tabPress: () => searchAnimation.current?.play(0, 120)}}
          options = {{

            header: () => 
              <View style = {{width: '100%', alignItems: 'center', paddingTop: StatusBar.currentHeight * 1.2, marginBottom: height * 0.02}}>
                <Image
                style = {{width: '100%', height: height * 0.05}}
                resizeMode = {'contain'}
                source={require('./assets/LogoHeader.png')}/>
              </View>,

            tabBarIcon: ({size, focused}) => focused
            ?
            <View style = {{width: size + 30, height: size + 30, justifyContent: 'center', alignItems: 'center'}}>
              
              <MotiImage 
              from = {{scale: 0, opacity: 0}}
              animate = {{scale: 1, opacity: 1}}
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
            autoPlay = {false}
            loop = {false}
            duration = {500}
            style = {{width: size + 5 , height: size + 5, position: 'absolute'}}
            source={require('./assets/animations/search.json')}
            />
          }}/>


          <Tab.Screen name='ProfilePage' component={ProfilePage}  
          listeners = {{
            tabPress: () => profileAnimation.current?.play(20, 55)}} 
          options = {{
            tabBarIcon: ({size, focused}) => focused
            ? 
            
            <MotiView 
            style = {{width: size + 30, height: size+ 30, justifyContent: 'center', alignItems: 'center'}}>

              <MotiImage 
              from = {{scale: 0, opacity: 0}}
              animate = {{scale: 1, opacity: 1}}
              source={require('./assets/iconGradient.png')}
              style = {{width: size + 20, height: size + 20, borderRadius:60}}
              />

              <Lottie 
              ref = {profileAnimation}
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
          }
        }
          />
        </Tab.Navigator>

        :

        <Stack.Navigator screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
          <Stack.Screen name = 'SignPage' component =  {SignPage} />
          <Stack.Screen name = 'InfoPage' component =  {FirstPage} />
          <Stack.Screen name = 'NicknamePage' component = {NicknamePage}/>
          <Stack.Screen name = 'FrequencyPage' component = {FrequencyPage} initialParams = {{setSignIn: () => setIsSignedIn(true)}}/>
        </Stack.Navigator> 
        }
      </NavigationContainer>

      
  );
}