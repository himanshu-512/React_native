import { Redirect,router } from "expo-router";
import { Pressable, Text, View, Image, Button, ScrollView, StatusBar } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import {CustomBtn} from "../components/CustomBtn"
import CustomButton from "../components/CustomButton";

export default function Index() {
  return (
    <SafeAreaView className="flex bg-[#161622] justify-center items-center h-full">
      <ScrollView contentContainerStyle={{ height: '100%' }}>
        <View className="flex items-center justify-center">
          <Image
            source={require('../assets/images/logo.png')}
            resizeMode="contain"
            className="w-[130px] h-[84px] items-center mt-[7vh]"
          />

          <Image
            source={require('../assets/images/cards.png')}
            resizeMode="contain"
            className="max-w-[380px] h-[300px]   items-center "
          />

        </View>

        <View className="relative items-center  mt-5">
          <Text className="text-white text-4xl font-bold text-center">Discover Endless{'\n'} Possibilities with <Text className="text-yellow-600">Aora</Text>
          </Text>

          <Image

            source={require('../assets/images/path.png')}
            style={{ position: "absolute", top: 16, left: 270, height: 100, width: 60 }}
            resizeMode="contain"
          />

          <Text className="text-sm font-pregular  text-gray-100 mt-4 text-center">
            Where Creativity Meets Innovation: Embark on a Journey of Limitless
            Exploration with Aora
          </Text>

          <CustomButton
           title="Continue with Email"
           handlePress={() => router.push('signin')}
           containerStyles="w-full mt-7"
          
          />
        </View>

      </ScrollView>

      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
