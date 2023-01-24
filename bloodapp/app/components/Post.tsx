import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { AppColors } from "../utils/AppColors";
import { useNavigation } from "@react-navigation/native";
import { Nav, postInterface } from "../typeInterfaces/typeInterfaces";

interface PropsInterface {
  post: postInterface;
}
const Post: FC<PropsInterface> = ({ post }) => {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      {/* donar profile */}
      <View style={styles.profile}>
        <Ionicons name="person-circle" size={28} />
        <Text style={styles.name}>{post?.author?.name}</Text>
      </View>
      <View style={styles.postDecContainer}>
        <Text style={styles.captionText}>{post?.caption}</Text>
        <View style={styles.rowStyle}>
          <FontAwesome name="address-book" size={16} />
          <Text style={styles.addressText}>{post?.address}</Text>
        </View>

        <View style={styles.rowStyle}>
          <Ionicons name="call" size={16} />
          <Text style={styles.addressText}>{post?.phone}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text>{post?.createdAt.slice(0, 10)}</Text>
        </View>
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
    marginLeft: 5,
    fontSize: 16,
    fontWeight: "600",
  },

  postDecContainer: {
    marginTop: 5,
  },
  rowStyle: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
  },
  captionText: {
    fontSize: 15,
    fontWeight: "600",
  },
  addressText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  dateContainer: {
    marginTop: 8,
    alignItems: "flex-end",
  },
});
