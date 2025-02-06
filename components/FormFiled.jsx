import { View, Text, TextInput } from 'react-native'
import React,{useState} from 'react'
import { TouchableOpacity } from 'react-native'
import { Image  } from 'react-native'
import {icons, Images} from '../constants'
const FormFiled = ({ title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (

    <View class name={`space-y-2  ${otherStyles}`}>
      <Text className="text-base  text-gray-100 font-bold">{title}</Text>
      <View className="w-full h-16 px-4  border-2 border-gray-900 drop-shadow-lg bg-gray-800 rounded-2xl focus:border-yellow-400 items-center flex flex-row">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          {...props}
        />
         {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}

      </View>
    </View>
  )
}

export default FormFiled