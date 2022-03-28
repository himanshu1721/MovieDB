import React, { useEffect } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MovieActions, { MovieSelectors } from "../../sauce/redux/MovieRedux";
import HeaderComponent from "./components/Header";
import FilterButton from "./components/FilterButton";
import SectionTitle from "./components/SectionTitle";
import { Strings } from "../../constants";
import styles from "./styles/HomeScreenStyles";
import CustomFlatList from "./components/CustomFlatList";

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
                <CustomFlatList data={popularMovies} />
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
                <CustomFlatList data={trendingMovies} />
              </View>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
