import React from 'react';
import {
    StyleSheet,
    Button,
    View,
    SafeAreaView,
    Text,
    Alert,
    ScrollView,
    Modal,
    TextInput,
    ImageBackground,
    AsyncStorage
} from 'react-native';
import {
    AdMobBanner,
    AdMobRewarded
} from 'expo-ads-admob';
import AdBanner from "./ad_banner";
export default class GameHistory extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            games: []
        }
        this.getData();
    }
    async getData() {
        const _retrieveData = async () => {
            try {
                const keys = await AsyncStorage.getAllKeys();
                const result = await AsyncStorage.multiGet(keys);
                return result.map((result, i, store) => {
                    return store[i][1];
                });
            } catch (error) {
                return [];
            }
        };
        const result = await _retrieveData();
        this.setState({ games: result });
        return;
    }

    async getRewardAd() {
        try {
            // await AdMobRewarded.setAdUnitID('');
            // await AdMobRewarded.requestAdAsync();
            // await AdMobRewarded.showAdAsync();
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    render() {
        this.getRewardAd();
        this.getData();
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView}>
                    <View>
                        {
                            this.state.games.map((game, i) => {
                                const _game = typeof (game) === 'string' ? JSON.parse(game) : {};
                                const date = _game.date ? new Date(_game.date) : new Date();
                                const formatedDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
                                return (
                                    <View style={{ borderWidth: 0.5, marginLeft: "5%", marginRight: "5%", flexDirection: "column" }} key={i}>
                                        <Text style={{ textAlign: "left", fontWeight:"bold", fontSize:16,padding:5}}>{_game.name}</Text>
                                        <Text style={{ textAlign: "right",alignSelf:"stretch",paddingRight:5 }}>{formatedDate}</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </ScrollView>
                <AdBanner />
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: "5%",
        backgroundColor: "#e3f2fd",
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    scrollView: {
        marginHorizontal: 20,
        marginBottom: "20%"
    },
})