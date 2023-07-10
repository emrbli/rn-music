import { TextInput, View, TextInputProps } from "react-native"
import React from 'react'

export const SearchBar: React.FC<TextInputProps> = ({ onChangeText }: TextInputProps) => {
    return (
        <View className="bg-gray-300 p-3 rounded-lg mx-2">
            <TextInput onChangeText={onChangeText} placeholder="Search..." placeholderTextColor={'#000'} blurOnSubmit clearTextOnFocus />
        </View>
    )
}