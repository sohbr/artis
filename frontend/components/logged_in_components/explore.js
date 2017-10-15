import React from "react";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { connect } from "react-redux";
import PostIndex from '../post/post_index';
import Search from 'react-native-search-box';
import PostFilter from '../post/post_filter';
import {searchPosts} from '../../actions/post_actions';

import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight,
  Image,
  Button,
  ActivityIndicator
} from "react-native";

class Explore extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      header: null,
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      searchTerm: null,
      loadingSearch: false
    }
  }

  buttonPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "PostForm") {
        navigate("PostForm");
      }
    };
  }

  updateSearch() {
    return (searchTerm) => {
      this.setState({searchTerm})
    }
  }

  handleSubmit() {
    return () => {
      const {searchTerm} = this.state;
      this.setState({loadingSearch: true})
      this.props.searchPosts(searchTerm)
        .then(() => {
          this.setState({loadingSearch: false})
        });
    }
  }

  render() {
    return (
      <View style={styles.superContainer}>
        <Search
          backgroundColor={"#C6D166"}
          placeholderTextColor={"#0F1B07"}
          tintColorSearch={"#5C821A"}
          tintColorDelete={"#5C821A"}
          inputBorderRadius={3}
          searchIconCollapsedMargin={25}
          searchIconExpandedMargin={12.5}
          placeholderCollapsedMargin={15}
          placeholderExpandedMargin={25}
          shadowVisible={false}
          onChangeText={this.updateSearch()}
          onSearch={this.handleSubmit()}
        />
        <PostFilter />
        <View style={styles.container}>
          <TouchableHighlight
            style={styles.button}
            onPress={this.buttonPress("PostForm")}
            underlayColor={"#5C821A"}
            >
            <Text style={styles.buttonText}>Create a Post</Text>
          </TouchableHighlight>
          {
            this.state.loading ?
            <ActivityIndicator color={"#C6D166"} size={"large"}/> :
            <PostIndex navigation={this.props.navigation}/>
          }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  superContainer: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 24
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingLeft: 30,
    paddingRight: 30
  },
  search: {
    backgroundColor: "#C6D166"
  },
  button: {
    marginTop: 10,
    height: 50,
    backgroundColor: "#C6D166",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    borderRadius: 3,
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  }
});

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  searchPosts: (searchTerm) => dispatch(searchPosts(searchTerm))
});

export default connect(mapStateToProps, mapDispatchToProps)(Explore);
