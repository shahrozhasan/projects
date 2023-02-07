import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { Alert } from "react-native";
import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import COLORS from "../consts/colors";


const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation()
  const HandleSubmitt = async() => {
    const body = {
      "email": username,
      "password": password
    }
   await fetch('http://restapi.adequateshop.com/api/authaccount/login', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    })
    .then( async resp=> {const data =await resp.json(); console.log(data.code); data.code===1 ?Alert.alert('Invalid'): navigation.navigate("Home")})
    // .finally(fin=>console.log(fin))
      // .then(resp => JSON.stringify(resp.status)==200 ? navigation.navigate("Home") : Alert.alert("Invalid password"))
    //    const resp= await axios.post('http://restapi.adequateshop.com/api/authaccount/registration',body);
    //    console.log();

  }

return (
  <View style={styles.Main}>
            <View style={styles.wrapper}>
                <TextInput placeholder="Enter Email" style={styles.input} value={username}
                    onChangeText={(e) => setemail(e)} />
                <TextInput placeholder="Enter Password" style={styles.input} secureTextEntry value={password}
                    onChangeText={(e) => setPassword(e)} />

                <Button title="Login" onPress={() => HandleSubmitt()} />
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text>Don't have account?</Text>
                <TouchableOpacity><Text style={{ color: "blue" }} onPress={() => navigation.navigate('Register')}>Register</Text></TouchableOpacity>
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
export default Login;