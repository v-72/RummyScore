import React from 'react';
import { 
    StyleSheet, 
    Button, 
    View, 
    SafeAreaView, 
    Text, 
    Alert, 
    ScrollView, 
    Modal 
} from 'react-native';

export default class Table extends React.Component {
    constructor(props:any){
        super(props);
        this.state ={
            modalVisible: true,
            scoreCard: this.getInitialScoreCard()
        }
    }

    getInitialScoreCard(){
        let scoreCard = {
            name: this.props.gameName,
            currentRound: 0,
            pointsTable: {

            }
        }
        this.props.players.forEach((player)=>{
            scoreCard.pointsTable[player] = [...[...Array(this.props.rounds).keys()].map((i)=>{return {i: ""}})]
        })
        return scoreCard;
    }

    renderModal() {
       return (
          <Modal
            animationType="fade"
            transparent={true}
            visible={true}
          >
            <View >
                <Text>Test</Text>
            </View>
          </Modal>
        )
      }

    handlePlayerName(i){
        if(i !== "Round"){
            this.renderModal()
        }
    }

    getHeaderCell(player:string) {
        return (
            <View style={styles.cell}>
                <Text 
                    style={{ fontWeight: "bold",alignSelf:"center"}} 
                    onPress={(i) => {this.handlePlayerName(player)}}>
                        {player}
                </Text>
            </View>
        )
    }

    getCell(val:any) {
        return (
            <View style={styles.cell}>
                <Text 
                    style={{ fontWeight: "bold",alignSelf:"center"}} 
                    onPress={() => { Alert.alert("df") }}>
                        {val}
                </Text>
            </View>
        )
    }

    renderHeader(i:any) {
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
                        [...Array(parseInt(this.props.numPlayers)).keys()].map((i) => {
                            return this.getCell("")
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