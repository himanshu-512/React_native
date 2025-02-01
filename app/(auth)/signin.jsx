import { View, Text, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'

const SignTn = () => {
  return (
    <SafeAreaView className="bg-[#161622] h-full">
      <ScrollView>
        <View className=" items-center justify-center w-full px-4 my-6 h-full">
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            className="w-[130px] h-[84px]  mt-[7vh]"
          />
          <Text className="text-white text-2xl font-bold text-center mt-5">
            Login to Aora
          </Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default SignTn