import { StyleSheet } from "react-native";
import { moderateScale, Colors } from "../../../themes";

const styles = StyleSheet.create({
  imageStyles: {
    height: moderateScale(50, 0.4),
    width: moderateScale(69, 0.4),
  },
  subContainer: { flexDirection: "row" },
  menuIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleContainer: {
    height: "100%",
    flex: 4,
    justifyContent: "center",
    alignItems: "center",
  },
  searchIconContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menuIconStyles: { width: moderateScale(26), height: moderateScale(26) },
  searchIconStyle: { width: moderateScale(28), height: moderateScale(28) },
  container: {
    width: "100%",
    backgroundColor: Colors.prussianBlue,
    height: moderateScale(60),
    justifyContent: "center",
  },
});

export default styles;
