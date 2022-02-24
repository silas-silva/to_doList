/* eslint-disable */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToDo from './Components/toDo';
import List from './Pages/List';

const App = () => {
  return (
    <View style={styles.container}>
      <List/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#28272B'
  },
});

export default App;
