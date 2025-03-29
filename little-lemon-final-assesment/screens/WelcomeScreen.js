import * as React from 'react';
import { View, Text, Button, Image } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  // Add welcome screen code here.
  return <View>
    <Image source={require('../assets/little-lemon-logo.png')} style={{ width: 100, height: 100 }} />
    <Text>Little Lemon, your local mediteranian Bistro</Text>
    <Button title="Newsletter" onPress={() => navigation.navigate('Subscribe')} /> 
  </View>;
};

export default WelcomeScreen;
