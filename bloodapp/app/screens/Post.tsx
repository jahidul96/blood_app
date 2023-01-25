import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import React, { useState, useContext } from "react";
import TopBackComp from "../components/TopBackComp";
import { AppColors } from "../utils/AppColors";
import { InputComp } from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import { AuthUserContext } from "../context/authUserContext";
import { useNavigation } from "@react-navigation/native";
import { Nav } from "../typeInterfaces/typeInterfaces";
import { postData } from "../api/post";
import { TextComp } from "../components/TextComp";
import DropDownList, { DropDownItems } from "../components/DropDownList";
import { HEIGHT } from "../utils/AppDimension";

const bloodgroups = ["A+", "B+", "AB+", "O+", "A-", "B-", "O-"];

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqdDPqIhJtO-FGbVxALsb5kdaZFreczNhcxoEmkhv-ubCuDAc9Pz8Xj-nJktjMo12qvpI&usqp=CAU";

const Post = () => {
  const [caption, setCaption] = useState("");
  const [location, setLocation] = useState("");

  const [phone, setPhone] = useState("");
  const { authUser } = useContext<any>(AuthUserContext);
  const navigation = useNavigation<Nav>();
  const [loading, setLoading] = useState(false);
  const [emergency, setEmergency] = useState(false);
  const [showBloodList, setShowBloodList] = useState(false);

  const [bloodGroup, setbloodGroup] = useState("");

  // console.log(authUser);

  const post = () => {
    setLoading(true);
    if (!caption || !location || !phone || !bloodGroup) {
      setLoading(false);
      return Alert.alert("Fill all the field's");
    }

    const data = {
      caption,
      location,
      phone,
      author: authUser?._id,
      bloodgroup: bloodGroup,
      emergency,
    };
    const routePath = "/post/createpost";

    setTimeout(() => {
      postData(data, routePath)
        .then((data) => {
          setLoading(false);
          setCaption("");
          setLocation("");
          setPhone("");
          setbloodGroup("");
          setEmergency(false);
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

            <View style={styles.rowStyle}>
              <TextComp
                text="Blood-Group"
                textExtraStyle={styles.textExtraStyle}
              />
              <View style={{ width: "70%" }}>
                <DropDownList
                  placeholder="Group"
                  show={showBloodList}
                  setShow={setShowBloodList}
                  value={bloodGroup}
                />
              </View>
            </View>
            <View style={styles.emergencyContainer}>
              <TextComp
                text="Emergency : "
                textExtraStyle={styles.emergencyText}
              />
              <TouchableOpacity
                style={styles.eWrapper}
                onPress={() => setEmergency(!emergency)}
              >
                {emergency && <View style={styles.activeContainer} />}
              </TouchableOpacity>
            </View>
            <ButtonComp
              text="Post"
              onPress={post}
              extraStyle={{ marginTop: 10 }}
              disabled={loading ? true : false}
              loading={loading}
            />

            {/* blood group droupdown */}
            {showBloodList && (
              <DropDownItems
                data={bloodgroups}
                setValue={setbloodGroup}
                setShow={setShowBloodList}
                viewStyle={[styles.dropdownItemStyle, { height: HEIGHT / 2.4 }]}
              />
            )}
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
  emergencyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  eWrapper: {
    width: 16,
    height: 16,
    backgroundColor: AppColors.WHITE,
    borderColor: AppColors.RED,
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 6,
    marginTop: 2,
  },
  activeContainer: {
    width: 10,
    height: 10,
    backgroundColor: AppColors.RED,
    borderRadius: 100,
  },
  emergencyText: {
    fontWeight: "600",
    fontSize: 16,
  },
  rowStyle: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  textExtraStyle: {
    marginBottom: 5,
    textDecorationLine: "underline",
    fontSize: 15,
  },
  dropdownItemStyle: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    position: "absolute",
    top: HEIGHT / 7,
    left: 0,
    backgroundColor: AppColors.LIGHTSKYBLUE,
    justifyContent: "center",
    alignItems: "center",
  },
});
