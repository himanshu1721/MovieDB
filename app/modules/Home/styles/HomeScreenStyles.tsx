import { StyleSheet } from "react-native";
import { Colors, verticalScale, moderateScale } from "../../../themes";

const styles = StyleSheet.create({
  trailerAndPopularSeparator: { height: verticalScale(30) },
  movieListContainer: { flex: 1, padding: moderateScale(15) },
  sectionAndTrailerListSeparator: { height: moderateScale(20) },
  sectionAndMovieListSeparator: { height: moderateScale(10) },
  sectionTitleBar: {
    zIndex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  scrollViewStyle: { flex: 1, backgroundColor: Colors.gallery },
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  fetchingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sectionSeparator: { height: verticalScale(10) },
  itemSeparator: { width: moderateScale(26) },
  container: {
    flex: 1,
  },
});

export default styles;
