import React from "react";
import { connect } from "react-redux";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StackNavigator } from "react-navigation";

import {
  StyleSheet,
  TouchableHighlight,
  Text,
  Image,
  Button,
  View
} from "react-native";

class NavigationFooter extends React.Component {
  constructor(props) {
    super(props);
  }

  _onPressButton(type) {
    //   const { navigate } = this.props.navigation;
    //
    //   if (type === "explore") {
    //     navigate("Explore");
    //   } else if (type === "saved") {
    //     navigate("Saved");
    //   } else if (type === "hired") {
    //     navigate("Hired");
    //   } else if (type === "inbox") {
    //     navigate("Inbox");
    //   } else if (type === "profile") {
    //     navigate("Profile");
    //   }
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this._onPressButton("explore")}>
          <View style={styles.fullicon} marginLeft={15}>
            <FontAwesome name="search" style={styles.icons} />
            <Text>Explore</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton("saved")}>
          <View style={styles.fullicon}>
            <FontAwesome name="bookmark" style={styles.icons} />
            <Text>Saved</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton("hired")}>
          <View style={styles.fullicon}>
            <FontAwesome name="check" style={styles.icons} />
            <Text>Hired</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton("inbox")}>
          <View style={styles.fullicon}>
            <FontAwesome name="comment" style={styles.icons} />
            <Text>Inbox</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={this._onPressButton("profile")}>
          <View style={styles.fullicon} marginRight={15}>
            <FontAwesome name="user" style={styles.icons} />
            <Text>Profile</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: "black",
    borderTopWidth: 2,
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
    position: "absolute",
    bottom: 10,
    left: 0,
    right: 0
  },
  fullicon: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  icons: {
    fontSize: 40,
    margin: 10
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavigationFooter);
