import React from "react";
import { View, Text } from "react-native";
import styles from "../styles/FilterButtonStyles";

interface FilterButtonProps {
  title: string;
}

const FilterButton = ({ title }: FilterButtonProps): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
    </View>
  );
};

export default FilterButton;
