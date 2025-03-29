import React, { useState } from 'react';
import { View, ScrollView, Image, Text, StyleSheet, TextInput, Button } from 'react-native';
import { ValidateEmail } from '../utils';

const SubscribeScreen = () => {
  const [firstName, onChangeFirstName] = useState('');

  function handleSubscribe(){

  }
  // Add subscribe screen code here
  return (
      <View style={styles.container}>
        {/* d<View> */}
    <Text style={styles.headerText}>Welcome to Little Lemon</Text>
    <Image source={require('../assets/little-lemon-logo-grey.png')} style={styles.image} />
          <Text style={styles.regularText}>
            Little Lemon is a charming neighborhood bistro that serves simple food
            and classic cocktails in a lively but casual environment. Subscribe to our newsletter for our latest delicious recipies!
          </Text>
          <TextInput
            style={styles.inputBox}
            value={firstName}
            onChangeText={onChangeFirstName}
            placeholder={'Email'}
          />
    <Button  style={styles.buttonText}  title="Subscribe" onPress={handleSubscribe} /> 
  {/* </View> */}
  </View>);
};

export default SubscribeScreen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    // flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  headerText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 30,
    color: '#EDEFEE',
    backgroundColor: '#EE9972',
    textAlign: 'center',
    width: '100%'
  },
  regularText: {
    paddingRight: 10,
    paddingLeft: 20,
    paddingTop: 30,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inputBox: {
    width: '80%',
    margin: 15,
    borderRadius: 10,
    fontSize: 24,
    padding: 20,
    marginVertical: 8,
    backgroundColor: 'white',
    border: '2px solid rgba(0, 0, 0, 1) !important',
    textAlign: 'left',
  },
  image: {
    width: 150,
    height: 150,
    padding: 20,
    
    // borderRadius: 20,
     margin: '15px auto'
  },
  buttonText: {
    width: 300,
    // height: 100,
    borderRadius: 20,
    // margin: '0 auto'
    backgroundColor: 'yellow',
    color: 'black',
  },
});

