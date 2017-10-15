import React from "react";
import { connect } from "react-redux";
import StarRating from '../star_rating/star_rating';
import {createReview} from '../../actions/review_actions';

import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  Image,
  Dimensions
} from "react-native";

class ReviewForm extends React.Component {
  static navigationOptions = ({navigation, screenProps}) => {
    return {
      headerTintColor: "#C6D166",
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      body: ""
    };

    this.intToArray = this.intToArray.bind(this);
    this.getStatefromChild = this.getStatefromChild.bind(this);
  }

  //convert rating into an array so each el in the array represents a star
  intToArray () {
    let rating = this.state.rating;
    let arr = [];
    for (var i = 0; i < 5; i++) {
      arr.push(rating);
      rating--;
    }
    return arr;
  }
  // get user input for star rating
  getStatefromChild(rating) {
    this.setState({
      rating: rating
    });
  }

  onSubmit() {
    const { navigate } = this.props.navigation;
    return () => {
      const formData = new FormData();
      formData.append("review[rating]", this.state.rating);
      formData.append("review[body]", this.state.body);
      formData.append("review[author_id]", this.props.currentUser.id);
      formData.append("review[recipient_id]", this.props.navigation.state.params );
      console.log(formData);
      this.props.createReview(formData).then((res) => {
        if (res.type) {
          navigate("Explore");
        }
      });
    };
  }

  // onSubmit() {
  //   return () => {
  //     const review = Object.assign({}, {
  //       rating: this.state.rating,
  //       body: this.state.body,
  //       author_id: this.props.currentUser.id,
  //       recipient_id: this.props.navigation.state.params
  //     });
  //     this.props.createReview(review);
  //   };
  // }

  render() {
    return(
      <View style={styles.container}>
        <Text>Rate & Review</Text>
        <Image
          style={styles.image}
          source={{uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Sushi_chef_Masayoshi_Kazato_02.JPG/1200px-Sushi_chef_Masayoshi_Kazato_02.JPG"}}
        />
      <Text>Overall Experience</Text>
      <Text>How would you rate you service?</Text>
        <View style={styles.starRating}>
        {this.intToArray().map(
          (score, i) => <StarRating
            key={i}
            pos={i+1}
            score={score}
            disabled={false}
            callBackFromParent={this.getStatefromChild}/>
      )}
        </View>
        <Text>Share Your Story!</Text>
        <TextInput
          onChangeText={(body) => this.setState({body})}
          placeholder="Tell others in the Artis community about your experience."
          style={styles.textfield}
          multiline={true}
          underlineColorAndroid={'transparent'}
          textAlignVertical={"top"}
        />
        <TouchableHighlight
          style={styles.button}
          onPress={this.onSubmit()}
          underlayColor={"#5C821A"}
        >
          <Text style={styles.buttonText}>
            Submit
          </Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignSelf: "stretch",
    backgroundColor: "white",
    padding: 10
  },
  starRating: {
    flexDirection: 'row',
  },
  input: {
    height: 50,
    backgroundColor: "#F7F7F7",
    padding: 4,
    marginTop: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray",
  },
  textfield: {
    height: 100,
    backgroundColor: "#F7F7F7",
    padding: 4,
    marginTop: 10,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "gray"
  },
  label: {
    color: "black"
  },
  image: {
    height: Dimensions.get('window').height*0.4
  },
  button: {
    height: 50,
    backgroundColor: "#C6D166",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3
  },
  buttonText: {
    fontSize: 18,
    color: "white"
  },
  title: {
    fontSize: 100,
    alignSelf: "center",
    fontWeight: "bold"
  }
});

const mapStateToProps = (state) => {
  return {
    currentUser: state.session.currentUser
  };
};

const mapDispatchToProps = (dispatch) => ({
  createReview: (review) => dispatch(createReview(review))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewForm);
