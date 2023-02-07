import React from 'react';
import {View, Text,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Regsiter_S =({navigation}) =>{
return(
<View style={styles.main}>
    <View>
     <Text style={styles.f_text}>
     Let’s sign you up
     </Text >
     <Text style={styles.S_text}>
     Welcome  
     Join the community!
     </Text>
     <View style={{top:150}}>
     <TextInput placeholder="Enter your Full name " placeholderTextColor="#5D5D67"  style={styles.input}/>
     <TextInput placeholder="Enter your Email address " placeholderTextColor="#5D5D67" style={styles.input}/>
     <TextInput placeholder="Enter Your password"  placeholderTextColor="#5D5D67" style={styles.input}/>
     </View>
     <View style={{ flexDirection: 'row' ,alignItems:'center', fontSize:15,top:230,paddingHorizontal:120}}>
                <Text style={{color:'#8F8F9E',}}>Already have account?</Text>
                <TouchableOpacity><Text style={{ color: "#FFFFFF", }} onPress={() => navigation.navigate('login')}>Login</Text></TouchableOpacity>
            </View>
            </View>
      <TouchableOpacity
        style={styles.button}>
        <Text style={{color:'#191720',}}>SignUp</Text>
      </TouchableOpacity>
    
    
</View>
)
}

const styles = StyleSheet.create({
main:{
    flex:1,
    backgroundColor:'#000000',
},
f_text:{
height: 41,
width: 287,
left: 25,
top: 80,
borderRadius: null,
fontSize:30,
fontWeight:"bold",
color:'#ffffff'
},
S_text:{
height: 82,
width: 300,
left: 27,
top: 100,
borderRadius: null,
fontSize:30,
color:'#ffffff'

},
input: {
    borderWidth: 1,
    marginBottom:20,
    borderRadius: 15,
    borderColor: '#bbb',
    backgroundColor:'#1E1C24',
    alignItems:'center',
    color:"#ffffff",
    paddingHorizontal:17
   

  },
  button: {
    alignItems: "center",
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius:15,
    left:25,
    width:360,
    top:240,
  },
})
export default Regsiter_S;