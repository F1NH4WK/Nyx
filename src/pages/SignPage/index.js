import { MotiView, MotiImage, MotiText } from "moti";
import { useEffect, useState } from "react";
import { Text, TextInput, View, Pressable, Image, ScrollView } from "react-native";
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { getAuth, 
    createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    GoogleAuthProvider, 
    signInWithCredential } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import * as Google from 'expo-auth-session/providers/google'
import Lottie from 'lottie-react-native';

// LOCAL IMPORTS
import styles from "./styles";
import { isEmailAuthenticated, addNewUser, getDataByEmail } from "../../firebase";

export default function SignPage({ navigation, route }){
    const signUser = route.params.setCurrentUser

    // STATES
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [viewPassword, setViewPassword] = useState(true)
    const [isUserRegistred, setIsUserRegistred] = useState(false)

    const auth = getAuth(initializeApp(require('../../firebase/firebase.json')))

    const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
        {
          clientId: require('../../auth/googleAuth.json').client_id,
          androidClientId: require('../../auth/googleAuth.json').android_client
        },
      );

      useEffect(() => {
        if (response?.type === 'success'){
            signWithGoogle()
        }
      }, [response])
      
    
    async function signWithGoogle(){
        const { id_token } = response.params
        const credential = GoogleAuthProvider.credential(id_token)
        await signInWithCredential(auth, credential)

        const userData = {
            name: auth.currentUser.displayName,
            email: auth.currentUser.email
        }
        console.log(userData)
        // navigation.navigate('InfoPage', { userData })
    }


    async function signIn(){
        try{
            const user = await signInWithEmailAndPassword(auth, email, password)
            const userEmail = user.user.email
            const currentUserInfos = await getDataByEmail(userEmail)
            
            const userData = {
                email: userEmail,
                currentUserInfos: currentUserInfos
            }
            signUser(userData)
            // Use user.user.delete() to remove it from firebase auth

        }
        catch(e){
            alert(`Wrong password! ${e}`)
        }
    }

    async function signUp(){
        try{
            const user =  await createUserWithEmailAndPassword(auth, email, password);
            await addNewUser(email)
            const userData = {
                email: user.user.email,
            }

            navigation.navigate('InfoPage', { userData })
        }
        catch(e){
            alert(`Looks like something went wrong! This is the error: \n${e}`)
        }
    }

    return(
        <View style = {styles.container}>
            <ScrollView 
            contentContainerStyle = {{alignItems: 'center'}}
            showsVerticalScrollIndicator = {false}>
                <Lottie
                source={require('../../../assets/animations/background.json')}
                loop
                autoPlay
                resizeMode="cover"
                duration={3000}
                />
                <Lottie
                source={require('../../../assets/animations/background.json')}
                loop
                autoPlay
                resizeMode = "cover"
                duration = {1500}
                />

                <MotiImage 
                from = {{translateY: 0, scale: 1}}
                animate = {{translateY: 5, scale: 1.02}}
                transition = {{duration: 1500, type: 'timing', loop: true}}
                style = {styles.logoDisplay}
                source={require('../../../assets/OnlyNyxLogo.png')}/>

                <MotiView
                from = {{opacity: 0, translateY: 40}}
                animate = {{opacity: 1, translateY: 0}}
                transition = {{delay: 500, type: 'timing'}}
                style = {styles.formContainer}>
                    <MotiView
                    from = {{opacity: 0, translateY: -10}}
                    animate = {{opacity: 1, translateY: 0}}
                    transition = {{delay: 700, type: 'timing'}} 
                    style = {styles.formHeaderWrapper}>
                        <Text style = {styles.formHeader}>What's up?</Text>
                        <Text style = {styles.formSubHeader}>Sign into your Account</Text>
                    </MotiView>

                    <MotiView
                    from = {{opacity: 0, translateX: -20}}
                    animate = {{opacity: 1,translateX: 1}}
                    transition = {{delay: 1000, type: 'timing'}} 
                    style = {styles.inputWrapper}>
                        <View style = {styles.formInputWrapper}>
                            <View style = {styles.formInput}>
                            <TextInput
                                placeholder = "E-mail"
                                clearButtonMode = "while-editing"
                                selectTextOnFocus
                                selectionColor = {'#392190'}
                                keyboardType = {'email-address'}
                                value = { email }
                                onEndEditing = {async () => {
                                    console.log('terminou fi')
                                    if (email.includes('@gmail.com'))
                                    {
                                        try{
                                            await isEmailAuthenticated(email)
                                            ? setIsUserRegistred(true)
                                            : setIsUserRegistred(false)
                                        }
                                        catch(e){
                                            console.log(e)
                                            setIsUserRegistred(false)
                                        }
                                    }
                                }}
                                onChangeText = {(text) => setEmail(text)}
                                placeholderTextColor = '#A7A7A7'
                                style = {styles.input}/>

                                <MaterialCommunityIcons name= "email"  
                                style = {styles.inputIcon}
                                size= {20} color = "#392190" />
                            </View>
                            
                            <View style = {styles.formInput}>
                                <TextInput
                                secureTextEntry = {viewPassword}
                                placeholder = "Password"
                                keyboardType="twitter"
                                value = {password}
                                editable = {email != ''}
                                onChangeText = {(pass) => setPassword(pass)}
                                placeholderTextColor = '#A7A7A7'
                                selectionColor = {'#392190'}
                                style = {styles.input}/>
                            {
                                !viewPassword
                                ?
                                <Entypo name="eye"
                                onPress={() => setViewPassword(!viewPassword)}
                                style = {styles.inputIcon}
                                size={20} color="#392190" />

                                :
                                <Entypo name="eye-with-line"
                                onPress={() => setViewPassword(!viewPassword)}
                                style = {styles.inputIcon}
                                size={20} color="#392190" />
                            }
                            </View>

                        </View>
                        <Pressable 
                        onPress={() => alert("Password reset's stil in development, sorry.")}
                        style = {{width: '100%', alignItems: 'flex-end', paddingHorizontal: 12}}>
                            <Text style = {{color: '#A7A7A7', fontSize: 12}}>Forgot my password</Text>
                        </Pressable>
                    </MotiView>

                    <Pressable
                    onPress={() => 
                        isUserRegistred
                        ? signIn()
                        : signUp()
                    } 
                    disabled = {password == ''}
                    style = {{...styles.logButton, opacity: password != '' ? 0.8 : 0.3}}>
                        {
                            isUserRegistred
                            ?
                            <MotiText
                            from = {{opacity: 0, translateX: -10}}
                            animate = {{opacity: 1, translateX: 0}}
                            style = {styles.formButtonText}>
                                Login
                            </MotiText>
                            :
                            <MotiText
                            from = {{opacity: 0, translateX: -10}}
                            animate = {{opacity: 1, translateX: 0}}
                            delay = {1200}
                            style = {styles.formButtonText}>
                                Register
                            </MotiText>
                        }
                        
                        <View style = {styles.socialGroup}>
                            <Pressable
                            onPress={() => alert('Discord is currently unavailable')}>
                                <Image
                                style = {styles.socialImage}
                                resizeMode = {'contain'}
                                source = {require('../../../assets/discordLogo.png')}
                                />
                            </Pressable>

                            <Text style = {{opacity: 0.8}}>|</Text>
                            
                            <Pressable
                            onPress={async() => await promptAsync()}>
                                <Image
                                style = {styles.socialImage}
                                resizeMode = {'contain'}
                                source = {require('../../../assets/googleLogo.png')}
                                />
                            </Pressable>
                        </View>
                    </Pressable>
                </MotiView>
            </ScrollView>
        </View>
    )
}