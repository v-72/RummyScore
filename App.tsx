import React from 'react';
import HomeScreen from './screens/home_screen';
import NewGame from './screens/new_game';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigator = createStackNavigator(  
  {  
    "Rummy Score": HomeScreen,  
    "New Game": NewGame  
  },  
  {  
      initialRouteName: "Rummy Score"
  }
); 
const AppContainer = createAppContainer(AppNavigator);  

export default class App extends React.Component {  
  render() {  
      return <AppContainer />;  
  }  
}  