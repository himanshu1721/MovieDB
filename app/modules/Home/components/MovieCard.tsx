import React from "react";
import { View, Text, Image } from "react-native";
import RatingCircle from "../../../components/RatingCircle";
import { refactorDate } from "../../../services";
import { AppConstants } from "../../../constants";
import styles from "../styles/MovieCardStyles";

const MovieCard = ({ item }): JSX.Element => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.imageStyles}
        source={{
          uri: AppConstants.API_IMAGE + item?.poster_path,
        }}
      />
      <RatingCircle vote_average={item?.vote_average} />
      <View style={styles.separatorStyles} />
      <View style={styles.textContainer}>
        <Text style={styles.titleStyles}>
          {item?.title ?? item?.original_name}
        </Text>
        <Text style={styles.releaseDateStyles}>
          {refactorDate(item?.release_date ?? item?.first_air_date)}
        </Text>
      </View>
    </View>
  );
};

export default MovieCard;
