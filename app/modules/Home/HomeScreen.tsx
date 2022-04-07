import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import MovieActions, { MovieSelectors } from "../../sauce/redux/MovieRedux";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import HeaderComponent from "./components/Header";
import FilterButton from "./components/FilterButton";
import SectionTitle from "./components/SectionTitle";
import CustomFlatList from "./components/CustomFlatList";
import LatestTrailerBackgroundImage from "./components/LatestTrailerBGImage";
import LatestTrailerFlatList from "./components/LatestTrailerFlatList";
import FilterButtonOptions from "../../constants/FilterButtonOptions";
import { Strings } from "../../constants";
import styles from "./styles/HomeScreenStyles";

interface HomeScreenProps {
  navigation: NativeStackNavigationProp<any, any>;
}

const HomeScreen = ({ navigation }: HomeScreenProps): JSX.Element => {
  const dispatch = useDispatch();
  const latestTrailerMovie = useSelector(MovieSelectors.getLatestTrailerMovie);
  const latestTrailerTV = useSelector(MovieSelectors.getLatestTVShow);
  const latestTrailerRent = useSelector(MovieSelectors.getLatestForRent);
  const latestTrailerTheatre = useSelector(MovieSelectors.getLatestInTheatres);
  const popularMovies = useSelector(MovieSelectors.getPopularMovie);
  const popularTV = useSelector(MovieSelectors.getPopularTV);
  const popularTheatre = useSelector(MovieSelectors.getPopularMovieTheatre);
  const popularRent = useSelector(MovieSelectors.getPopularMovieRent);
  const trendingMoviesDay = useSelector(MovieSelectors.getTrendingDay);
  const trendingMoviesWeek = useSelector(MovieSelectors.getTrendingWeek);
  const freeMovies = useSelector(MovieSelectors.getFreeMovies);
  const freeTV = useSelector(MovieSelectors.getFreeTV);
  const isError = useSelector(MovieSelectors.getError);
  const isLoading = useSelector(MovieSelectors.getFetch);

  const [popular, setPopular] = useState(popularMovies);
  const [trending, setTrending] = useState(trendingMoviesDay);
  const [free, setFree] = useState(freeMovies);
  const [latest, setLatest] = useState(latestTrailerMovie);

  const [selectedElementLatest, setSelectedElementLatest] = useState(
    FilterButtonOptions.latestTrailerFilters[0].name
  );

  const [selectedElementPopular, setSelectedElementPopular] = useState(
    FilterButtonOptions.popularMoviesFilter[0].name
  );

  const [selectedElementTrending, setSelectedElementTrending] = useState(
    FilterButtonOptions.trendingFilter[0].name
  );

  const [selectedElementFreeToWatch, setSelectedElementFreeToWatch] = useState(
    FilterButtonOptions.freeToWatchFilter[0].name
  );

  const setLatestTrailerMediaList = (item: string) => {
    if (item === FilterButtonOptions.latestTrailerFilters[0].name) {
      setLatest(latestTrailerMovie);
    } else if (item === FilterButtonOptions.latestTrailerFilters[1].name) {
      setLatest(latestTrailerTV);
    } else if (item === FilterButtonOptions.latestTrailerFilters[2].name) {
      setLatest(latestTrailerRent);
    } else if (item === FilterButtonOptions.latestTrailerFilters[3].name) {
      setLatest(latestTrailerTheatre);
    }
  };

  const setPopularMediaList = (item: string) => {
    if (item === FilterButtonOptions.popularMoviesFilter[0].name) {
      setPopular(popularMovies);
    } else if (item === FilterButtonOptions.popularMoviesFilter[1].name) {
      setPopular(popularTV);
    } else if (item === FilterButtonOptions.popularMoviesFilter[2].name) {
      setPopular(popularRent);
    } else if (item === FilterButtonOptions.popularMoviesFilter[3].name) {
      setPopular(popularTheatre);
    }
  };

  const setFreeToWatchMediaList = (item: string) => {
    if (item === FilterButtonOptions.freeToWatchFilter[0].name) {
      setFree(freeMovies);
    } else if (item === FilterButtonOptions.freeToWatchFilter[1].name) {
      setFree(freeTV);
    }
  };

  const setTrendingMediaList = (item: string) => {
    if (item === FilterButtonOptions.trendingFilter[0].name) {
      setTrending(trendingMoviesDay);
    } else if (item === FilterButtonOptions.trendingFilter[1].name) {
      setTrending(trendingMoviesWeek);
    }
  };

  const onSelectLatest = (item: string): void => {
    setSelectedElementLatest(item);
    setLatestTrailerMediaList(item);
  };

  const onSelectPopular = (item: string): void => {
    setSelectedElementPopular(item);
    setPopularMediaList(item);
  };

  const onSelectTrending = (item: string): void => {
    setSelectedElementTrending(item);
    setTrendingMediaList(item);
  };

  const onSelectFreeToWatch = (item: string): void => {
    setSelectedElementFreeToWatch(item);
    setFreeToWatchMediaList(item);
  };

  useEffect((): void => {
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
            <LatestTrailerBackgroundImage imagePath={latest[0].backdrop_path} />
            <View style={styles.sectionTitleBar}>
              <SectionTitle isTrailer title={Strings.latestTrailers} />
              <FilterButton
                elements={FilterButtonOptions.latestTrailerFilters}
                onSelect={onSelectLatest}
                value={selectedElementLatest}
              />
            </View>
            <View style={styles.sectionAndTrailerListSeparator} />
            <LatestTrailerFlatList data={latest} />
          </View>
          <View style={styles.trailerAndPopularSeparator} />

          <View style={styles.movieListContainer}>
            <View style={styles.sectionTitleBar}>
              <SectionTitle title={Strings.whatsPopular} />
              <FilterButton
                elements={FilterButtonOptions.popularMoviesFilter}
                onSelect={onSelectPopular}
                value={selectedElementPopular}
              />
            </View>
            <View style={styles.sectionAndTrailerListSeparator} />
            <View style={styles.sectionStyle}>
              <CustomFlatList navigation={navigation} data={popular} />
            </View>
          </View>

          <View style={styles.movieListContainer}>
            <View style={styles.sectionTitleBar}>
              <SectionTitle title={Strings.freeToWatch} />
              <FilterButton
                elements={FilterButtonOptions.freeToWatchFilter}
                onSelect={onSelectFreeToWatch}
                value={selectedElementFreeToWatch}
              />
            </View>
            <View style={styles.sectionAndTrailerListSeparator} />
            <View style={styles.sectionStyle}>
              <CustomFlatList navigation={navigation} data={free} />
            </View>
          </View>

          <View style={styles.movieListContainer}>
            <View style={styles.sectionTitleBar}>
              <SectionTitle title={Strings.trending} />
              <FilterButton
                onSelect={onSelectTrending}
                value={selectedElementTrending}
                elements={FilterButtonOptions.trendingFilter}
              />
            </View>
            <View style={styles.sectionAndTrailerListSeparator} />
            <View style={styles.sectionStyle}>
              <CustomFlatList navigation={navigation} data={trending} />
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeScreen;
