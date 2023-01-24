import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { FC } from "react";
import { AppColors } from "../utils/AppColors";
import { postInterface } from "../typeInterfaces/typeInterfaces";
import SinglePost from "./SinglePost";

interface PropsInterface {
  postData: any;
}

const PostTab: FC<PropsInterface> = ({ postData }) => {
  return (
    <View style={{ flex: 1 }}>
      {postData.data.totalPost == 0 ? (
        <View style={styles.nopostContainer}>
          <Text>No Post Till Now</Text>
        </View>
      ) : postData.loading ? (
        <View style={styles.lodderStyle}>
          <ActivityIndicator size={"large"} color={AppColors.RED} />
        </View>
      ) : postData.err ? (
        <View style={styles.lodderStyle}>
          <Text>Something went wrong</Text>
        </View>
      ) : (
        postData?.data?.allposts.map((data: postInterface) => (
          <SinglePost key={data._id} post={data} />
        ))
      )}
    </View>
  );
};

export default PostTab;

const styles = StyleSheet.create({
  nopostContainer: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
  },
  lodderStyle: {
    flex: 1,
    justifyContent: "center",
    marginTop: 100,
    alignItems: "center",
  },
});
