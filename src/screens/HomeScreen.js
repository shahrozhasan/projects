import {React,useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import COLORS from '../consts/colors';
import plants from '../consts/plants'
import Icon from 'react-native-vector-icons/MaterialIcons';
const width = Dimensions.get("screen").width/2-30
const HomeScreen = ({navigation}) => {
  const categories = ['POPULAR', 'ORGANIC', 'INDOORS', 'SYNTHETIC'];
  const[categoryindex,selectcategoryindex] = useState(0);
  const CategoriesList = () => {
    return (
      <View style={styles.categoryContainer}>
        {categories.map((item, index) => (
          <TouchableOpacity key={index} 
          activeOpacity={0.8}
          onPress={()=>selectcategoryindex(index)}>
          <Text style={[styles.categorytxt ,categoryindex==index && styles.categorytxtselected,]}>{item} </Text>
          </TouchableOpacity>
        ))}
      </View>

    )
  };
  const Card = ({plant})=>{
    return(
      <TouchableOpacity onPress={()=>navigation.navigate("Details")}>
      <View style = {styles.card}>
        <View style={{alignItems:'flex-end'}}>
          <View style = {{
            height:30,
            width:30,
            borderRadius:15,
            alignItems:'center',
            justifyContent:'center',
            backgroundColor: plant.like ? 'rgba(245,42,42,0.2)':'rgba(0,0,0,0.2)'
          }}>
          <Icon name='favorite' size={18} color={plant.like ? COLORS.red : COLORS.dark}/>
          </View>
          
        </View>
        <View style={{height:100,alignItems:'center'}}>
          <Image style={{flex:1, resizeMode:'contain'}} source={plant.img}/>
        </View>
        <Text style={{fontWeight:'bold' , fontSize:18,color:COLORS.dark}}>
          {plant.name}
        </Text>
        <View style={{flexDirection:'row',marginTop:10,justifyContent:'space-between'}}>
          <Text style={{fontSize:18,fontWeight:'bold',color:COLORS.dark}}>
            {plant.price}
          </Text>
          <View style={{height:25,width:25,backgroundColor:COLORS.green,borderRadius:5,alignItems:"center"}}>
          <Text style={{color:COLORS.white,fontSize:18}}>+</Text>
          </View>
        </View>

      </View>
      </TouchableOpacity>
    )
  };
  return (
    <SafeAreaView style={styles.mainview}>
      <View style={styles.header}>
        <View>
          <Text style={styles.welcome_txt}>Welcome to</Text>
          <Text style={styles.plant_txt}>Plant Shop</Text>
        </View>
        <Icon name='shopping-cart' size={28} color={COLORS.dark} />
      </View>
      <View style={styles.bottom}>
        <View style={styles.search}>
          <Icon name='search' size={25} />
          <TextInput placeholder='Search' style={styles.input}></TextInput>
        </View>
        <View style={styles.sort_btn}>
          <Icon name='sort' size={30} color={COLORS.white} />
        </View>
        
      </View>
      <CategoriesList/>
      <FlatList columnWrapperStyle={{justifyContent:'space-between'}} showsVerticalScrollIndicator={false} contentContainerStyle={{ marginTop:10,paddingBottom:50,}} numColumns={2} data={plants} renderItem={({item})=> <Card plant={item} />}/>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  mainview: {
    flex: 1, paddingHorizontal: 20, backgroundColor: COLORS.white

  },
  header: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between'
  },
  bottom: {
    flexDirection: 'row'
  },
  welcome_txt: {
    fontSize: 25, fontWeight: 'bold', color: COLORS.dark,
  },
  plant_txt: { fontSize: 38, color: COLORS.green, fontWeight: 'bold' },
  search: {
    marginTop: 20,
    height: 50,
    backgroundColor: COLORS.light,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,

  },
  input: {
    color: COLORS.dark,
    fontSize: 20,
    fontWeight: 'bold',

  },
  sort_btn: {
    marginTop: 20,
    height: 50,
    width: 50,
    backgroundColor: COLORS.green,
    alignItems: "center",
    justifyContent: 'center',
    borderRadius: 10,
    marginLeft: 10,

  },
  categoryContainer: {
    flexDirection: 'row',
    marginTop: 30,
    justifyContent: 'space-between',
  },
  categorytxt:{
    fontSize:16,
    fontWeight:'bold',
    color:'grey',
  },
  categorytxtselected:{
    color:COLORS.green,
    paddingBottom:5,
    borderBottomWidth:2,
    borderColor:COLORS.green,

  },
  card:{
height:225,
backgroundColor:COLORS.light,
width,
marginHorizontal:2,
borderRadius:10,marginBottom:20,padding:15,
marginTop:10, 


  },
});

export default HomeScreen;
