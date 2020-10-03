import React, { Component } from 'react';
const generate = require('project-name-generator');
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Picker,
  SafeAreaView,
  ScrollView
} from "react-native";
import  AdBanner from "./ad_banner";
import Table from './table';
export default class NewGame extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      playerNames: [],
      gameName: this.generateRandomGameName(),
      numRounds: "13",
      numPlayers: "2",
      modalVisible: true,
      numRoundsDefault: ["7", "13"],
      modalErrorText: "",
      getPlayerDetails: false,
      playerDetailsModal: true
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this.renderGameDetails = this.renderGameDetails.bind(this);
    this.setGameDetails = this.setGameDetails.bind(this);
    this.generatePlayerNames = this.generatePlayerNames.bind(this);
    this.generateRandomGameName = this.generateRandomGameName.bind(this);
    this.renderHelper = this.renderHelper.bind(this);
  }
  generateRandomGameName() {
    return generate().dashed;
  }

  setModalVisible(modalVisible: Boolean) {
    this.setState({ modalVisible });
  }

  setGameDetails() {
    const np = parseInt(this.state.numPlayers);
    if (np > 12 || np < 2) {
      this.setState({ modalErrorText: "There should be atleast 2 players and upto 12." })
      return;
    }
    this.setState({ modalVisible: false });
    this.generatePlayerNames();
    return;
  }

  generatePlayerNames() {
    const getPlayerDetails = true;
    const playerNames = [...Array(parseInt(this.state.numPlayers)).keys()].map((i) => {
      return `Player ${i + 1}`
    })
    this.setState({ playerNames, getPlayerDetails });
  }

  renderGameDetails() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Game Name:</Text>
            <TextInput
              style={styles.inputStyle}
              maxLength={20}
              selectTextOnFocus
              defaultValue={this.state.gameName}
              onChangeText={(text) => this.setState({ gameName: text })}
            />
            <Text style={styles.modalText}>Number of Players:</Text>
            <TextInput
              style={styles.inputStyle}
              textContentType={"password"}
              keyboardType={"numeric"}
              maxLength={2}
              autoFocus={true}
              defaultValue={this.state.numPlayers}
              onChangeText={(text) => this.setState({ numPlayers: text })}
            />
            <Text style={styles.modalText}>Number of Rounds:</Text>
            <Picker
              selectedValue={this.state.numRounds}
              style={styles.inputStyle}
              onValueChange={(itemValue, itemIndex) => this.setState({ numRounds: itemValue })}
            >
              <Picker.Item label="7" value="7" />
              <Picker.Item label="13" value="13" />
            </Picker>
            <Text style={{ color: "red" }}>{this.state.modalErrorText}</Text>
            <View style={styles.fixToText}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#e57373",width:"40%"}}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#43a047", position: "absolute", left: "50%", width:"40%"}}
                onPress={() => {
                  this.setGameDetails(!this.state.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Done</Text>
              </TouchableHighlight>
            </View>
          </View>
        </View>
      </Modal>
    )
  }

  renderPlayerDetails() {
    return (
      <Modal
        animationType="fade"
        transparent={false}
        visible={this.state.playerDetailsModal}
      >
        <View style={styles.centeredView}>
        <SafeAreaView style={styles.modalView}>
        <ScrollView style={styles.scrollView}>
        <Text style={{fontWeight: "bold"}}>Please enter player names</Text>
            {
              [...Array(parseInt(this.state.numPlayers)).keys()].map((i) => {
                return (
                  <View>
                    <Text style={styles.modalText}>{this.state.playerNames[i]}</Text>
                    <TextInput
                      style={styles.inputStyle}
                      maxLength={20}
                      selectTextOnFocus
                      defaultValue={this.state.playerNames[i]}
                      onChangeText={(text) => {
                        this.state.playerNames[i] = text
                      }}
                    />
                  </View>
                )
              })
            }
        </ScrollView>
        <View style={{flexDirection: 'row',marginTop:"10%"}}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#43a047" ,width:"90%",alignContent:"center"}}
                onPress={() => {
                  this.setState({playerNames: this.state.playerNames, playerDetailsModal: false, getPlayerDetails:false})
                }}
              >
                <Text style={{fontWeight: "bold", alignSelf:"center", color:"#fff"}}>Done</Text>
              </TouchableHighlight>
            </View>
        </SafeAreaView>
        </View>
      </Modal>
    )
  }

  renderHelper() {
    if (this.state.getPlayerDetails) {
      return this.renderPlayerDetails();
    } else if (this.state.playerNames.length >= 2) {
      // Alert.alert(this.state.playerNames)
      return (
        <Table numPlayers={this.state.numPlayers}
          gameName={this.state.gameName}
          players={this.state.playerNames}
          rounds={this.state.numRounds} />
      )
    } else {
      return this.renderGameDetails();
    }
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center"}}>
        {
          this.renderHelper()
        }  
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    marginBottom: 100,
  },
  modalView: {
    margin: "1%",
    marginLeft: "2%",
    marginRight: "2%",
    backgroundColor: "#fafafa",
    borderRadius: 20,
    padding: 35,
    alignItems: "baseline",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: "90%"
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 5,
    marginTop: 10,
    fontWeight: "bold",
    textAlign: "left"
  },
  fixToText: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  inputStyle: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.5,
    width: "90%",
    paddingLeft: "5%"
  },
  scrollView: {
    marginHorizontal: "2%",
    width:"100%"
},
});