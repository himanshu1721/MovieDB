import { StyleSheet } from "react-native";
import { Colors, moderateScale } from "../../../themes";

const styles = StyleSheet.create({
  container: {
    width: moderateScale(140),
    flex: 1.5,
    height: moderateScale(35),
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
