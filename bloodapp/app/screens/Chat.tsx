import { StyleSheet, Text, View } from "react-native";
import React, { useContext } from "react";
import ChatProfile from "../components/ChatProfile";
import { endpoint } from "../api/endPoint";
import { AuthUserContext } from "../context/authUserContext";
import UseFetch from "../api/fetchData";

const Chat = () => {
  const { authUser } = useContext<any>(AuthUserContext);

  const conversationendpoint = `${endpoint}/conversation/${authUser?._id}`;

  const conversation = UseFetch(conversationendpoint);
  return (
    <View style={styles.root}>
      {conversation.loading ? (
        <View></View>
      ) : conversation.err ? (
        <Text>something went wrond</Text>
      ) : (
        conversation?.data?.conversation?.map((conversation: any) => (
          <ChatProfile key={conversation._id} conversation={conversation} />
        ))
      )}
      {/* <ChatProfile /> */}
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  root: {
    paddingVertical: 10,
  },
});
