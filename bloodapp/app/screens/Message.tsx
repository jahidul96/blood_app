import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import TopBackComp from "../components/TopBackComp";
import { AppColors } from "../utils/AppColors";
import { InputComp } from "../components/InputComp";
import ButtonComp from "../components/ButtonComp";
import { endpoint } from "../api/endPoint";
import UseFetch from "../api/fetchData";
import { useNavigation } from "@react-navigation/native";
import { AuthUserContext } from "../context/authUserContext";

const Message = ({ route }) => {
  const { authUser } = useContext<any>(AuthUserContext);
  const { conversationId } = route.params;
  const navigation = useNavigation<any>();

  const messageendpoint = `${endpoint}/message/${conversationId}`;

  const messages = UseFetch(messageendpoint);

  //   console.log(conversationId);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <TopBackComp text="Message" onPress={() => navigation.goBack()} />
      <ScrollView
        style={{
          paddingHorizontal: 20,
        }}
      >
        {messages.err ? (
          <Text>something went wrong</Text>
        ) : messages.loading ? (
          <Text>loading</Text>
        ) : (
          messages?.data?.map((msg: any) => (
            <View
              style={[
                styles.msgWrapper,
                {
                  alignItems:
                    msg.senderId == authUser?._id ? "flex-end" : "flex-start",
                },
              ]}
            >
              <Text
                style={[
                  styles.msgText,
                  {
                    backgroundColor:
                      msg.senderId == authUser?._id
                        ? AppColors.BLUE
                        : AppColors.LIGHTSKYBLUE,
                  },
                ]}
              >
                {msg.text}
              </Text>
            </View>
          ))
        )}
      </ScrollView>
      <View style={styles.bottomContainer}>
        <InputComp
          placeholder="Text"
          inputExtraStyle={styles.inputExtraStyle}
        />
        <ButtonComp
          text="Send"
          onPress={() => {}}
          extraStyle={styles.btnExtra}
        />
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  bottomContainer: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: AppColors.WHITE,
    paddingHorizontal: 15,
  },
  msgWrapper: {
    maxWidth: "100%",
  },
  msgText: {
    marginVertical: 8,
    backgroundColor: AppColors.LIGHTSKYBLUE,
    paddingHorizontal: 10,
    paddingVertical: 10,
    maxWidth: "80%",
    borderRadius: 10,
  },
  inputExtraStyle: {
    width: "70%",
  },
  btnExtra: {
    width: "25%",
    marginTop: -10,
  },
});
