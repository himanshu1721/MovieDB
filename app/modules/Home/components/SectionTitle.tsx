import React from "react";
import { Text, StyleSheet } from "react-native";
import { moderateScale, Colors } from "../../../themes";

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return <Text style={styles.titleStyle}>{title}</Text>;
};

const styles = StyleSheet.create({
  titleStyle: {
    flex: 3,
    fontSize: moderateScale(22),
    fontWeight: "600",
    color: Colors.black,
  },
});

export default SectionTitle;
