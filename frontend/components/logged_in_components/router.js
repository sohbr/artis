import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, Image, Button, View } from "react-native";

import Explore from "./explore";
import PostForm from "./../post/post_form";
import Saved from "./saved";
import Hired from "./hired";
import Inbox from "./inbox";
import Profile from "./profile";
import UserShow from "./../user_profile/user_show";
import Conversation from "./../messages/conversation";

export const ExploreStack = StackNavigator({
  Explore: {
    screen: Explore,
    navigationOptions: {
      title: "Explore"
    }
  },
  PostForm: {
    screen: PostForm,
    navigationOption: {
      title: "PostForm"
    }
  }
});

export const Tabs = TabNavigator({
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarLabel: "Explore",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="search" size={35} color={tintColor} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "Saved",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="bookmark" size={35} color={tintColor} />
      )
    }
  },
  Hired: {
    screen: Hired,
    navigationOptions: {
      tabBarLabel: "Hired",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="check" size={35} color={tintColor} />
      )
    }
  },
  Inbox: {
    screen: Conversation,
    navigationOptions: {
      tabBarLabel: "Inbox",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="comment" size={35} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome name="user" size={35} color={tintColor} />
      )
    }
  }
});
