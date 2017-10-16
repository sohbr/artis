import { connect } from 'react-redux';
import React from 'react';
import PostIndexItem from './post_index_item';
import { getBookmarkedPosts, RECEIVE_BOOKMARKED_POSTS } from '../../actions/post_actions';
import { selectPostsById } from '../../reducers/selectors';

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

class BookmarkedPostsIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  componentWillMount() {
    this.setState({loading: true});
    this.props.getBookmarkedPosts(this.props.currentUser.token).then((res) => {
      if (res && res.type === RECEIVE_BOOKMARKED_POSTS) {
        this.setState({loading: false});
      }
    });
  }

  compnentWillUpdate() {
    console.log("test");
  }

  componentWillReceiveProps(newProps) {
    console.log("testing");
  }

  render() {
    let display = null;
    const { bookmarks } = this.props;
    console.log(this.props.navigation);
    if ( bookmarks && Object.keys(bookmarks).length > 0) {
      display = Object.values(bookmarks).map((post,i) => {
        return <PostIndexItem key={`post-item-${i}`} post={post} navigation={this.props.navigation}/>;
      });
    } else {
      display = <Text style={styles.sub}>You have no saved posts.</Text>;
    }
    if (this.state.loading) {
      return <ActivityIndicator color={"#C6D166"} size={"large"}/>;
    } else {
      return (
        <ScrollView
          style={styles.container}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ref={(scrollView) => { this.scrollView = scrollView; }}
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
    fontSize: 16,
    color: "#5C821A",
    padding: 20
  }
});

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    bookmarks: state.entities.bookmarks
  };
};

const mapDispatchToProps = dispatch => ({
  getBookmarkedPosts: (token) => dispatch(getBookmarkedPosts(token))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookmarkedPostsIndex);
