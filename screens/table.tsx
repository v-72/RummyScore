import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground } from 'react-native';

export default class Table extends React.Component {
    getCell(player){
        return (<View key={3} style={{borderWidth:1}}><Text style={{fontWeight: "bold"}}>{player}</Text></View>)
    }

    renderHeader(i){
       return( <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }} key={i}>
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
                <View style={{ flex: 1, alignSelf: 'stretch', flexDirection: 'row' }} key={i}>
                    <View key={3} style={{borderWidth:1}}><Text>{i}</Text></View>
                    <View key={3} style={{borderWidth:1}}><Text>3</Text></View>
                    <View key={4} style={{borderWidth:1}}><Text>4</Text></View>
                </View>
            );
        }
    }
  
    render() {
        const data = [...Array(parseInt(this.props.rounds)+1).keys()];
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {
                data.map((datum,i) => { 
                    return this.renderRow(i,this.props.players[i]);
                })
            }
            </View>
        );
    }
  }