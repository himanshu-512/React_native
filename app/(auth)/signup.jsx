import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native'
import FormFiled from '../../components/FormFiled'
import CustomButton from '../../components/CustomButton'
import { Link } from 'expo-router'

const Signup = () => {
  const [form, setform] = useState({
    username: "",
    email: "",
    password: ""
  })
  const [isSubmitting, setSubmitting] = useState(false);
  const submit = (e) => {
    alert(form.password)
  }
  return (
    <SafeAreaView className="bg-[#161622] h-full">
      <ScrollView>
        <View className="  w-full px-4 my-6 ">
          <Image
            source={require('../../assets/images/logo.png')}
            resizeMode="contain"
            className="w-[130px] h-[84px]  mt-[7vh]"
          />
          <Text className="text-white text-2xl font-bold  mb-5">
            Signup to Aora
          </Text>

          <FormFiled
            title="Username"
            value={form.username}
            handleChangeText={(e) => setform({ ...form, username: e })}
            otherStyles="mt-7"
           
          />

          <FormFiled
            title="Email"
            value={form.email}
            handleChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />



          <FormFiled
            title="Password"
            value={form.password}
            handleChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7"
          />

        </View>

        <CustomButton
          title="Sign In"
          otherStyles="mt-5"
          handlePress={submit}
          isLoading={isSubmitting}
          containerStyles="mt-7"
        />
        <View className="flex justify-center pt-5 flex-row gap-2">
          <Text className="text-lg text-gray-100 font-semibold">
            Already have an account ?
          </Text>
          <Link
            href="/home"
            className="text-lg font-bold text-yellow-500"
          >
            Signin
          </Link>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}


export default Signup;