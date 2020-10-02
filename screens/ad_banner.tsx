import React, { Component } from 'react';
import { View } from "react-native";
import { AdMobBanner } from 'expo-ads-admob';
const UNITID = "ca-app-pub-3265178270543067/4439734508";

export default class AdBanner extends Component {
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