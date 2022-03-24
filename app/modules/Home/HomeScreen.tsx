import React from "react";
import { View, FlatList, SafeAreaView, ScrollView } from "react-native";
import HeaderComponent from "./components/Header";
import FilterButton from "./components/FilterButton";
import MovieCard from "./components/MovieCard";
import SectionTitle from "./components/SectionTitle";
import { mostPopular, trendingMovie } from "../../constants/DummyData";
import { Strings } from "../../constants";
import styles from "./styles/HomeScreenStyles";

const movies = mostPopular;
const trendingMovies = trendingMovie;

const HomeScreen = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
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
                bounces={false}
                horizontal
                ItemSeparatorComponent={() => {
                  return <View style={styles.itemSeparator} />;
                }}
                showsHorizontalScrollIndicator={false}
                data={movies}
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
    </SafeAreaView>
  );
};

export default HomeScreen;
