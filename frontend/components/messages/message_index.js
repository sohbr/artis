import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import ActionCable from "react-native-actioncable";
import { getMessages, postMessage } from "../../actions/message_actions";
import { send, subscribe } from "react-native-training-chat-server";
import MessageIndexItem from "./message_index_item";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const conversationId = 1;

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
      messages: []
    };

    // this.sendMessage = this.sendMessage.bind(this);
    // this.updateMessages = this.updateMessages.bind(this);
  }

  componentWillMount() {
    this.props.getMessages(conversationId);
  }

  componentDidMount() {
    subscribe(
      "artis" +
        this.props.currentUser.username +
        this.props.navigation.state.params,
      messages => {
        this.setState({ messages });
      }
    );
    //   this.subscription = this.context.cable.subscriptions.create(
    //     {
    //       channel: "MessagesChannel",
    //       conversation_id: conversationId
    //     },
    //     {
    //       received: function(data) {
    //         console.log(data);
    //       }
    //     }
    //   );
    // }
    //
    // componentWillUnmount() {
    //   this.subscription &&
    //     this.context.cable.subscriptions.remove(this.subscription);
  }

  sendMessage() {
    // this.props.postMessage(
    //   this.state.typing,
    //   conversationId,
    //   this.props.currentUser.id
    // );
    send({
      channel:
        "artis" +
        this.props.currentUser.username +
        this.props.navigation.state.params,
      sender: this.props.currentUser.username,
      message: this.state.typing
    });
    this.setState({
      typing: ""
    });
  }

  renderItem({ item }) {
    return (
      <View style={styles.row}>
        <Text style={styles.sender} color={"#0F1B07"}>
          {item.sender}
        </Text>
        <Text style={styles.message}>{item.message}</Text>
      </View>
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <FlatList data={this.state.messages} renderItem={this.renderItem} />
        <KeyboardAwareScrollView behavior="padding">
          <View style={styles.footer}>
            <TextInput
              value={this.state.typing}
              onChangeText={text => this.setState({ typing: text })}
              style={styles.input}
              underlineColorAndroid="transparent"
            />
            <TouchableOpacity onPress={this.sendMessage.bind(this)}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAwareScrollView>
      </View>
    );
  }
}

//   render() {
//     let display = null;
//     if (Object.keys(this.props.messages).length > 0) {
//       display = Object.values(this.props.messages).map((message, idx) => {
//         return <MessageIndexItem key={`key-${idx}`} message={message} />;
//       });
//     } else {
//       display = <Text>Loading</Text>;
//     }
//     return (
//       <View style={styles.container}>
//         <ScrollView style={styles.container}>{display}</ScrollView>
//         <KeyboardAvoidingView behavior="padding">
//           <View style={styles.footer}>
//             <TextInput
//               value={this.state.typing}
//               onChangeText={text => this.setState({ typing: text })}
//               style={styles.input}
//               underlineColorAndroid="transparent"
//               placeholder="Type something nice"
//             />
//             <TouchableOpacity onPress={this.sendMessage}>
//               <Text style={styles.send}>Send</Text>
//             </TouchableOpacity>
//           </View>
//         </KeyboardAvoidingView>
//       </View>
//     );
//   }
// }

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
    paddingLeft: 20,
    marginTop: 5,
    fontSize: 18,
    color: "#0F1B07"
  },
  sender: {
    fontWeight: "bold",
    paddingRight: 10,
    color: "#0F1B07"
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
    color: "#0F1B07",
    fontSize: 16,
    fontWeight: "bold",
    padding: 20
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
