import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { getConversations } from "../../actions/message_actions";
import MessageIndex from "./message_index";
import ConversationIndexItem from "./conversation_index_item";

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

class ConversationIndex extends Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      header: null
    };
  };

  constructor(props) {
    super(props);
  }

  buttonPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "MessageIndex") {
        navigate("MessageIndex");
      }
    };
  }

  componentWillMount() {
    this.props.getConversations(this.props.currentUser.id);
  }

  render() {
    let display = null;
    if (Object.keys(this.props.conversations).length > 0) {
      display = Object.values(
        this.props.conversations
      ).map((conversation, idx) => {
        return (
          <TouchableHighlight
            style={styles.button}
            onPress={this.buttonPress("MessageIndex")}
          >
            <View>
              <ConversationIndexItem
                key={`convokey-${idx}`}
                conversation={conversation}
              />
            </View>
          </TouchableHighlight>
        );
      });
    } else {
      display = <Text>Loading</Text>;
    }

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container}>{display}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // justifyContent: "center",
    padding: 10
  },
  button: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#00BCF3",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  }
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  conversations: state.entities.conversations
});

const mapDispatchToProps = dispatch => ({
  getConversations: userId => dispatch(getConversations(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ConversationIndex);
