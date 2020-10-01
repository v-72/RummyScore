import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground } from 'react-native';

import {
  AdMobBanner,
  AdMobInterstitial,
  PublisherBanner,
  AdMobRewarded,
  setTestDeviceIDAsync,
} from 'expo-ads-admob';


const Separator = () => (
  <View style={styles.separator} />
);

const APP_VERSION = "v0.0.1"
class HomeScreen extends React.Component {
   render() {
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={styles.container}>
        <ImageBackground source={require('../assets/background.png')} style={styles.image}>
          <View>
            <Text style={styles.titleHead}>Rummy Score</Text>
          </View>

          <View style={styles.view}>
            <Button
              title="New Game"
              color="#90a4ae"
              onPress={() => navigate("New Game", {})}
            />
          </View>
          <Separator />
          <View style={styles.view}>
            <Button
              title="History"
              color="#90a4ae"
              onPress={() => Alert.alert('Under construction')}
            />
          </View>
          <Separator />
          <View style={styles.view}>
            <Button
              title="Help"
              color="#90a4ae"
              onPress={() => Alert.alert('Nothing\'s there to help yet')}
            />
          </View>
          <Separator />
          <View style={styles.view}>
            <Button
              title="About"
              color="#90a4ae"
              onPress={() => Alert.alert(`Alchemy Studios \nApp version: ${APP_VERSION}`)}
            />
          </View>
          <View>
            <Text style={{ marginTop: 10, textAlign: "right", marginHorizontal: 16, color: "#fff8e1" }}>{APP_VERSION}</Text>
          </View>
          <View style={{alignSelf:"stretch", position:"absolute", bottom:0}}>
            <AdMobBanner
              bannerSize="fullBanner"
              adUnitID=""
              onDidFailToReceiveAdWithError={this.bannerError} />
          </View>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // marginHorizontal: 16,
    backgroundColor: "#e3f2fd",
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
    color: "#fff8e1",
    textAlign: "center",
    marginTop: 50,
    marginBottom: 100,
    fontSize: 40,
    fontWeight: "bold",
    borderColor: "#fff",
    borderWidth: 3,
    backgroundColor: "#000"
  },
  view: {
    marginHorizontal: 16
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
});

export default HomeScreen