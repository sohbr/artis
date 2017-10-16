import { connect } from "react-redux";
import React from "react";
import PostIndexItem from "./post_index_item";
import { getAllPosts, RECEIVE_POSTS } from "../../actions/post_actions";
import { selectPostsByCategory } from "../../reducers/selectors";

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions,
  ActivityIndicator
} from "react-native";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    if (this.scrollView) {
      this.scrollView.scrollTo({ x: 0, y: 0, animated: false });
    }
  }

  render() {
    let display = null;
    if (Object.keys(this.props.posts).length > 0) {
      display = Object.values(this.props.posts)
        .reverse()
        .map((post, i) => {
          return (
            <PostIndexItem
              key={`post-item-${i}`}
              post={post}
              navigation={this.props.navigation}
            />
          );
        });
    } else {
      display = (
        <Text style={styles.sub}>
          {"Sorry!\nWe couldn't find what you were looking for."}
        </Text>
      );
    }

    if (this.props.loading) {
      return <ActivityIndicator color={"#C6D166"} size={"large"} />;
    } else {
      return (
        <ScrollView
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ref={scrollView => {
            this.scrollView = scrollView;
          }}
        >
          {display}
        </ScrollView>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white"
  },
  sub: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 16,
    color: "#5C821A",
    padding: 20
  }
});

const mapStateToProps = state => {
  return {
    posts: state.entities.posts
  };
};

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
