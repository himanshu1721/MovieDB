import { StyleSheet } from "react-native";
import { Colors } from "../../../themes";

const styles = StyleSheet.create({
  iconStyles: { width: 20, height: 20 },
  playTrailerTextStyles: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: "500",
  },
  container: {
    flex: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default styles;
