import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home } from "../modules";
import { MovieDetail } from "../modules";
import { Navigations } from "../constants";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={Navigations.HOME}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name={Navigations.HOME} component={Home} />
        <Stack.Screen name={Navigations.MOVIE_DETAIL} component={MovieDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
