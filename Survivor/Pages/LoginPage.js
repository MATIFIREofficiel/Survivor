import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef, useEffect } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import axios from "axios";

function login_request(email, password, { setIsSignedIn, setApiUser })
{
    const url = 'https://masurao.fr/api/employees/login';
    const headers = {
        'accept': 'application/json',
        'X-Group-Authorization': 'AhSyHQjIpPhIvfI5OU8HHe9nyhPKwY-q',
        'Content-Type': 'application/json',
    };
    const data = {
        email: email,
        password: password,
    };

    axios.post(url, data, { headers })
    .then((response) => {
        console.log('Réponse de l\'API:', response.data);
        console.log(response.status);
        if (response.status === 200) {
            setApiUser(response.data);
            setIsSignedIn(true);
        }
    })
    .catch((error) => {
        console.error('Erreur lors de la requête à l\'API:', error);
    });
}

export default function LoginPage({ setIsSignedIn, setApiUser })
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const handleLoginPress = () => {
        console.log("Email:", email);
        console.log("Password:", password);
        login_request(email, password, {setIsSignedIn, setApiUser});
        setEmail("");
        setPassword("");
    };

    return (
        <View style={styles.container}>
        <View style={styles.rectangle}></View>

        <StatusBar style="auto" />
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email."
            placeholderTextColor="#003f5c"
            value={email}
            onChangeText={setEmail}
            />
        </View>
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password."
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
            />
        </View>
        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot password?</Text>
        </TouchableOpacity>
        {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
        <TouchableOpacity style={styles.login} onPress={handleLoginPress}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginLogo: {
        marginBottom: 40,
    },
    inputView: {
        backgroundColor: 'rgba(173, 200, 255, 1)',
        borderRadius: 30,
        width: "70%",
        height: 45,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        height: 50,
        flex: 1,
        padding: 10,
        marginLeft: 20,
    },
    forgot_button: {
        height: 30,
        marginBottom: 20,
    },
    login: {
        width:"80%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        backgroundColor: "#90EE90",
    },
    rectangle: {
        position: 'absolute',
        width: "85%",
        height: "85%",
        backgroundColor: 'rgba(211, 211, 211, 1)',
        borderRadius: 10,
    },
});
