import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

import { getConversations } from "../../actions/message_actions";
import MessageIndex from "./message_index";
import ConversationIndexItem from "./conversation_index_item";

import {
  StyleSheet,
  Text,
  View,
  Button,
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

  buttonPress(type, id) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "MessageIndex") {
        navigate("MessageIndex", id);
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
            key={`convokey-${idx}`}
            onPress={this.buttonPress("MessageIndex", conversation.id)}
          >
            <View>
              <ConversationIndexItem conversation={conversation} />
            </View>
          </TouchableHighlight>
        );
      });
    } else {
      display = <Text style={styles.sub}>You have no messages.</Text>;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headerText}>Inbox</Text>
        <ScrollView style={styles.scrollContainer}>{display}</ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 24,
    paddingLeft: 30,
    paddingRight: 30
  },
  scrollContainer: {
    flex: 1,
    backgroundColor: "white"
  },
  button: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#C6D166",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 3
  },
  headerText: {
    fontSize: 24,
    padding: 10,
    paddingBottom: 15,
    alignSelf: "center",
    color: "#C6D166"
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  sub: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    color: "#5C821A",
    padding: 20
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
