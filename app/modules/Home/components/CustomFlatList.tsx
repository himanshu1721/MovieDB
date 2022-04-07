import React from "react";
import { View, FlatList } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import MovieCard from "./MovieCard";
import { Navigations } from "../../../constants";
import styles from "../styles/CustomFlatListStyles";

interface CustomFlatListProps {
  data: any;
  navigation: NativeStackNavigationProp<any, any>;
}

const CustomFlatList = ({ data, navigation }: CustomFlatListProps) => {
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
            onTap={() => {
              const params = item?.original_title
                ? {
                    movieID: item?.id,
                    tvID: null,
                  }
                : {
                    movieID: null,
                    tvID: item?.id,
                  };

              navigation?.navigate(Navigations.MOVIE_DETAIL, params);
            }}
            item={item}
          />
        );
      }}
    />
  );
};

export default CustomFlatList;
