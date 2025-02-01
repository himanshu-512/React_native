import { TouchableOpacity, View, Text } from 'react-native'
import React from 'react'

const CustomButton = ({title,
    handlePress,
    containerStyles,
    textStyles,
    isLoading,}) => {
    return (
        <TouchableOpacity
        onPress={handlePress}
        activeOpacity={0.7}
        
        className={`bg-[#FF9000]   rounded-xl min-h-[50px] ${containerStyles} ${isLoading? 'opacity-50' : '' } justify-center mt-4 items-center `}>
            <Text className={`text-black font-serif ${textStyles} font-bold text-lg`}>{title}</Text>

        </TouchableOpacity>
    )
}

export default CustomButton