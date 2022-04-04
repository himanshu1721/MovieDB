import { StyleSheet } from "react-native";
import { Colors } from "../../../themes";

const styles = StyleSheet.create({
  userScoreTextStyles: { color: Colors.white, fontWeight: "500", fontSize: 20 },
  itemSeparator: { width: 10 },
  container: { flex: 6, flexDirection: "row", alignItems: "center" },
});

export default styles;
