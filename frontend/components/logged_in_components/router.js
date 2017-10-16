import React from "react";
import { TabNavigator, StackNavigator } from "react-navigation";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, Image, Button, View, Platform } from "react-native";
import { getAllPosts } from "../../actions/post_actions";
import { connect } from "react-redux";
import Explore from "./explore";
import PostForm from "../post/post_form";
import Saved from "./saved";
import Hired from "./hired";
import Inbox from "./inbox";
import Profile from "./profile";
import UserShow from "./../user_profile/user_show";

import MessageIndex from "./../messages/message_index";
import ConversationIndex from "./../messages/conversation_index";

// import Conversation from "./../messages/conversation";
import PostShow from "../post/post_show";

export const ExploreStack = StackNavigator(
  {
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
  },
  {
    mode: "modal"
  }
);

export const InboxStack = StackNavigator({
  Inbox: {
    screen: ConversationIndex,
    navigationOptions: {
      title: "Inbox"
    }
  },
  MessageIndex: {
    screen: MessageIndex,
    navigationOptions: {
      title: "MessageIndex"
    }
  }
});

export const Tabs = TabNavigator(
  {
    Explore: {
      screen: ExploreStack,
      navigationOptions: {
        tabBarLabel: "Explore",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="search" size={30} color={tintColor} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "Saved",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="address-card-o" size={33} color={tintColor} />
        )
      }
    },
    Hired: {
      screen: Hired,
      navigationOptions: {
        tabBarLabel: "Hired",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="h-square" size={33} color={tintColor} />
        )
      }
    },
    Inbox: {
      screen: InboxStack,
      navigationOptions: {
        tabBarLabel: "Inbox",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="comments-o" size={40} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        tabBarIcon: ({ tintColor }) => (
          <FontAwesome name="user-circle-o" size={32} color={tintColor} />
        )
      }
    }
  },
  {
    tabBarPosition: "bottom",
    tabBarOptions: {
      activeTintColor: "#5C821A",
      inactiveTintColor: "#C6D166",
      labelStyle: {
        fontWeight: "bold",
        fontSize: 11
      },
      iconStyle:
        Platform.OS === "ios"
          ? {}
          : {
              height: 32,
              width: 40
            },
      showIcon: true,
      style: {
        height: Platform.OS === "ios" ? 53 : 65,
        borderTopWidth: 1,
        borderTopColor: "#C6D166",
        backgroundColor: "#F7F7F7",
        borderBottomWidth: 0
      },
      indicatorStyle: {
        height: 0,
        padding: 0,
        margin: 0
      }
    },
    swipeEnabled: true
  }
);
