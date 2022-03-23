import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Strings } from "../../constants";
import styles from "./styles/MovieDetailStyles";

const MovieDetail = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>{Strings.movieDetailScreenText}</Text>
      <TouchableOpacity
        style={styles.nextScreenButtonStyles}
        onPress={() => navigation.goBack()}
      >
        <Text>{Strings.movieDetailNavigationButtonTitle}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MovieDetail;
