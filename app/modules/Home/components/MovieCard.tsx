import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import RatingCircle from "../../../components/RatingCircle";
import MenuCircle from "./MenuButtonCircle";
import { refactorDate } from "../../../services";
import { AppConstants } from "../../../constants";
import styles from "../styles/MovieCardStyles";

interface MovieCardProps {
  item: any;
  onTap: () => {};
}

const MovieCard = ({ item, onTap }: MovieCardProps): JSX.Element => {
  return (
    <TouchableOpacity
      onPress={onTap}
      activeOpacity={0.9}
      style={styles.container}
    >
      <Image
        style={styles.imageStyles}
        source={{
          uri: AppConstants.API_IMAGE + item?.poster_path,
        }}
      />
      <MenuCircle />
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
    </TouchableOpacity>
  );
};

export default MovieCard;
