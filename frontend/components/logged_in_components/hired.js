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
        <Text>Hired Page</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    flex: 1
  }
});

export default Hired;
