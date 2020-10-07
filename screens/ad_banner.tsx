import React, { Component } from 'react';
import { Alert, View } from "react-native";
import { AdMobBanner } from 'expo-ads-admob';
const UNITID = "";

export default class AdBanner extends Component {
  bannerError(){
    Alert.alert("Error in loading banner");
  }

  render() {
    return (
      <View style={{ alignSelf: "stretch", position: "absolute", bottom: 0 }}>
        <AdMobBanner
          bannerSize="fullBanner"
          adUnitID={UNITID}
          onDidFailToReceiveAdWithError={this.bannerError} />
      </View>
    )
  }
}