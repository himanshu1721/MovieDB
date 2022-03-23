import React from "react";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { Navigations, Strings } from "../../constants";
import styles from "./styles/HomeScreenStyles";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{Strings.homeScreenText}</Text>
      <TouchableOpacity
        style={styles.nextScreenButtonStyles}
        onPress={() => navigation.navigate(Navigations.movieDetail)}
      >
        <Text>{Strings.homeScreenNavigationButtonTitle}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
