import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import React, { useState, useEffect, useContext } from "react";
import TopBackComp from "../components/TopBackComp";
import { AppColors } from "../utils/AppColors";
import { InputComp } from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import { AuthUserContext } from "../context/authUserContext";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const Post = () => {
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [phone, setPhone] = useState("");
  const { authUser, setAuthUser } = useContext<any>(AuthUserContext);
  const navigation = useNavigation<Nav>();

  // console.log(authUser);

  const postData = () => {};
  return (
    <View style={styles.root}>
      {authUser != null ? (
        <>
          <TopBackComp
            text="Post"
            extraStyle={{ paddingHorizontal: 0 }}
            onPress={() => navigation.goBack()}
          />
          <View style={styles.contentWrapper}>
            <InputComp
              placeholder="caption..."
              inputExtraStyle={styles.inputExtraStyle}
              multiline={true}
              setValue={setCaption}
            />
            <InputComp placeholder="location..." setValue={setLocation} />
            <InputComp placeholder="phone..." setValue={setPhone} />
            <ButtonComp
              text="Post"
              onPress={postData}
              extraStyle={{ marginTop: 10 }}
            />
          </View>
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <TouchableOpacity
            style={styles.emptyBtn}
            onPress={() => navigation.navigate("Register")}
          >
            <Image source={{ uri: img }} style={styles.imgStyle} />

            <Text>Register/Login First</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 16,
  },
  contentWrapper: {
    marginTop: 20,
    width: "100%",
  },
  inputExtraStyle: {
    height: 100,
    paddingVertical: 10,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  emptyBtn: {
    justifyContent: "center",
    alignItems: "center",
  },
  imgStyle: {
    width: 70,
    height: 70,
    marginBottom: 20,
  },
});
