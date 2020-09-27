import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ScrollView } from 'react-native';

export default class Table extends React.Component {
    getCell(player){
        return (
            <View key={3} style={styles.cell}>
                <Text style={{fontWeight: "bold"}}>{player}</Text>
            </View>
            )
    }

    renderHeader(i){
       return( <View style={styles.row} key={i}>
                    {this.getCell("Round")}
                    {
                        this.props.players.map((player,i) => { 
                            return this.getCell(player);
                        })
                    }
                </View>
                )
    }

    renderRow(i:any) {
        if(i === 0){
            return this.renderHeader(i);
        }else{
            return (
                <View style={styles.row} key={i}>
                    <View key={3} style={styles.cell}><Text style={{fontWeight:"bold",alignSelf:"center"}}>{i}</Text></View>
                    <View key={3} style={styles.cell}><Text></Text></View>
                    <View key={4} style={styles.cell}><Text></Text></View>
                </View>
            );
        }
    }
  
    render() {
        const data = [...Array(parseInt(this.props.rounds)+1).keys()];
        return (
            <SafeAreaView style={styles.container}>
            <ScrollView style={styles.scrollView}>
            <View style={styles.main}>
            {
                data.map((datum,i) => { 
                    return this.renderRow(i,this.props.players[i]);
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
    row:{ 
        flex: 1, 
        alignSelf: 'stretch', 
        flexDirection: 'row' 
    },
    cell:{
        width:100,
        borderWidth:1,
        justifyContent: 'center' 
    }
  });