import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert, ImageBackground} from 'react-native';

const Separator = () => (
    <View style={styles.separator} />
);

export default class HomeScreen extends React.Component {  
    render() {  
        return (  
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>  
                <Text>Profile Screen</Text>  
            </View>  
    );  
    }  
}  