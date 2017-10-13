import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, Image, Button, View } from "react-native";

import UserShow from "./user_show";
import ReviewIndex from "../reviews/reviews_index";
import ReviewForm from "../reviews/review_form";

export const UserProfileStack = StackNavigator({
  UserShow: {
    screen: UserShow,
    navigationOptions: {
      title: "Profile"
    }
  },
  ReviewIndex: {
    screen: ReviewIndex,
    navigationOptions: {
      title: "Reviews"
    }
  },
  ReviewForm: {
    screen: ReviewForm,
    navigationOptions: {
      title: "ReviewForm"
    }
  },
});
