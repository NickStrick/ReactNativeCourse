import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import 'setimmediate';

// import LittleLemonHeader from './components/LittleLemonHeader';
// import LittleLemonFooter from './components/LittleLemonFooter';
// import WelcomeScreen from './WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={{ color: '#fff', fontSize: 20, padding: 20 }}>My app is on</Text>
        {/* <LittleLemonHeader />
        <WelcomeScreen />
      </View>
      <View style={styles.footerContainer}>
        <LittleLemonFooter /> */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: { backgroundColor: '#333333' },
});


