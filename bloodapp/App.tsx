import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "./app/screens/auth/Register";
import Login from "./app/screens/auth/Login";
import React from "react";
import BottomNav from "./app/navigation/BottomNav";
import Profile from "./app/screens/Profile";
import Search from "./app/screens/Search";
import DonarDetails from "./app/screens/DonarDetails";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Main" component={BottomNav} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="DonarDetails" component={DonarDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
