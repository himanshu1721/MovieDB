import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/MovieTitleStyles";

interface MovieTitleProps {
  title: string;
}

const MovieTitle = ({ title }: MovieTitleProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleTextStyle}>{title}</Text>
    </View>
  );
};

export default MovieTitle;
