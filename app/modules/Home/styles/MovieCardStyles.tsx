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
    fontSize: moderateScale(13),
    fontWeight: "400",
  },
  titleStyles: {
    fontWeight: "700",
    color: Colors.black,
    fontSize: moderateScale(17),
  },
});

export default styles;
