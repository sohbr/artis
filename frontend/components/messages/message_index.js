import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ActionCable from "react-native-actioncable";
import { getMessages, postMessage } from "../../actions/message_actions";
import { send, subscribe } from "react-native-training-chat-server";
import MessageIndexItem from "./message_index_item";
// const NAME = "BRIAN";
// const CHANNEL = "supsup";

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  FlatList,
  KeyboardAvoidingView,
  TouchableOpacity,
  ScrollView
} from "react-native";

class MessageIndex extends Component {
  // static contextTypes = {
  //   cable: PropTypes.object.isRequired
  // };

  constructor(props) {
    super(props);
    this.state = {
      typing: "",
      body: []
    };

    this.sendMessage = this.sendMessage.bind(this);
  }

  componentWillMount() {
    let conversationId = 1;
    this.props.getMessages(conversationId);
    // window.scrollTo(0, 0);
  }

  // componentDidMount() {
  //   this.subscription = this.context.cable.subscriptions.create(
  //     "MessagesChannel",
  //     {
  //       received(data) {
  //         console.log(data);
  //       }
  //     }
  //   );
  // }
  //
  // componentWillUnmount() {
  //   this.subscription &&
  //     this.context.cable.subscriptions.remove(this.subscription);
  // }

  sendMessage() {
    const body = this.state.typing;
    let conversationId = 1;
    this.props.postMessage(body, conversationId, this.props.currentUser.id);
    this.setState({
      typing: ""
    });
  }

  // renderItem({ item }) {
  //   return (
  //     <View style={styles.row}>
  //       <Text style={styles.sender}>{item.user}</Text>
  //       <Text style={styles.message}>{item.body}</Text>
  //     </View>
  //   );
  // }

  render() {
    let display = null;
    if (Object.keys(this.props.messages).length > 0) {
      display = Object.values(this.props.messages).map((message, idx) => {
        return <MessageIndexItem key={`key-${idx}`} message={message} />;
      });
    } else {
      display = <Text>Loading</Text>;
    }
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>{display}</ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.state.typing}
              onChangeText={text => this.setState({ typing: text })}
              style={styles.input}
              underlineColorAndroid="transparent"
              placeholder="Type something nice"
            />
            <TouchableOpacity onPress={this.sendMessage}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

  // render() {
  //   return (
  //     <View style={styles.container}>
  // <FlatList
  //   scrollToEnd={true}
  //   data={this.props.messages}
  //   renderItem={this.renderItem}
  // />
  // <KeyboardAvoidingView behavior="padding">
  //   <View style={styles.footer}>
  //     <TextInput
  //       value={this.state.typing}
  //       onChangeText={text => this.setState({ typing: text })}
  //       style={styles.input}
  //       underlineColorAndroid="transparent"
  //       placeholder="Type something nice"
  //     />
  //     <TouchableOpacity onPress={this.sendMessage}>
  //       <Text style={styles.send}>Send</Text>
  //     </TouchableOpacity>
  //   </View>
  // </KeyboardAvoidingView>
  //     </View>
  //   );
  // }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
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

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  messages: state.entities.messages
});

const mapDispatchToProps = dispatch => ({
  getMessages: conversationId => dispatch(getMessages(conversationId)),
  postMessage: (body, conversationId, userId) =>
    dispatch(postMessage(body, conversationId, userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex);
