import { StyleSheet } from "react-native";
import { Colors, moderateScale } from "../../../themes";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: moderateScale(10),
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  titleTextStyle: {
    color: Colors.white,
    fontSize: moderateScale(20),
    fontWeight: "600",
  },
});

export default styles;
