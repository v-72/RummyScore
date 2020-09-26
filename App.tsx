import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

const App = () => (
  <SafeAreaView style={styles.container}>
    <View>
           <Text style={styles.titleHead}>RummyScore</Text>
    </View>
    
    <View style={styles.view}>
      <Button
        title="New Game" 
        color="#0097a7"
        onPress={() => Alert.alert('Under construction')}
      />
    </View>
    <Separator />
    <View style={styles.view}>
      <Button
        title="Previous Games"
        color="#0097a7"
        onPress={() => Alert.alert('Under construction')}
      />
    </View>
    <Separator />
    <View style={styles.view}>
    <Button
        title="Help"
        color="#0097a7"
        onPress={() => Alert.alert('Nothing\'s there to help yet')}
      />
    </View>
    <Separator />
    <View style={styles.view}>
    <Button
        title="About"
        color="#0097a7"
        onPress={() => Alert.alert('Alchemy Studios \nApp version: v0.1.0')}
      />
    </View>
    <View>
      <Text style={{marginTop: 10,textAlign:"right", marginHorizontal: 16}}>v0.0.1</Text>
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginHorizontal: 16,
    backgroundColor:"#e3f2fd"
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginHorizontal: 16,
  },
  titleHead: {
    color:"#0097a7",
    textAlign:"center", 
    marginBottom: 100, 
    fontSize:30, 
    fontWeight:"bold"
  },
  view:{
    marginHorizontal: 16,
  }
});

export default App;
