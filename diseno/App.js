/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

const App: () => Node = () => {


  return (
      <View>
      <StatusBar barStyle='#222' />
      <ScrollView>
        <Text style={styles.TitolRoig}>
          bienvenido a react native
        </Text>
        <Text style={styles.titolBlau}>
          subtitulo
        </Text>
        <Text style={styles.FontNormal}>
          normal
        </Text>
        <Text style={styles.FontNoteserif}>
          normal
        </Text>
        <Text style={styles.SanzSerif}>
          normal
        </Text>
        <Text style={styles.SanzSerifLight}>
          normal
        </Text>
      </ScrollView>
      </View>
  );
};

const styles = StyleSheet.create({
  TitolRoig: {
  color: 'red',
  fontSize: 24,
},
titolBlau: {
  color: 'blue',
  fontSize: 20,
  fontWeight: 'bold',
  fontFamily: 'reboto',
},
FontNormal: {
  fontFamily: 'normal',
  fontSize: 15,
},
FontNoteserif: {
  fontFamily: 'noteserif',
  fontSize: 15,
},
SanzSerif: {
  fontFamily: 'SanzSerif',
  fontSize: 15,
},
SanzSerifLight: {
  fontFamily: 'Sanz-Serif-light',
  fontSize: 15,
}
});

export default App;
