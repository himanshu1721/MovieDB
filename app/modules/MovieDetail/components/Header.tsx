import React from "react";
import { View, Image } from "react-native";
import Images from "../../../assets/images";
import styles from "../styles/HeaderStyles";

const CustomHeader = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.backIconContainer}>
          <Image source={Images.back} style={styles.backIconStyles} />
        </View>
        <View style={styles.titleContainer}>
          <Image style={styles.imageStyles} source={Images.appLogo} />
        </View>
        <View style={styles.separateContainer} />
      </View>
    </View>
  );
};

export default CustomHeader;
