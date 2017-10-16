import React from "react";
import {
  View,
  Text,
  StyleSheet
} from "react-native";
import BookmarkedPostsIndex from '../post/bookmarked_posts_index';

class Saved extends React.Component {
  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      header: null
    };
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>Saved Posts</Text>
        <BookmarkedPostsIndex navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    paddingTop: 24,
    paddingLeft: 30,
    paddingRight: 30
  },
  header: {
    fontSize: 24,
    padding: 10,
    paddingBottom: 15,
    alignSelf: "center",
    fontWeight: "bold",
    color: "#C6D166"
  }
});
export default Saved;
