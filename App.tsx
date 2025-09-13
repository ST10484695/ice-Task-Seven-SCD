import { Text, View, StyleSheet, TouchableOpacity , ImageBackground} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from '@expo-google-fonts/lancelot/useFonts';
import { Lancelot_400Regular } from '@expo-google-fonts/lancelot/400Regular';
import { Mali_700Bold_Italic } from '@expo-google-fonts/mali/700Bold_Italic';
import { Jaldi_400Regular } from '@expo-google-fonts/jaldi/400Regular';

const backgroundImage = require('./assets/florence.jpg');
const homepageimage= require('./assets/image.webp');
const finalpageimage= require('./assets/image.webp');


type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Final: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function HomeScreen({ navigation }: { navigation: any }) {
  return (
    <View style={styles.container}>
       <ImageBackground source={homepageimage} style={styles.background} blurRadius={9}>
      <Text style={styles.welcome}>Welcome to</Text>
      <Text style={styles.busName}>Loop</Text>
      <Text  style={styles.description}>The App where you explore and meet new people from the tap of a finger and a quick search</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Details')} style={styles.skipButton}>
     <Text>Skip</Text>
     </TouchableOpacity>
     </ImageBackground>
    </View>
  );
}
function DetailsScreen({ navigation }: { navigation: any }) {
  return (
   
    <View style={styles.container}>
       <ImageBackground source={backgroundImage} style={styles.background} blurRadius={8}>
      <Text style={styles.Q1}>What can you do on Loop?</Text>
      <Text style={styles.Explanation}>Loop allows you to meet new people ,explore your city and updates you on any events</Text>
      <Text style={styles.Q2}>How is this different from other social platforms?</Text>
      <Text style={styles.Explanation2}>Loop is purely used to explore your city or any desired city that you wish to visit,similar to instagram ,youll have the ability to post based on the cities youve been to and share your experience with other people who wish to visit the city.</Text>
     <TouchableOpacity onPress={() => navigation.navigate('Final')} style={styles.skipButton}>
     <Text>Skip</Text>
     </TouchableOpacity>
     </ImageBackground>
    </View>
  );
}
function FinalScreen() {
  return (
    <View style={styles.container}>
       <ImageBackground source={finalpageimage} style={styles.background} blurRadius={8}>
      <Text style={styles.slogan}>Turn Your City into a Destination.</Text>
      <Text style={styles.signup}>Interested in signing up?</Text>
      <TouchableOpacity style={styles.getStarted}>
      <Text>Get Started</Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}






export default function App() {
  let [fontsLoaded] = useFonts({
 Mali_700Bold_Italic ,
  Lancelot_400Regular ,
  Jaldi_400Regular
    });

    if (!fontsLoaded) {
    return null;
  }
      

    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Final" component={FinalScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  skipButton:{
     backgroundColor: '#EBDB63',
    width: 200,
    height: 100,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 75,
  },
  welcome:{
    fontFamily:' Lancelot_400Regular ',
    fontSize:30,
    padding:15,
    color:'#E3D6BC',
  },
  busName:{
    fontFamily:' Mali_700Bold_Italic ',
    fontSize:50,
    padding:15,
    color:'#EBDB63'
  },
  getStarted:{
    backgroundColor: '#EBDB63',
     width: 150,
    height: 50,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  description:{
    fontSize:19,
    fontFamily:'Jaldi_400Regular',
    color:'#FAF0CF'
  },
  Q1:{
    margin:10,
    fontSize:25,
    fontFamily:' Lancelot_400Regular ',
    justifyContent:'center',
    color:'#EBDB63'
  },
  Explanation:{
    margin:5,
    fontSize:19,
    fontFamily:'Jaldi_400Regular ',
    color:'#FAF0CF'
  },
  Q2:{
    margin:10,
    fontSize:25,
    fontFamily:' Lancelot_400Regular ',
    justifyContent:'center',
    color:'#EBDB63'
  },
  Explanation2:{
    margin:5,
    fontSize:19,
    fontFamily:'Jaldi_400Regular',
    color:'#FAF0CF'

  },
  slogan:{
    fontFamily:'Lancelot_400Regular',
    fontSize:40,
    margin:10,
    color:'#FAF0CF'
   

   
  },
  signup:{
    fontFamily:'Jaldi_400Regular ',
    fontSize:15,
    margin:5,
    color:'#FAF0CF'
  },
  background: {
    flex: 1,
    resizeMode: 'cover',
  },
 
  
});
