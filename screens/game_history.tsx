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

export default class GameHistory extends React.Component {
    constructor(props){
        super(props)
        this.state ={
            games: []
        }
        this.getData();
    }
    async getData(){
       const  _retrieveData = async () => {
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
        this.setState({games: result});
        return;
    }

    render(){
        this.getData();
    return(
        <View>
            {
                this.state.games.map((game)=>{
                    const _game = typeof(game) === 'string' ? JSON.parse(game): {};
                    return(
                        <View>
                            <Text>{_game.name}-{_game.date}</Text>
                        </View>
                    )
                })
            }
        </View>
        )
    }
}