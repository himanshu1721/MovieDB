import React from "react";
import { View, Text } from "react-native";
import ProgressCircle from "react-native-progress-circle";
import { returnColor } from "../services";
import { moderateScale, Colors } from "../themes";
import { Strings } from "../constants";
import { styles } from "./styles/RatingCircleStyles";
interface RatingCircleProps {
  vote_average: number;
}

const RatingCircle = ({ vote_average }: RatingCircleProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <ProgressCircle
        percent={vote_average * 10}
        radius={moderateScale(25)}
        borderWidth={moderateScale(2.6, 0.25)}
        color={returnColor(vote_average).colour}
        shadowColor={returnColor(vote_average).shadow}
        bgColor={Colors.black}
      >
        <View style={styles.ratingStyle}>
          <Text style={styles.percentStyle}>{vote_average * 10}</Text>
          <Text style={styles.percentSymbolStyle}>{Strings.percentSymbol}</Text>
        </View>
      </ProgressCircle>
    </View>
  );
};

export default RatingCircle;
