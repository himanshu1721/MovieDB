import React from "react";
import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import images from "../../../assets/images";
import MenuCircle from "./MenuButtonCircle";
import { AppConstants } from "../../../constants";
import styles from "../styles/LatestTrailerCardStyles";

interface TVProps {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  vote_count: number;
  title: null;
}

interface MovieProps {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  original_name: null;
}

interface TrailerCardProps {
  item: MovieProps | TVProps;
}

const TrailerCard = ({ item }: TrailerCardProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <ImageBackground
        imageStyle={styles.imageBorderStyle}
        source={{
          uri: `${AppConstants.API_IMAGE}${item?.backdrop_path}`,
        }}
        style={styles.imageStyles}
      >
        <MenuCircle />
        <TouchableOpacity activeOpacity={0.8}>
          <Image style={styles.playButtonStyles} source={images.play} />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.imageAndTitleSeparator} />
      <View>
        <Text style={styles.titleStyles}>
          {item?.title ?? item?.original_name}
        </Text>
      </View>
    </View>
  );
};

export default TrailerCard;
