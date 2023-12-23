import { Text, View, Image,Pressable,ToastAndroid } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import AuthContext from '../features/context/authContext'
import {logout} from '../features/firebase/userAuth'

const ProfileScreen = () => {
  const {currentUser,setCurrentUser,isLoggedIn,setIsLoggedIn} = useContext(AuthContext)

  const handleLogout = async () => {
    const res = await logout()
    if(res.success===true){
      ToastAndroid.show("Logged Out Successfully",ToastAndroid.BOTTOM)
      setIsLoggedIn(false);
      setCurrentUser(null)
    }
  }

  return (
    <SafeAreaView className="bg-white h-full p-6 justify-between">
      <View className="mt-6">
        {isLoggedIn
          ?
        <View className="items-center justify-center">
          <Text className="text-lg font-bold">{currentUser?.name}</Text>
          <Text className="text-xs, font-bold text-gray-500">{currentUser?.email}</Text>
        </View>
        :
        <View className="items-center justify-center">
          <Text className="text-lg font-bold">Hãy Đăng Nhập!</Text>
        </View>
        }
      </View>
      {isLoggedIn &&
      <View className="justify-center items-center">
        <Pressable onPress={handleLogout} className="bg-black w-full py-4 rounded-lg">
          <Text className="font-bold text-white text-center">Log Out</Text>
        </Pressable>
      </View>
      }
    </SafeAreaView>
  );
};

export default ProfileScreen;
