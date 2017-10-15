import { connect } from 'react-redux';
import React from 'react';
import PostIndexItem from './post_index_item';
import { getAllPosts, RECEIVE_POSTS } from '../../actions/post_actions';

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
    this.state = {
      loading: false
    };
  }

  componentWillMount() {
    this.setState({loading: true});
    this.props.getAllPosts().then((res) => {
      if (res && res.type === RECEIVE_POSTS) {
        this.setState({loading: false});
      }
    });
  }

  render() {
    let display = null;
    if (Object.keys(this.props.posts).length > 0) {
<<<<<<< HEAD
      display = Object.values(this.props.posts).map((post, i) => {
        return <PostIndexItem key={`post-item-${i}`} post={post} />;
=======
      display = Object.values(this.props.posts).reverse().map((post,i) => {
        return <PostIndexItem key={`post-item-${i}`} post={post} navigation={this.props.navigation}/>;
>>>>>>> 03432d9f146981481ad039ec7e8f1459a002d4af
      });
    } else {
      display = <Text>Loading</Text>;
    }
<<<<<<< HEAD
    return <ScrollView style={styles.container}>{display}</ScrollView>;
=======
    if (this.state.loading) {
      return <ActivityIndicator color={"#C6D166"} size={"large"}/>;
    } else {
      return (
        <ScrollView
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          >
          {display}
        </ScrollView>
      );
    }
>>>>>>> 03432d9f146981481ad039ec7e8f1459a002d4af
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "white"
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
