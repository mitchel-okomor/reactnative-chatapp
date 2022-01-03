import moment from 'moment';
import React from 'react';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import { styles } from './styles';

export type chatMessageProps = {
  message: Message;
};

const ChatMessage = (props: chatMessageProps) => {
  const { message } = props;

  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
            marginLeft: isMyMessage() ? 50 : 0,
            marginRight: isMyMessage() ? 0 : 50
          }
        ]}
      >
        <Text>{message.user.name}</Text>
        <Text>{message.content}</Text>
        <Text>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;
