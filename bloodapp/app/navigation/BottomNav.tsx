import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import Home from "../screens/Home";
import Chat from "../screens/Chat";

const Tab = createBottomTabNavigator();

const BottomNav = () => {
  return (
    <Tab.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.RED,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 55,
          paddingBottom: 5,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: "Chat",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbox-ellipses-outline" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNav;
