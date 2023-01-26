import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { FC, useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AppColors } from "../utils/AppColors";
import { AuthUserContext } from "../context/authUserContext";
import { useNavigation } from "@react-navigation/native";

interface PropsTypes {
  conversation: any;
}
const ChatProfile: FC<PropsTypes> = ({ conversation }) => {
  const navigation = useNavigation<any>();
  const { authUser } = useContext<any>(AuthUserContext);
  //   console.log(chat.members);

  const withoutMe = conversation?.members.filter(
    (member: any) => member._id != authUser?._id
  );
  //   console.log("without me =============================================");
  //   console.log(withoutMe);

  return (
    <>
      {withoutMe.map((conv: any) => (
        <Cprofile
          key={conv._id}
          conv={conv}
          navigation={navigation}
          conversationId={conversation._id}
        />
      ))}
    </>
  );
};

export default ChatProfile;

const Cprofile = ({ conv, navigation, conversationId }) => (
  <TouchableOpacity
    style={styles.chatProfileContainer}
    onPress={() => navigation.navigate("Message", { conversationId })}
  >
    <View style={styles.avatorWrapper}>
      <Ionicons name="person" size={25} color={AppColors.BLUE} />
    </View>
    <View style={styles.nameContainer}>
      <Text>{conv?.name}</Text>
      <Text>hello</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  chatProfileContainer: {
    width: "100%",
    height: 60,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  avatorWrapper: {
    width: 50,
    height: 50,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: AppColors.LIGHTSKYBLUE,
  },
  nameContainer: {
    marginLeft: 8,
  },
});
