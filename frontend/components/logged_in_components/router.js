import React from "react";
import { TabNavigator } from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, Image, Button, View } from "react-native";

import Explore from "./explore";
import Saved from "./saved";
import Hired from "./hired";
import Inbox from "./inbox";
import Profile from "./profile";

export const Tabs = TabNavigator({
  Explore: {
    screen: Explore,
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
    screen: Inbox,
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
