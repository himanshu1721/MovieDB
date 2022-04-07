import { StyleSheet } from "react-native";
import { Colors, moderateScale, verticalScale } from "../../../themes";

const styles = StyleSheet.create({
  titleStyles: {
    letterSpacing: moderateScale(0.8),
    color: Colors.white,
    fontSize: moderateScale(22),
    fontWeight: "600",
  },
  imageAndTitleSeparator: { height: verticalScale(10) },
  playButtonStyles: { width: moderateScale(50), height: moderateScale(50) },
  imageStyles: {
    width: moderateScale(300),
    height: moderateScale(180),
    justifyContent: "center",
    alignItems: "center",
  },
  imageBorderStyle: { borderRadius: moderateScale(6) },
  container: {
    width: moderateScale(300),
    alignItems: "center",
  },
});

export default styles;
