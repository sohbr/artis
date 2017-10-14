import React from "react";
import ActionCable from "react-native-actioncable";
import { send, subscribe } from "react-native-training-chat-server";

const NAME = "BRIAN";
const CHANNEL = "supsup";

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity
} from "react-native";

export default class Conversation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typing: "",
      message: []
    };
  }

  componentDidMount() {
    subscribe(CHANNEL, messages => {
      this.setState({ messages });
    });
  }

  sendMessage() {
    send({
      channel: CHANNEL,
      sender: NAME,
      message: this.state.typing
    });
    this.setState({
      typing: ""
    });
  }

  renderItem({ item }) {
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>{item.sender}</Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          scrollToEnd={true}
          data={this.state.messages}
          renderItem={this.renderItem}
        />
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.state.typing}
              onChangeText={text => this.setState({ typing: text })}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Type something nice"
            />
            <TouchableOpacity onPress={this.sendMessage.bind(this)}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  },
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  message: {
    fontSize: 18
  },
  sender: {
    fontWeight: "bold",
    paddingRight: 10
  },
  footer: {
    flexDirection: "row",
    backgroundColor: "#eee"
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 18,
    flex: 1
  },
  send: {
    alignSelf: "center",
    color: "lightseagreen",
    fontSize: 16,
    fontWeight: "bold",
    padding: 20
  },
  flip: {
    transform: [{ scaleY: -1 }, { scaleX: -1 }]
  }
});
