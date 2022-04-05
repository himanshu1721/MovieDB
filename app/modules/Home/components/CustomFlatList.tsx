import React from "react";
import { View, FlatList } from "react-native";
import MovieCard from "./MovieCard";
import { Navigations } from "../../../constants";
import styles from "../styles/CustomFlatListStyles";

const CustomFlatList = ({ data, navigation }) => {
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
        return (
          <MovieCard
            onTap={() =>
              navigation?.navigate(Navigations.movieDetail, {
                movieID: item?.id,
              })
            }
            item={item}
          />
        );
      }}
    />
  );
};

export default CustomFlatList;
