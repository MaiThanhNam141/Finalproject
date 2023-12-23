import React, { useContext, useEffect, useState } from "react";
import { Modal, Pressable, View, Text, TextInput, TouchableOpacity, ToastAndroid } from "react-native";
import { registerWithEmailAndPassword ,loginWithEmailAndPassword } from "../features/firebase/userAuth";
import AuthContext from "../features/context/authContext";


const AuthenticationModal = ({modalVisible, setModalVisible}) =>{
    const [type,setType] = useState("login")
    const [name,setName] = useState("")
    const [email,setEmail] = useState("nam@gmail.com")
    const [password, setPassword] = useState("")

    const {currentUser, setCurrentUser, setIsLoggedIn} = useContext(AuthContext)

    const handleLogin = async()=>{
        const res = await loginWithEmailAndPassword(email, password)
        if(res.success === true){
            setCurrentUser(res.user)
            setIsLoggedIn(true)
            setModalVisible(false)
            ToastAndroid.show("Successfully", ToastAndroid.BOTTOM)
        }
        else {
            console.log("Login Error")
        }
    }
    const handleRegister = async() =>{
        const res = await registerWithEmailAndPassword(name, email, password)
        if(res.success === true){
            setType("login")
            ToastAndroid.show("Successfully", ToastAndroid.BOTTOM)
        }
    }

    useEffect(() =>{
        if(currentUser){
            setIsLoggedIn(true)
        }
    },[currentUser])

    return(
        <View style={{flex:1, width:1150}}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}                
                onRequestClose={()=>{
                    setModalVisible(false)
                }}
            >
                {
                    type === "login"?(
                    <Pressable className="flex-1 justify-center items-center bg-black/[0.5]">
                        <View className="w-[80%] bg-white p-6 rounded-lg">
                            <Text className="font-bold mb-2">Email</Text>
                            <TextInput
                                className="border border-slate-300 px-3 py-2"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />           
                            <Text className="font-bold mt-4 mb-2">Password:</Text>
                            <TextInput
                                className="border border-slate-300 px-3 py-2"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                            />
                            <TouchableOpacity className="bg-black py-4 mt-6 rounded-lg" onPress={handleLogin}>
                                <Text className="text-white font-semibold text-center">
                                    Login
                                </Text>
                            </TouchableOpacity>
                            <View className="flex-row justify-center items-center mt-4">
                                <Text className="text-slate-500">Not a user?</Text>
                                <Pressable onPress={()=>setType("register")}>
                                    <Text className="font-bold"> Register</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>)
                    :(
                    <Pressable onPress={()=>setModalVisible(false)} className="flex-1 justify-center items-center bg-black/[0.5]">
                        <View className={`w-[80%] p-6 bg-white`}>
                            <Text className="font-bold mb-2">Name:</Text>
                            <TextInput
                                className="border border-slate-300 px-3 py-2"
                                value={name}
                                onChangeText={setName}
                            />
                            <Text className="font-bold mb-2">Email:</Text>
                            <TextInput
                                className="border border-slate-300 px-3 py-2"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                            />
                            <Text className="font-bold mb-2">Password:</Text>
                            <TextInput
                                className="border border-slate-300 px-3 py-2"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={true}
                            />
            
                            <TouchableOpacity
                                className="bg-black py-4 mt-6 rounded-lg"
                                onPress={handleRegister}
                            >
                                <Text className="text-white font-semibold text-center">Register</Text>
                            </TouchableOpacity>
                
                            <View className="flex-row justify-center items-center mt-4">
                                <Text className="text-slate-500">Already a User?</Text>
                                <Pressable onPress={() => setType("login")}>
                                <Text className="font-bold"> Login</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Pressable>)
                }

            </Modal>
        </View>
    )
}

export default AuthenticationModal