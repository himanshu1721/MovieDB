import { StyleSheet } from "react-native";
import { Colors, moderateScale, verticalScale } from "../../../themes";

const styles = StyleSheet.create({
  filterOptionsTextStyle: {
    fontSize: moderateScale(18),
    fontWeight: "600",
    marginVertical: verticalScale(2),
  },
  containerBetweenTextAndIcon: { width: moderateScale(5) },
  arrowStyles: {
    width: moderateScale(17),
    height: moderateScale(19),
  },
  dropdown: {
    width: "100%",
    overflow: "visible",
    borderWidth: moderateScale(1.4),
    borderBottomRightRadius: moderateScale(18),
    borderBottomLeftRadius: moderateScale(18),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(8),
    backgroundColor: Colors.riptide,
  },
  container: {
    flexDirection: "row",
    width: moderateScale(140),
    flex: 1.8,
    minHeight: moderateScale(35),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: moderateScale(20),
    backgroundColor: Colors.prussianBlue,
  },
  titleStyle: {
    fontSize: moderateScale(16),
    fontWeight: "600",
    color: Colors.emerald,
  },
});

export default styles;
