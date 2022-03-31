import { StyleSheet } from "react-native";
import { moderateScale, Colors } from "../../../themes";

const styles = StyleSheet.create({
  container: {
    marginTop: moderateScale(10),
    width: moderateScale(140),
  },
  imageStyles: {
    width: moderateScale(145),
    height: moderateScale(217),
    borderRadius: 6,
  },
  textContainer: { padding: 5 },
  separatorStyles: { height: moderateScale(30) },
  releaseDateStyles: {
    color: Colors.gray,
    fontSize: moderateScale(15),
    fontWeight: "500",
  },
  titleStyles: {
    fontWeight: "600",
    color: Colors.black,
    fontSize: moderateScale(18),
  },
});

export default styles;
