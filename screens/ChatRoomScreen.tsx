import React from 'react';
import { FlatList, Text, ImageBackground } from 'react-native';
import { useRoute } from '@react-navigation/native';
import chatRoomData from '../data/Chats';
import ChatMessage from '../components/ChatMessage';
import BG from '../assets/images/BG.png';

const ChatRoomScreen = () => {
  const route = useRoute();
  return (
    <ImageBackground source={BG} style={{ height: '100%', width: '100%' }}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      ></FlatList>
    </ImageBackground>
  );
};

export default ChatRoomScreen;
