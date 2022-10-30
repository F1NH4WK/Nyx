import { MotiView, MotiImage } from "moti";
import { useState } from "react";
import { Text, TextInput, View, Pressable } from "react-native";
import styles from "./styles";
import { AntDesign } from '@expo/vector-icons';
import { getAuth, GoogleAuthProvider, signInWithCredential, 
    createUserWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from "firebase/app";


export default function SignPage({navigation}){

    const [email, setEmail] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [userData, setUser] = useState(undefined)

    const auth = getAuth(initializeApp(require('../../firebase/firebase.json')))
    
    async function sign(){
        try{
        const user = await createUserWithEmailAndPassword(auth, email, password);
        const username = user.user.displayName
        const useremail = user.user.email
        setUser({
            name: username,
            email: useremail
        })
        // POSSO PEGAR OS DADOS DANDO UM FETCH NA API DA GOOGLE
        navigation.navigate('InfoPage', {userData})
        }
        catch{
            alert('Esse email aí já tá cadastrado paizão')
        }
    }

    return(
        <View style = {styles.container}>
            <MotiImage 
            from = {{translateY: 0, scale: 1}}
            animate = {{translateY: 5, scale: 1.02}}
            transition = {{duration: 1500, type: 'timing', loop: true}}
            style = {styles.logoDisplay}
            source={require('../../../assets/OnlyNyxLogo.png')}/>

            <Text style = {styles.title}>Sign In</Text>
            <TextInput
            placeholder="email@example.com"
            placeholderTextColor={'#A7A7A7'}
            style = {styles.input}
            onChangeText = {text => setEmail(text)}
            />

            <TextInput
            placeholder="**********"
            placeholderTextColor={'#a7a7a7'}
            secureTextEntry
            style = {styles.input}
            onChangeText = {pass => setPassword(pass)}
            />

        <Pressable style = {styles.nextButton} 
        onPress = {() => sign()}>
            <MotiView
            from = {{translateY: 100}}
            animate = {{translateY: 0}}
            delay =  {500}
            style = {{...styles.nextButton, opacity: 
            email != undefined && password != undefined
            ? 1
            : 0.5}}> 
                    <Text style = {styles.textInside}>Sign in</Text>
                    <MotiImage
                    style = {styles.nextButtonImage}
                    source={require('../../../assets/iconGradient.png')}/>
            </MotiView>
        </Pressable>

        <Pressable style = {styles.signUp} 
        onPress = {() => sign()}>
            <Text style = {styles.textInside}>Sign Up</Text>
        </Pressable>

        <Text style = {{fontSize: 16, marginTop: 25}}>or</Text>

        <Pressable style = {styles.withGoogle}>
            <AntDesign name="google" 
            size={24} color="white" />
            <Text style = {{fontSize: 10}}>|</Text>
            <Text style = {{fontWeight: 'bold', fontSize: 16}}>Login with Google</Text>
        </Pressable>

        </View>

    )
}