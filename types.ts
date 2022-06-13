/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<MainTabParamList> | undefined;
  ChatRoomScreen: undefined;
  Contacts: undefined;
  NotFound: undefined;
  Login:undefined;
  Register:undefined;

};

export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

export type MainTabParamList = {
  Camera: undefined;
  Chats: undefined;
  Status: undefined;
  Calls: undefined;
};

export type RootTabScreenProps<Screen extends keyof MainTabParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<MainTabParamList, Screen>,
    NativeStackScreenProps<RootStackParamList>
  >;

export type User = {
  id: string;
  name: string;
  imageUri: string;
  status: string;
};
export type Message = {
  id: string;
  content: string;
  createdAt: string;
  user: User;
};
export type ChatRoom = {
  id: string;
  users: [User];
  lastMessage: Message;
};

export type State = {
	data: any,
    isLoading: boolean,
    isError: boolean,
    success: boolean,
    errorMessage: string,
    successMessage: string
}