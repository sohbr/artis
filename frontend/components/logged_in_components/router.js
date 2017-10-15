import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, Image, Button, View } from "react-native";

import Explore from "./explore";
import PostForm from "../post/post_form";
import Saved from "./saved";
import Hired from "./hired";
import Inbox from "./inbox";
import Profile from "./profile";
import UserShow from "./../user_profile/user_show";
import Conversation from "./../messages/conversation";
import PostShow from "../post/post_show";

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
  },
  PostShow: {
    screen: PostShow,
    navigationOption: {
      title: "PostShow"
    }
  }
});

export const Tabs = TabNavigator({
  Explore: {
    screen: ExploreStack,
    navigationOptions: {
      tabBarLabel: "Explore",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name="search"
          size={30}
          color={tintColor} />
      )
    }
  },
  Saved: {
    screen: Saved,
    navigationOptions: {
      tabBarLabel: "Saved",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name="address-card-o"
          size={33}
          color={tintColor} />
      )
    }
  },
  Hired: {
    screen: Hired,
    navigationOptions: {
      tabBarLabel: "Hired",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name="h-square"
          size={33}
          color={tintColor} />
      )
    }
  },
  Inbox: {
    screen: Conversation,
    navigationOptions: {
      tabBarLabel: "Inbox",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name="comments-o"
          size={40}
          color={tintColor} />
      )
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: "Profile",
      tabBarIcon: ({ tintColor }) => (
        <FontAwesome
          name="user-circle-o"
          size={32}
          color={tintColor} />
      )
    }
  }
},{
  tabBarOptions: {
    activeTintColor: "#5C821A",
    // inactiveTintColor: "#000",
    inactiveTintColor: "#C6D166",
    labelStyle: {
      fontWeight: "bold",
      fontSize: 11,
    },
    iconStyle: {
      borderColor: "#5C821A",
      borderWidth: 10
    },
    style: {
      height: 52.5,
      // backgroundColor: "#C6D166",
      borderTopWidth: 1,
      borderTopColor: "#C6D166"
    },
  },
  swipeEnabled: true,
});
