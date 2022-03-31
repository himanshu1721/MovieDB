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
import HeaderComponent from "./components/Header";
import FilterButton from "./components/FilterButton";
import SectionTitle from "./components/SectionTitle";
import CustomFlatList from "./components/CustomFlatList";
import FilterButtonOptions from "../../constants/FilterButtonOptions";
import { Strings } from "../../constants";
import styles from "./styles/HomeScreenStyles";

const HomeScreen = (): JSX.Element => {
  const dispatch = useDispatch();
  const popularMovies = useSelector(MovieSelectors.getPopular);
  const trendingMovies = useSelector(MovieSelectors.getTrending);
  const freeMovies = useSelector(MovieSelectors.getFreeMovies);
  const isError = useSelector(MovieSelectors.getError);
  const isLoading = useSelector(MovieSelectors.getFetch);

  const [selectedElementPopular, setSelectedElementPopular] = useState(
    FilterButtonOptions.popularMoviesFilter[0].name
  );
  const [selectedElementTrending, setSelectedElementTrending] = useState(
    FilterButtonOptions.trendingFilter[0].name
  );
  const [selectedElementFreeToWatch, setSelectedElementFreeToWatch] = useState(
    FilterButtonOptions.freeToWatchFilter[0].name
  );

  const onSelectPopular = (item: string): void => {
    setSelectedElementPopular(item);
  };

  const onSelectTrending = (item: string): void => {
    setSelectedElementTrending(item);
  };
  const onSelectFreeToWatch = (item: string): void => {
    setSelectedElementFreeToWatch(item);
  };

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
                <FilterButton
                  elements={FilterButtonOptions.popularMoviesFilter}
                  onSelect={onSelectPopular}
                  value={selectedElementPopular}
                />
              </View>
              <View style={styles.sectionStyle}>
                <CustomFlatList data={popularMovies} />
              </View>
            </View>
          </View>

          <View style={styles.movieListContainer}>
            <View>
              <View style={styles.sectionTitleBar}>
                <SectionTitle title={Strings.freeToWatch} />
                <FilterButton
                  elements={FilterButtonOptions.freeToWatchFilter}
                  onSelect={onSelectFreeToWatch}
                  value={selectedElementFreeToWatch}
                />
              </View>
              <View style={styles.sectionStyle}>
                <CustomFlatList data={freeMovies} />
              </View>
            </View>
          </View>

          <View style={styles.movieListContainer}>
            <View>
              <View style={styles.sectionTitleBar}>
                <SectionTitle title={Strings.trending} />
                <FilterButton
                  onSelect={onSelectTrending}
                  value={selectedElementTrending}
                  elements={FilterButtonOptions.trendingFilter}
                />
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
