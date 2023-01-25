import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { AppColors } from "../utils/AppColors";
import { useNavigation } from "@react-navigation/native";
import { Nav, postInterface } from "../typeInterfaces/typeInterfaces";

interface PropsInterface {
  post: postInterface;
}
const SinglePost: FC<PropsInterface> = ({ post }) => {
  const navigation = useNavigation<Nav>();

  return (
    <View style={styles.container}>
      {/* emergency or not tag */}
      {post.emergency && (
        <View style={styles.urgentContainer}>
          <Text style={styles.emText}>Urgent</Text>
        </View>
      )}

      {/* donar profile */}
      <View style={styles.profile}>
        <Ionicons name="person-circle" size={28} color={AppColors.BLUE} />
        <Text style={styles.name}>{post?.author?.name}</Text>
      </View>
      <View style={styles.postDecContainer}>
        <View style={styles.captionContainer}>
          <MaterialCommunityIcons
            name="chevron-triple-right"
            size={16}
            color={AppColors.RED}
          />
          <Text style={styles.captionText}>{post?.caption}</Text>
        </View>
        <View style={styles.rowStyle}>
          <Fontisto name="blood-drop" size={16} color={AppColors.RED} />
          <Text style={styles.addressText}>{post?.bloodgroup}</Text>
        </View>
        <View style={[styles.rowStyle, { marginTop: 10, marginBottom: 3 }]}>
          <FontAwesome name="address-book" size={16} color={AppColors.BLUE} />
          <Text style={styles.addressText}>{post?.location}</Text>
        </View>

        <View style={styles.rowStyle}>
          <Ionicons name="call" size={16} color={AppColors.RED} />
          <Text style={styles.addressText}>{post?.phone}</Text>
        </View>

        <View style={styles.dateContainer}>
          <Text>{post?.createdAt.slice(0, 10)}</Text>
        </View>
      </View>
    </View>
  );
};

export default SinglePost;

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

  urgentContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 80,
    height: 35,
    backgroundColor: AppColors.RED,
    justifyContent: "center",
    alignItems: "center",
    borderTopRightRadius: 10,
  },
  emText: {
    color: AppColors.WHITE,
    fontWeight: "700",
    fontSize: 13,
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
  captionContainer: {
    flexDirection: "row",
    marginBottom: 5,
  },
  captionText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 6,
    width: "90%",
  },
  addressText: {
    marginLeft: 6,
    fontSize: 14,
    fontWeight: "500",
  },
  dateContainer: {
    alignItems: "flex-end",
  },
  commentandshareContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 8,
  },
});
