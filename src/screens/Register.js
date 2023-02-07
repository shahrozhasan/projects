import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
// import axios from 'axios'
import COLORS from "../consts/colors";

const Register = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()
    const registeruser = async () => {
        const body = {
            name: name,
            email: email,
            password: password
        }
        await fetch('http://restapi.adequateshop.com/api/authaccount/registration', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        })
            .then(resp => console.log(JSON.stringify(resp)))
        //    const resp= await axios.post('http://restapi.adequateshop.com/api/authaccount/registration',body);
        //    console.log();

    }


    return (
        <View style={styles.Main}>
            <View style={styles.wrapper}>
                <TextInput placeholder="Enter your Name" style={styles.input} value={name}
                    onChangeText={(e) => setname(e)} />
                <TextInput placeholder="Enter Email" style={styles.input} value={email}
                    onChangeText={(e) => setemail(e)} />
                <TextInput placeholder="Enter Password" style={styles.input} secureTextEntry value={password}
                    onChangeText={(e) => setPassword(e)} />

                <Button title="register" onPress={() => registeruser()} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Already have account?</Text>
                <TouchableOpacity><Text style={{ color: "blue" }} onPress={() => navigation.navigate('Login')}>Login</Text></TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    Main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 14,
        borderRadius: 5,
        borderColor: '#bbb',

    },
    wrapper: {
        width: '80%'
    },
})
export default Register;