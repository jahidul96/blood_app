import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";

const Post = () => {
  const navigation = useNavigation<Nav>();
  return (
    <View style={styles.container}>
      {/* donar profile */}
      <View style={styles.profile}>
        <Ionicons name="person-circle" size={25} />
        <Text style={styles.name}>Akash</Text>
      </View>
      <View>
        <Text>
          we need a blood donar for a mother. it's urgent. if anyone can help
          please do call on my number 0193949955. address is ctg, hospital
        </Text>
      </View>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: AppColors.WHITE,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: AppColors.RED,
    borderRadius: 10,
  },

  profile: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 8,
  },
});
