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

export default function LoginPage({ setIsSignedIn })
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);

    const url = 'https://masurao.fr/api/employees';

    const headers = {
        'accept': 'application/json',
        'X-Group-Authorization': 'AhSyHQjIpPhIvfI5OU8HHe9nyhPKwY-q',
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NzQsImVtYWlsIjoib2xpdmVyLmxld2lzQG1hc3VyYW8uanAiLCJuYW1lIjoiT2xpdmVyIiwic3VybmFtZSI6Ikxld2lzIiwiZXhwIjoxNjk1NzI2MzMwfQ.kfZoJqTF7H6Wg1egKTyA8W3r-pucZvkmvBAP0v_Fb6k'
    };

    axios.get(url, {headers})
    .then(response => console.log(response.data))

    const handleLoginPress = () => {
        console.log("Email:", email);
        console.log("Password:", password);
        setEmail("");
        setPassword("");
        setIsSignedIn(true);
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
