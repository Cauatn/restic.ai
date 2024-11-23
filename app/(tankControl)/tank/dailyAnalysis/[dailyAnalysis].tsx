import apiInstance from "@/api/apiInstance";
import AppHeader from "@/components/AppHeader";
import DateInput from "@/components/DateInput";
import { DefaultButton } from "@/components/DefaultButton";
import SafeAreaView from "@/components/SafeAreaView";
import { useTokenStore } from "@/context/userData";
import { useLocalSearchParams, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";

interface Analysis {
  id: string;
  date: string;
  stage: string;
  density: string;
  temperature: string;
}

// const data: Analysis[] = [
//   {
//     id: "1",
//     date: "09/07/24",
//     stage: "Tomada espuma",
//     density: "996",
//     temperature: "20",
//   },
// ];
//! IMPORTANT: this component is currently working with deposits with mostro only
//TODO: handle the logic with another types of content inside of the deposits
export default function DailyAnalysis() {
  const { tank, content, contentId } = useLocalSearchParams();
  const router = useRouter();
  const [date, setDate] = useState<Date>(new Date());
  const [density, setDensity] = useState("");
  const [temperature, setTemperature] = useState("");
  const { userId } = useTokenStore();

  async function handleSubmit() {
    const token = await SecureStore.getItemAsync("user-token");
    if (content === "Mostro") {
      apiInstance
        .post(
          "/analisediariamostro/register",
          {
            fkmostro: contentId,
            fkfuncionario: userId,
            densidade: density,
            data: date,
            temperatura: temperature,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          router.back();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

  return (
    <SafeAreaView className="flex-1">
      <AppHeader
        showReturnButton
        variant="secondary"
        mainText="Nova análise diária"
        returnHref={router.back}
      />

      <View className="px-5 flex-1 ">
        <Text className="text-4xl text-black mt-4 font-bold">{tank}</Text>
        <View className="mt-4">
          <DateInput
            questionTitle="Data"
            selectedDate={date}
            setSelectedDate={(date) => setDate(date)}
          />
          <View className="mb-4 mt-4">
            <Text className="text-lg mb-2">Densidade</Text>
            <View className="flex-row items-center gap-4">
              <TextInput
                className="flex-1 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
                keyboardType="numeric"
                placeholder="1030"
                onChangeText={(value) => setDensity(value)}
              />
            </View>
          </View>
          <View className="mb-4">
            <Text className="text-lg mb-2">Temperatura</Text>
            <View className="flex-row items-center gap-4 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="flex-1 placeholder-gray-400"
                keyboardType="numeric"
                placeholder="24"
                onChangeText={(value) => setTemperature(value)}
              />
              <Text>°C</Text>
            </View>
          </View>
        </View>
      </View>

      <View className="px-5 py-4">
        <DefaultButton title="Concluir" onPress={handleSubmit} />
      </View>
    </SafeAreaView>
  );
}
