import AppHeader from "@/components/AppHeader";
import SafeAreaView from "@/components/SafeAreaView";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface CardProps {
  title: string;
  density?: string;
  temperature?: number;
  pressure?: number;
  onSelect: () => void;
}

function Card({
  title,
  density = "",
  temperature = 0,
  pressure = 0,
  onSelect,
}: CardProps) {
  return (
    <TouchableOpacity style={{ marginBottom: 16, width: "100%" }}>
      <View className="bg-white p-4 rounded-lg shadow flex-col">
        {/* Título e botão "Selecionar" */}
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold">{title}</Text>
          <TouchableOpacity
            onPress={onSelect}
            style={{
              backgroundColor: "#007BFF",
              paddingVertical: 6,
              paddingHorizontal: 12,
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Selecionar
            </Text>
          </TouchableOpacity>
        </View>

        {/* Informações de densidade, temperatura e pressão */}
        <View className="mt-2 space-y-1">
          <View className="flex-row justify-between">
            <Text className="text-base">Densidade:</Text>
            <Text className="text-lg">{density} kg/m³</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-base">Temperatura:</Text>
            <Text className="text-lg">{temperature} °C</Text>
          </View>
          <View className="flex-row justify-between">
            <Text className="text-base">Pressão:</Text>
            <Text className="text-lg">{pressure} Pa</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function RealizarTrasfega() {
  const [selectedTank, setSelectedTank] = useState<string | null>(null);
  const router = useRouter();

  const data = [
    {
      title: "Tanque 2",
      isAvailable: false,
      density: "980",
      temperature: 22,
      pressure: 100000,
    },
    {
      title: "Tanque 3",
      isAvailable: false,
      density: "980",
      temperature: 22,
      pressure: 100000,
    },
    {
      title: "Tanque 5",
      isAvailable: false,
      density: "980",
      temperature: 22,
      pressure: 100000,
    },
  ];

  return (
    <SafeAreaView>
      <AppHeader
        showReturnButton
        variant="secondary"
        mainText="Realizar Trasfega"
        returnHref={router.back}
      />
      <View
        style={{
          paddingHorizontal: 20,
        }}
      >
        <Text className="text-4xl text-black mt-4 font-bold">
          Trasfega de Tanques
        </Text>
        <Text className="text-xl mt-2 mb-4">
          Selecione o tanque de origem para realizar a trasfega.
        </Text>
      </View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            density={item.density}
            temperature={item.temperature}
            pressure={item.pressure}
            onSelect={() => setSelectedTank(item.title)}
          />
        )}
        keyExtractor={(item) => item.title}
        className="flex-1"
        style={{
          paddingHorizontal: 20,
        }}
      />

      {selectedTank && (
        <View style={{ padding: 20 }}>
          <Text className="text-lg font-bold">
            Tanque selecionado: {selectedTank}
          </Text>
          <TouchableOpacity
            onPress={() =>
              console.log(`Realizar trasfega do tanque ${selectedTank}`)
            }
            style={{
              backgroundColor: "#28A745",
              paddingVertical: 14,
              paddingHorizontal: 15,
              borderRadius: 5,
              marginTop: 16,
            }}
          >
            <Text style={{ color: "#FFFFFF", fontWeight: "bold" }}>
              Confirmar Trasfega
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
}
