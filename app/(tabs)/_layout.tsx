import React from "react";
import { Tabs } from "expo-router";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Colors, tintColor } from "@/constants";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: "SpaceMono",
          fontWeight: "600",
        },
        tabBarActiveTintColor: tintColor,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <MaterialCommunityIcons
              name={focused ? "home" : "home-outline"}
              size={28}
              color={color}
            />
          ),
          tabBarLabel: "Home",
        }}
      />

      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "person-circle-sharp" : "person-circle-outline"}
              size={28}
              color={color}
            />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
