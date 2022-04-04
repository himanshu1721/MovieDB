import React from "react";
import { View, Text } from "react-native";
import RatingCircle from "../../../components/RatingCircle";
import { Strings } from "../../../constants";
import styles from "../styles/UserScoreStyles";

interface UserScoreType {
  vote_average: number;
}

const UserScore = ({ vote_average }: UserScoreType): JSX.Element => {
  return (
    <View style={styles.container}>
      <RatingCircle vote_average={vote_average} isMovieDetail={true} />
      <View style={styles.itemSeparator} />
      <Text style={styles.userScoreTextStyles}>{Strings.userScore}</Text>
    </View>
  );
};

export default UserScore;
