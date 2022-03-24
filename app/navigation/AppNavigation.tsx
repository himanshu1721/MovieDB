import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../modules";
import { Navigations } from "../constants";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name={Navigations.home} component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
