import React from "react";
import { ImageBackground } from "react-native";
import { AppConstants } from "../../../constants";
import styles from "../styles/LatestTrailerBackgroundImageStyles";

interface LatestTrailerBackgroundImageProps {
  imagePath: string;
}

const LatestTrailerBackgroundImage = ({
  imagePath,
}: LatestTrailerBackgroundImageProps): JSX.Element => {
  return (
    <ImageBackground
      style={styles.container}
      source={{
        uri: `${AppConstants.API_IMAGE}${imagePath}`,
      }}
    />
  );
};

export default LatestTrailerBackgroundImage;
