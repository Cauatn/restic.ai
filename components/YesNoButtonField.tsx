import { Check, X } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface YesOrNoButtonP {
  question: string;
  yesDescription: string;
  noDescription: string;
}

export default function YesNoButtonField({
  question,
  noDescription,
  yesDescription,
}: YesOrNoButtonP) {
  const [buttonState, setButtonState] = useState("yes");

  const handleYesClick = () => setButtonState("yes");
  const handleNoClick = () => setButtonState("no");

  return (
    <View className="justify-start">
      <Text className="text-lg mb-2">{question}</Text>
      <View className="gap-2">
        <View className="flex-row flex-wrap items-center">
          <TouchableOpacity
            className={`px-7 py-5 rounded mr-2 ${
              buttonState === "yes" ? "bg-green-400" : "bg-gray-300"
            }`}
            onPress={handleYesClick}
          >
            <Check
              color={buttonState === "yes" ? "#15803d" : "#9ca3af"}
              width={20}
              height={24}
            />
          </TouchableOpacity>
          <View className="flex-shrink">
            <Text className="text-black font-semibold text-2xl">Sim</Text>
            <Text className="text-gray-500 font-semibold text-lg">
              {yesDescription}
            </Text>
          </View>
        </View>
        <View className="flex-row flex-wrap items-center">
          <TouchableOpacity
            className={`px-7 py-5 rounded mr-2 ${
              buttonState === "no" ? "bg-red-400" : "bg-gray-300"
            }`}
            onPress={handleNoClick}
          >
            <X
              width={20}
              height={24}
              color={buttonState === "no" ? "#dc2626" : "#9ca3af"}
            />
          </TouchableOpacity>
          <View className="flex-shrink">
            <Text className="text-black font-semibold text-2xl">Não</Text>
            <Text className="text-gray-500 font-semibold text-lg">
              {noDescription}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
