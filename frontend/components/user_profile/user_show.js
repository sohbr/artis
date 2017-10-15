import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from 'Dimensions';
import UserInfo from "./user_info";
import UserPhotosIndex from "./user_photos_index";
import { logout } from '../../actions/session_actions';
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  StackNavigator,
  Button
} from 'react-native';

class UserShow extends Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      header: null
    };
  }
  constructor(props) {
    super(props);
  }

  handleLogout() {
    return () => {
      this.props.logout(this.props.currentUser);
    };
  }

  render() {
    const userImg = "http://www.behindthevoiceactors.com/_img/chars/minoru-mineta--46.4.jpg";

    return(
      <ScrollView style={{ paddingTop: 30}}>
        <Button
          onPress={this.handleLogout()}
          title={"Logout"}
        />
        <UserInfo userImg={userImg} navigation={this.props.navigation} style={styles.userInfo}/>
        <View style={styles.hr}/>
        <UserPhotosIndex/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
  },
  userInfo: {
    justifyContent: "center",
  },
  hr: {
    width: Dimensions.get('window').width*1,
    justifyContent: 'center',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
});


const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
  logout: (user) => dispatch(logout(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserShow);
