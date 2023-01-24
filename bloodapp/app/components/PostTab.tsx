import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { FC } from "react";
import { AppColors } from "../utils/AppColors";
import { postInterface } from "../typeInterfaces/typeInterfaces";
import Post from "./Post";

interface PropsInterface {
  postData: any;
}

const PostTab: FC<PropsInterface> = ({ postData }) => {
  return (
    <View style={{ flex: 1 }}>
      {postData.loading ? (
        <View style={styles.lodderStyle}>
          <ActivityIndicator size={"large"} color={AppColors.RED} />
        </View>
      ) : postData.err ? (
        <View style={styles.lodderStyle}>
          <Text>Something went wrong</Text>
        </View>
      ) : (
        postData?.data?.allposts.map((data: postInterface) => (
          <Post key={data._id} post={data} />
        ))
      )}
    </View>
  );
};

export default PostTab;

const styles = StyleSheet.create({
  lodderStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
  },
});
