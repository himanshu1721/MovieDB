import React from "react";
import { View, FlatList } from "react-native";
import MovieCard from "./MovieCard";
import styles from "../styles/CustomFlatListStyles";

const CustomFlatList = ({ data }) => {
  return (
    <FlatList
      keyExtractor={(item) => `${item.id}`}
      bounces={false}
      horizontal
      ItemSeparatorComponent={() => {
        return <View style={styles.itemSeparator} />;
      }}
      showsHorizontalScrollIndicator={false}
      data={data}
      renderItem={({ item }) => {
        return <MovieCard item={item} />;
      }}
    />
  );
};

export default CustomFlatList;
