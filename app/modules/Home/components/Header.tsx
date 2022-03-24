import React from "react";
import { View, Image } from "react-native";
import Images from "../../../assets/images";
import styles from "../styles/HeaderStyles";

const CustomHeader = (): JSX.Element => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.menuIconContainer}>
          <Image source={Images.menuIcon} style={styles.menuIconStyles} />
        </View>
        <View style={styles.titleContainer}>
          <Image style={styles.imageStyles} source={Images.appLogo} />
        </View>
        <View style={styles.searchIconContainer}>
          <Image style={styles.searchIconStyle} source={Images.searchIcon} />
        </View>
      </View>
    </View>
  );
};

export default CustomHeader;
