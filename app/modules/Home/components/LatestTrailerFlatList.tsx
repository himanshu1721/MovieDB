import React from "react";
import { View, FlatList } from "react-native";
import TrailerCard from "./LatestTrailerCard";
import styles from "../styles/LatestTrailerFlatListStyles";

const CustomTrailerFlatList = ({ data }: any): JSX.Element => {
  return (
    <FlatList
      bounces={false}
      showsHorizontalScrollIndicator={false}
      initialNumToRender={8}
      keyExtractor={(item) => `${item.id}`}
      ListHeaderComponent={() => <View style={styles.separatorView} />}
      ItemSeparatorComponent={() => <View style={styles.separatorView} />}
      horizontal={true}
      data={data}
      renderItem={({ item }): JSX.Element => {
        return <TrailerCard item={item} />;
      }}
    />
  );
};

export default CustomTrailerFlatList;
