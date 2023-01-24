import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState, useEffect, useContext } from "react";
import TopBackComp from "../components/TopBackComp";
import { AppColors } from "../utils/AppColors";
import { InputComp } from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import { AuthUserContext } from "../context/authUserContext";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";
import { postData } from "../api/post";

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const Post = () => {
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");
  const [bloodgroup, setBloodGroup] = useState("");
  const [phone, setPhone] = useState("");
  const { authUser, setAuthUser } = useContext<any>(AuthUserContext);
  const navigation = useNavigation<Nav>();
  const [loading, setLoading] = useState(false);

  // console.log(authUser);

  const post = () => {
    setLoading(true);
    if (!caption || !location || !phone || !bloodgroup) {
      setLoading(false);
      return Alert.alert("Fill all the field's");
    }

    const data = {
      caption,
      location,
      phone,
      author: authUser?._id,
      bloodgroup,
    };
    const routePath = "/post/createpost";

    setTimeout(() => {
      postData(data, routePath)
        .then((data) => {
          setLoading(false);
          setCaption("");
          setLocation("");
          setPhone("");
          setBloodGroup("");
          navigation.navigate("Home");
          Alert.alert("Post Added");
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }, 1000);
  };
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
              value={caption}
            />
            <InputComp
              placeholder="location..."
              setValue={setLocation}
              value={location}
            />
            <InputComp
              placeholder="phone..."
              setValue={setPhone}
              value={phone}
            />
            <InputComp
              placeholder="bloodgroup..."
              setValue={setBloodGroup}
              value={bloodgroup}
            />
            <ButtonComp
              text="Post"
              onPress={post}
              extraStyle={{ marginTop: 10 }}
              disabled={loading ? true : false}
              loading={loading}
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
