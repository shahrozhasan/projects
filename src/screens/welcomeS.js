import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { color } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FloatingAction } from "react-native-floating-action";

const welcomeS = ({navigation}) => {
    
    const list = [{ name: "flutter Developer" }, { name: "flutter Developer" }, { name: "flutter Developer" }, { name: "flutter Developer" }, { name: "flutter Developer" }, { name: "flutter Developer" }, { name: "flutter Developer" }, { name: "flutter Developer" }, { name: "flutter Developer" }]
    return (
        <View style={styles.main}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', top: 25, marginLeft: 10 }}>
                <View>
                    <Text style={styles.w_txt}>
                        Welcome
                    </Text>
                    <Text style={styles.n_txt}>
                        Ishaq Hassan
                    </Text>
                </View>
                <Icon name='arrow-left' size={50} color={'#ffffff'} />

            </View>
            <View style={styles.search}>
                <Icon name='search' size={25} color={"#5D5D67"} />
                <TextInput placeholder='Search'style={styles.input}></TextInput>
            </View>
            {/* <FAB buttonColor="red" iconTextColor="#FFFFFF" onClickAction={() => {console.log("FAB pressed")}} visible={true} iconTextComponent={<Icon name="all-out"/>} /> */}


            <FlatList

                data={list}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.list}>
                            <View >
                                <Text style={{ color: 'white', fontSize: 15, marginLeft: 30, }}>{item.name}</Text>

                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={{ marginRight: 40 }}>
                                    <Icon name='search' size={30} color={'white'} />
                                </View >
                                <View style={{ marginRight: 20 }}>
                                    <Icon name='delete' size={30} color={'#FF5959'} />
                                </View>
                            </View>


                        </View>
                    )
                }}
            />

            {/* <TouchableOpacity style={{left:300}}>
                <View style={{ height: 70, width: 70, backgroundColor: 'white', borderRadius: 100, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: "black", fontSize: 30 }}>+</Text>
                </View>
            </TouchableOpacity> */}
    <TouchableOpacity>
  <FloatingAction
    onPress={() => navigation.navigate("Home")
    }
  >
  </FloatingAction>
  </TouchableOpacity>     
        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#000000',

    },
    w_txt: {

        fontSize: 18,
        fontWeight: 'bold',
        color: '#ffffff',
    },
    n_txt: {
        fontSize: 25,

        color: '#ffffff',
    },
    search: {
        marginTop: 50,
        marginLeft:10,
        height: 60,
        width:380,
        backgroundColor: '#1E1C24',
        
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 1,
        paddingHorizontal: 20,
        



    },


    input: {
        
        fontSize: 15,
        fontWeight: 'bold',
        left: 10,
    

    },
    list: {
        top:10,
        marginBottom: 10,
        height: 80,
        width: 400,
        backgroundColor: "#201E27",
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },


})

export default welcomeS;