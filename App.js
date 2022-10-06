

import React from 'react';
//import type {Node} from 'react';
import Flatbutton from './button';
import {
  SafeAreaView,
  ScrollView,
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
} from 'react-native';


import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
/*const Section = ({children, title}): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};*/



const App = () => {
  return (
   <SafeAreaView>
    <ScrollView>
   <StatusBar
    backgroundColor="#391593"/>
    <View style= {styles.body}>
    <Image style={styles.image1} source={require('foodblu/image/signuplogo.png')}/>
    </View>
    <View style={{padding: -2,backgroundColor:'#ffffff'}}>
      <Text style={styles.acc}>     Create a new account</Text>
    </View>
    <View style={{padding: 25,backgroundColor:'#ffffff',marginTop:-6}}>
      <TextInput
      style={styles.input}
      placeholder ="EMPLOYEE ID"
      autoCapitalize='none'
      autoCorrect={false}
     
      />
       <TextInput
      style={styles.input}
      placeholder ="USER NAME"
      />
      <TextInput
      style={styles.input}
      placeholder ="PHONE NUMBER"
        
      />
      <TextInput
      style={styles.input}
      placeholder ="PASSWORD"
      secureTextEntry={true}
      icon={<Text>Show</Text>}
      iconPosition="right"
      autoCapitalize='none'
      autoCorrect={false}
      />
    
      <Flatbutton text='Sign Up'/>
    </View>
    <View style={{backgroundColor:'#ffffff',height:130}}></View>
    </ScrollView>    
    </SafeAreaView>   
  );
};

const styles = StyleSheet.create({
 
 header:{
  fontSize: 40,
  color: '#1E1E1E', 
  fontWeight: 'bold',
 },
 acc:{
  fontWeight:'bold',
  fontSize: 24,
  marginLeft: 20,
  color:'#1E1E1E',
 },
 body:{
  backgroundColor:'#ffffff',
  marginLeft:-25,
 },
 input:{
  height : 40,
  width: 290,
  margin : 12,
  borderWidth: 3,
  marginLeft: 25,
  fontWeight: 'bold',
  borderBottomColor: '#391593',
  borderTopWidth: 0,
  borderTopLeftRadius: 0,
  borderTopRightRadius: 0,
  borderLeftColor: '#ffffff',
  borderRightColor: '#ffffff',
 },
 image1:{
  backgroundColor:'#ffffff', 
  width: 150,
  marginLeft:150,
  height:200,

},

});

export default App;
