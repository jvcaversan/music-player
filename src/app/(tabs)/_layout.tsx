import { View, Text, StatusBar } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  FontAwesome,
  FontAwesome6,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

const Layout = () => {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "black" }}>
      <Tabs.Screen
        name="favorites"
        options={{
          tabBarIcon: () => <AntDesign name="hearto" size={24} color="black" />,
          headerTitle: "Favoritas",
          tabBarLabel: "Favoritas",
        }}
      />
      <Tabs.Screen
        name="playlist"
        options={{
          tabBarIcon: () => (
            <MaterialCommunityIcons
              name="playlist-music"
              size={24}
              color="black"
            />
          ),
          headerTitle: "Playlists",
          tabBarLabel: "Playlists",
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: () => (
            <FontAwesome name="music" size={24} color="black" />
          ),
          headerTitle: "Músicas",
          tabBarLabel: "Músicas",
        }}
      />
      <Tabs.Screen
        name="artists"
        options={{
          tabBarIcon: () => (
            <FontAwesome6 name="people-group" size={24} color="black" />
          ),
          headerTitle: "Artistas",
          tabBarLabel: "Artistas",
        }}
      />
    </Tabs>
  );
};

export default Layout;
