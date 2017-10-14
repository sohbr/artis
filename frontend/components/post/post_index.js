import { connect } from 'react-redux';
import React from 'react';
import PostIndexItem from './post_index_item';
import { getAllPosts } from '../../actions/post_actions';

import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions
} from "react-native";

class PostIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.getAllPosts();
  }

  render() {
    let display = null;
    if (Object.keys(this.props.posts).length > 0) {
      display = Object.values(this.props.posts).map((post,i) => {
        return <PostIndexItem key={`post-item-${i}`} post={post} navigation={this.props.navigation}/>;
      });
    } else {
      display = <Text>Loading</Text>;
    }
    return (
      <ScrollView style={styles.container}>
        {display}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white"
  },
});

const mapStateToProps = (state) => {
  return {
    posts: state.entities.posts
  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostIndex);
