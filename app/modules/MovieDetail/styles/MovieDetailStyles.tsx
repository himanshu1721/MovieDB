import { StyleSheet } from "react-native";
import { Colors } from "../../../themes";

const styles = StyleSheet.create({
  nextScreenButtonStyles: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: Colors.pink,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
});

export default styles;
