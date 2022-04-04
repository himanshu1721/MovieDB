import { StyleSheet } from "react-native";
import { Colors, moderateScale } from "../../themes";

export const styles = StyleSheet.create({
  ratingStyle: { flexDirection: "row", alignItems: "center" },
  percentStyle: {
    fontSize: moderateScale(19),
    fontWeight: "700",
    color: Colors.white,
  },
  percentSymbolStyle: {
    color: Colors.white,
    fontWeight: "700",
    fontSize: moderateScale(9),
    opacity: 0.8,
  },
  container: {
    position: "absolute",
    left: moderateScale(10),
    top: moderateScale(190),
    width: moderateScale(54),
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(54),
    borderRadius: moderateScale(27),
    backgroundColor: Colors.black,
  },

  containerMovieDetailScreen: {
    width: moderateScale(54),
    justifyContent: "center",
    alignItems: "center",
    height: moderateScale(54),
    borderRadius: moderateScale(27),
    backgroundColor: Colors.black,
  },
});
