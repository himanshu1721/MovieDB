import { StyleSheet } from "react-native";
import { Colors, verticalScale, moderateScale } from "../../../themes";

const styles = StyleSheet.create({
  movieListContainer: { flex: 1, padding: 15 },
  sectionTitleBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  scrollViewStyle: { flex: 1, backgroundColor: Colors.gallery },
  sectionStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  sectionSeparator: { height: verticalScale(10) },
  itemSeparator: { width: moderateScale(26) },
  container: {
    flex: 1,
  },
});

export default styles;
