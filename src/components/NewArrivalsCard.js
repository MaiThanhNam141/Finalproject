import React from "react";
import { Image, Text, View } from "react-native";

const NewArrivalsCard= ({title, image, price, bookName})=>{
    return (
        <View className="max-w-[150px justify-center items-center overflow-hidden mr-6">
            <Image source={{uri:image}} className="rounded-x1 h-36 w-32"/>
            <View className="mt-2 justify-center items-center">
                <Text className="font-bold">{bookName}</Text>
                <Text className="text-xs">{price}.000 vnd</Text>
                <Text className="font-extrabold">{title}</Text>
            </View>
        </View>
    )
}

export default NewArrivalsCard