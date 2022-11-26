import { Text, View, Image, Dimensions, StatusBar } from 'react-native';
import { MotiView, MotiImage } from 'moti';
import Lottie from 'lottie-react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useState, useRef } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import SearchingPage from './src/pages/SearchingPage';
import { FirstPage, NicknamePage, FrequencyPage } from './src/pages/IntroPage';
import { ProfilePage, Account, AboutYou, HowDisplayed } from './src/pages/ProfilePage';
import SignPage from './src/pages/SignPage';
import HomePage from './src/pages/HomePage';

// CONSTS
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()


export default function App() {

  const userTemp = {
    user: undefined,
    email: undefined
  }

    const { width, height } = Dimensions.get('window')
    const [currentUser, setCurrentUser] = useState(userTemp)

    const profileAnimation = useRef(0);
    const searchAnimation = useRef(0);
    const homeAnimation = useRef(0);

    
  // NESTED NAVIGATORS
  function Profile(){
    return(
        <Stack.Navigator>

          <Stack.Screen
          name = 'Profile'
          component = { ProfilePage }
          options = {{headerShown: false, animation: 'slide_from_right'}}
          initialParams = { currentUser }
          />

          <Stack.Screen
          name = 'Account'
          component = { Account }
          options = {{
          animation: 'fade_from_bottom', 
          headerStyle: {backgroundColor: '#181818'},
          headerTintColor: 'white',
          headerTitleStyle: {fontWeight: 'bold'},
          }}
          />

          <Stack.Screen
          name = 'AboutYou'
          component = { AboutYou }
          options = {{
          title: 'About You',
          animation: 'fade_from_bottom', 
          headerStyle: {backgroundColor: '#181818'},
          headerTintColor: 'white'}}
          />

          <Stack.Screen
          name = 'HowDisplayed'
          component = { HowDisplayed }
          options = {{
          title: 'Display', 
          animation: 'fade_from_bottom', 
          headerStyle: {backgroundColor: '#181818'},
          headerTintColor: 'white',
          headerShown: false,
          headerTitleStyle: {fontWeight: 'bold'},
          }}
          />
        </Stack.Navigator>
    )
  }
  


    return (
      <NavigationContainer >
        <StatusBar translucent/>

        { currentUser != userTemp
          ?
          <Tab.Navigator 
          initialRouteName = {'Home'}  
          screenOptions = {{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: '#232323',
              paddingBottom: 5,
              borderTopWidth: 0,
              height: 55,
              alignItems: 'center',
              justifyContent: 'center'
            },
            headerShown: false,
          }}>

        <Tab.Screen 
        name='Home'
        initialParams = { currentUser } 
        component = { HomePage }  
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
                  style = {{width: size + 15 , height: size + 15, position: 'absolute'}}
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
            
            <Tab.Screen name='Searching' component = { SearchingPage } 
            listeners = {{tabPress: () => searchAnimation.current?.play(0, 120)}}
            options = {{
              tabBarStyle: {display: 'none'},

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

            <Tab.Screen 
            name = 'ProfilePage' 
            component = { Profile }  
            listeners = {{ tabPress: () => profileAnimation.current?.play(20, 55) }} 
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
                style = {{width: size + 5 , height: size + 5 , position: 'absolute'}}
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
          <Stack.Screen name = 'SignPage' component =  { SignPage } initialParams = {{setCurrentUser}}/>
          <Stack.Screen name = 'InfoPage' component =  { FirstPage } />
          <Stack.Screen name = 'NicknamePage' component = { NicknamePage }/>
          <Stack.Screen name = 'FrequencyPage' component = { FrequencyPage } initialParams = {{setCurrentUser}}/>
        </Stack.Navigator> 
        }
      </NavigationContainer>

      
  );
}