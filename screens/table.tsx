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
    AsyncStorage
} from 'react-native';

export default class Table extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            modalVisible: true,
            rank: {},
            scoreCard: this.getInitialScoreCard()
        }
    }

    getInitialScoreCard() {
        let scoreCard = {
            name: this.props.gameName,
            currentRound: 0,
            date: new Date(),
            pointsTable: {

            }
        }
        this.props.players.forEach((player) => {
            scoreCard.pointsTable[player] = [...Array(parseInt(this.props.rounds)).keys()].map((i) => {
                let obj = {};
                obj[i] = 0;
                return obj
            })
        })
        return scoreCard;
    }


    getHeaderCell(player: string) {
        return (
            <View style={styles.cell}>
                <Text
                    style={{ fontWeight: "bold", alignSelf: "center" }}
                    onPress={(i) => { }}>
                    {player}
                </Text>
            </View>
        )
    }
    
    updateScoreBoard(player, round, data){
        let scoreCard = this.state.scoreCard;
        scoreCard.pointsTable[player][round-1][round-1] = parseInt(data);
        this.setState({scoreCard})
    }

    getCell(i:any, j:any) {
        let val = "x";
        let player = this.props.players[j];
        val = JSON.stringify(this.state.scoreCard.pointsTable[player][i - 1][i - 1]);
        return (
            <View style={styles.cell} doubleTap={() => { Alert.alert(`Player: ${player} Game:${i}`) }}>
                <TextInput
                    keyboardType={"numeric"}
                    maxLength={3}
                    editable={true}
                    selectTextOnFocus
                    defaultValue={val}
                    onChangeText={(data) => { this.updateScoreBoard(player,i,data) }}
                />
            </View>
        )
    }

    renderHeader(i: any) {
        return (<View style={styles.row} key={i}>
            {this.getHeaderCell("Round")}
            {
                this.props.players.map((player, i) => {
                    return this.getHeaderCell(player);
                })
            }
        </View>
        )
    }

    renderRow(i: any) {
        if (i === 0) {
            return this.renderHeader(i);
        } else {
            return (
                <View style={styles.row} key={i}>
                    <View key={3} style={styles.cell}><Text style={{ fontWeight: "bold", alignSelf: "center" }}>{i}</Text></View>
                    {
                        [...Array(parseInt(this.props.numPlayers)).keys()].map((j) => {
                            return this.getCell(i, j)
                        })
                    }
                </View>
            );
        }
    }

    render() {
        const data = [...Array(parseInt(this.props.rounds) + 1).keys()];
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView style={styles.scrollView} horizontal={true}>
                    <View style={styles.main}>
                        {
                            data.map((datum, i) => {
                                return this.renderRow(i, this.props.players[i]);
                            })
                        }
                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    row: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    cell: {
        width: 100,
        borderWidth: 1,
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        marginTop: "5%"
    },
    scrollView: {
        marginHorizontal: 20,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
        marginBottom: 100
    },
});