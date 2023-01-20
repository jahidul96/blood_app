import { Dimensions, useWindowDimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export { width as WIDTH, height as HEIGHT };
