import React from "react";
import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TextInputProps,
  View,
} from "react-native";

interface InputBoxProps extends TextInputProps {
  title: string;
}

export function InputBox({ title, ...rest }: InputBoxProps) {
  return (
    <KeyboardAvoidingView className="flex flex-col items-start font-medium h-auto w-full">
      <Text className="text-lg text-black mb-2">{title}</Text>
      <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
        <TextInput
          className="h-12 w-full p-2 rounded-md placeholder:text-[#BDBDBD]"
          {...rest}
        />
      </View>
    </KeyboardAvoidingView>
  );
}
