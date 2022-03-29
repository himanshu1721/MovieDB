import React, { useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MovieActions, { MovieSelectors } from "../../sauce/redux/MovieRedux";
import HeaderComponent from "./components/Header";
import FilterButton from "./components/FilterButton";
import MovieCard from "./components/MovieCard";
import SectionTitle from "./components/SectionTitle";
import { Strings } from "../../constants";
import styles from "./styles/HomeScreenStyles";

const HomeScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(MovieSelectors.getPopular);
  const trendingMovies = useSelector(MovieSelectors.getTrending);
  const isError = useSelector(MovieSelectors.getError);
  const isLoading = useSelector(MovieSelectors.getFetch);

  useEffect(() => {
    dispatch(MovieActions.movieRequest());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      {isError && (
        <View style={styles.fetchingContainer}>
          <Text>{Strings.errorMessage}</Text>
        </View>
      )}
      {isLoading && (
        <View style={styles.fetchingContainer}>
          <ActivityIndicator />
        </View>
      )}
      {!isLoading && !isError && (
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollViewStyle}
        >
          <View style={styles.movieListContainer}>
            <View>
              <View style={styles.sectionTitleBar}>
                <SectionTitle title={Strings.whatsPopular} />
                <FilterButton title={Strings.streaming} />
              </View>
              <View style={styles.sectionStyle}>
                <FlatList
                  keyExtractor={(item) => `${item.id}`}
                  bounces={false}
                  horizontal
                  ItemSeparatorComponent={() => {
                    return <View style={styles.itemSeparator} />;
                  }}
                  showsHorizontalScrollIndicator={false}
                  data={popularMovies}
                  renderItem={({ item }) => {
                    return <MovieCard item={item} />;
                  }}
                />
              </View>
            </View>
          </View>
          <View style={styles.movieListContainer}>
            <View>
              <View style={styles.sectionTitleBar}>
                <SectionTitle title={Strings.trending} />
                <FilterButton title={Strings.today} />
              </View>
              <View style={styles.sectionSeparator} />
              <View style={styles.sectionStyle}>
                <FlatList
                  keyExtractor={(item) => `${item.id}`}
                  horizontal
                  bounces={false}
                  ItemSeparatorComponent={() => {
                    return <View style={styles.itemSeparator} />;
                  }}
                  showsHorizontalScrollIndicator={false}
                  data={trendingMovies}
                  renderItem={({ item }) => {
                    return <MovieCard item={item} />;
                  }}
                />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
