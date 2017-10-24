import React, { Component } from "react";
import { connect } from "react-redux";
import {
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  StatusBar,
  Alert,
  TouchableWithoutFeedback,
  TouchableHighlight
} from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import Dimensions from "Dimensions";
import StarRating from "../star_rating/star_rating";
import { ImagePicker } from "expo";
import { editUser } from "../../actions/session_actions";

class UserInfo extends Component {
  constructor(props) {
    super(props);

    this.floatToArray = this.floatToArray.bind(this);
    this.state = {
      image: null
    };
  }

  floatToArray() {
    let rating = this.props.rating;
    let arr = [];
    for (var i = 0; i < 5; i++) {
      arr.push(rating);
      rating--;
    }
    return arr;
  }

  _onPress(type) {
    const { navigate } = this.props.navigation;
    return () => {
      if (type === "ReviewIndex") {
        navigate("ReviewIndex", {
          reviews: this.props.reviews,
          prevStateKey: this.props.prevStateKey,
          navigation: this.props.navigation
        });
      }
    };
  }

  _pickProfileImage = async () => {
    let pickerResult = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });
    if (pickerResult.cancelled) {
      return;
    }

    const uriParts = pickerResult.uri.split(".");
    const fileType = uriParts[uriParts.length - 1];
    const formData = new FormData();
    formData.append("image", {
      uri: pickerResult.uri,
      name: `${this.props.currentUser.username}-profile-image.${fileType}`,
      type: `image/${fileType}`
    });
    this.props.editUser(this.props.currentUser.id, formData);
  };

  render() {
    const { currentUser, reviewsCount } = this.props;
    return (
      <View style={styles.userInfoContainer}>
        <View
          style={styles.profileImageContainer}>
          <Image
            style={styles.profileImage}
            source={{ uri: currentUser.image_url }}
            borderRadius={Dimensions.get("window").width * 0.25}
          />
          <TouchableHighlight
            style={styles.button}
            onPress={this._pickProfileImage}
            underlayColor={"#5C821A"}
          >
            <Text style={styles.buttonText}>Update Profile Image</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.userDetails}>
          <Text style={styles.userFullName}>
            {currentUser.username[0].toUpperCase() +
              currentUser.username.slice(1)}
          </Text>
          <View style={styles.starRating}>
            {this.floatToArray().map((score, i) => (
              <StarRating key={i} score={score} />
            ))}
          </View>
          <Text
            style={styles.reviewCount}
            onPress={this._onPress("ReviewIndex")}
          >
            {reviewsCount} Reviews
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  userInfoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    padding: 30,
    paddingBottom: 20,
    backgroundColor: "white"
  },
  profileImage: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    marginRight: 15
  },
  userDetails: {
    justifyContent: "center"
  },
  userFullName: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#5C821A",
    paddingBottom: 8,
    alignSelf: "center"
  },
  starRating: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 5
  },
  reviewCount: {
    textDecorationLine: "underline",
    color: "#5C821A",
    alignSelf: "center"
  },
  profileImageContainer: {
    justifyContent: "center",
    alignItems: "center"
  },
  button: {
    height: 20,
    backgroundColor: "#C6D166",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 3,
    padding: 10,
    marginTop: 10,
    marginRight: 10
  },
  buttonText: {
    fontSize: 16,
    color: "white"
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => ({
  editUser: (userId, image) => dispatch(editUser(userId, image))
});

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
