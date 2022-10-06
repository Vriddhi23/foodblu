/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React   from 'react';
import Flatbutton from './button';
import Flatbuttonn from './requestotp';
//import SIGNUP from './signup';
//import { Linking } from 'react-native';
import {SafeAreaView,ScrollView, Button, Image,StyleSheet,StatusBar, Text,View, TextInput, Linking} from 'react-native';
//import Signup from './signup';

//import Images from './src/screens/images';

const App = () => {
  
  return (
    <SafeAreaView>
      <ScrollView>
      <StatusBar backgroundColor="#391593"/>
      <View style={styles.view1}>
      <Image source= { require('FoodBlueApp/image/login.png')} style={styles.image1} />
      </View>
      <View style={styles.view2}>
      <Text style={styles.text1}>Login</Text>
      </View>
      <View style={styles.view3}>
      <TextInput style={styles.input1} placeholder="Enter Employee Id" autoCapitalize='none' autoCorrect={false}/>
      <TextInput style={styles.input1} placeholder="Password" 
      autoCapitalize='none' autoCorrect={false} secureTextEntry={true}
      />
      
      <TextInput style={styles.input1} placeholder="Enter OTP"/>  
      </View>
      <View style={styles.button1} >
        <Flatbuttonn text='Request OTP'/>
      
      </View>
      <View style={styles.button2}>
        <Flatbutton text='LOGIN'/>
        <Text style={styles.text2}>New to FoodBlu? <Text style={{color: 'blue'}}
      onPress={()=>Linking.openURL('https://reactnative.dev/')}>Signup</Text></Text>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({

  view1:{
    marginTop: 10,
    alignItems: 'center',
  },
  text1:{
    margin:5,
    fontWeight:'bold',
    fontSize: 38,
    color:'#1E1E1E',
  },
  view2:{
    marginTop: -35,
    alignItems: 'center',
  },
  view3:{
    alignItems:'baseline',
    marginLeft:45,
    borderRadius:20,
  },
  image1:{
    marginTop:10,
    width: 250, 
    height: 200,
  },
  input1:{
    marginTop:20,
    marginLeft:-15,
    marginRight:25,
    width:290,
    alignSelf:'center',
    height : 40,  
    borderWidth: 3,
    fontWeight: 'bold',
    borderBottomColor: '#391593',
    borderTopWidth: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderLeftColor: '#ffffff',
    borderRightColor: '#ffffff',
  },
  button1:{
    marginTop:10,
    width:200,
    marginLeft:206,
  },
  button2:{
    marginTop:80,
    alignItems:'center',
    
  },
  text2:{
    marginTop: 10,
  }

});
export default App;
