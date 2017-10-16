import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";

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

class ConversationIndexItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let conversationName = "";

    if (
      this.props.conversation.users[0].username !==
      this.props.currentUser.username
    ) {
      conversationName = this.props.conversation.users[0].username;
    } else {
      conversationName = this.props.conversation.users[1].username;
    }

    const messages = this.props.conversation.personal_messages;
    return (
      <View style={styles.row}>
        <Text style={styles.sender}>
          {conversationName[0].toUpperCase() + conversationName.slice(1)}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee"
  },
  message: {
    color: "#0F1B07",
    fontSize: 18
  },
  sender: {
    paddingRight: 10,
    fontSize: 18,
    color: "white"
  }
});

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(
  ConversationIndexItem
);
