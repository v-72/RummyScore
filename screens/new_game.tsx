import React, { Component } from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  Image
} from "react-native";

export default class NewGame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gameName: "",
      numPlayers: 0,
      modalVisible: true,
      defaultName: "Game 1",
      defaultPlayers: "2"
    };
    this.setModalVisible = this.setModalVisible.bind(this);
    this.renderModal = this.renderModal.bind(this);
  }

  setModalVisible(modalVisible) {
    this.setState({ modalVisible })
  }

  renderModal() {
    return (
      <Modal
        animationType="fade"
        transparent={true}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Game Name:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: "90%" }}
              maxLength={20}
              defaultValue={this.state.defaultName}
            />
            <Text style={styles.modalText}>Number of Players:</Text>
            <TextInput
              style={{ height: 40, borderColor: 'gray', borderWidth: 1, width: "90%" }}
              textContentType={"password"}
              keyboardType={"numeric"}
              defaultValue={this.state.defaultPlayers}
            />
            <View style={styles.fixToText}>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#e57373" }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{ ...styles.openButton, backgroundColor: "#43a047", position: "absolute", left: "80%" }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
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
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        {this.renderModal()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    marginLeft: 30,
    backgroundColor: "white",
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
    textAlign: "left"
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
});
