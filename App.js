import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { MotiView, MotiImage } from 'moti';
import Lottie from 'lottie-react-native'
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 



export default function App() {

  const {width, height} = Dimensions.get('window')

    function Splash(){
      return(
        <View>
          <MotiView 
          style = {{backgroundColor: '#232323', width: '100%', height: '100%', alignItems: 'center'}}>
            <Text>Splas</Text>   
          </MotiView>
        </View>

      )
    }

    function Home(){
      return(
        <Text>HOMI</Text>
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
          <Tab.Screen name='Eduardo' component={Splash} options={{
            tabBarIcon: ({size, focused}) => focused
            ?<MaterialCommunityIcons name="home-variant" size={size} color="black" />
            :<MaterialCommunityIcons name="home-variant-outline" size={24} color="black" />
          }}/>

          <Tab.Screen name='Home' component={Home} options = {{
            tabBarIconStyle: {
              backgroundColor: 'red',
              
            },
            tabBarIcon: ({size, focused}) => 
            <View style = {{position: 'absolute', width: size +30, height: size+30, justifyContent: 'center', alignItems: 'center'}}>
              <Image 
              source={require('./assets/iconGradient.png')}
              style = {{width: size + 30, height: size + 30, borderRadius:60, marginBottom: 50}}
              />
              <Ionicons name="search" size={24} color="black" style = {{position: 'absolute', top: -10}}/>
            </View>
          }}/>
          <Tab.Screen name='Teste' component={Teste} options = {{
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
