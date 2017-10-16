import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";

class Hired extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Hired Posts</Text>
        <Text style={styles.sub}>You haven't had any hires yet.</Text>
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
  header: {
    fontSize: 24,
    padding: 10,
    paddingBottom: 15,
    alignSelf: "center",
    color: "#C6D166"
  },
  sub: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    color: "#5C821A",
    padding: 20
  }
});

export default Hired;
