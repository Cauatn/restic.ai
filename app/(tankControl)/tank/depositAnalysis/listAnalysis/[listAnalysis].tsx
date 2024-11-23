import AppHeader from "@/components/AppHeader";
import SafeAreaView from "@/components/SafeAreaView";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface Analysis {
  id: string;
  date: string;
  stage: string;
  density: string;
  temperature: string;
}

const data: Analysis[] = [
  {
    id: "1",
    date: "09/07/24",
    stage: "Tomada espuma",
    density: "996",
    temperature: "20",
  },
];

export default function ListAnalysis() {
  const { tank } = useLocalSearchParams();
  const router = useRouter();

  console.log(tank);

  return (
    <SafeAreaView>
      <AppHeader
        mainText={`LISTA ANALISES`}
        variant="secondary"
        showReturnButton
        returnHref={router.back}
      />
      <View className="p-4">
        <Link
          href={{
            pathname: "/(tankControl)/tank/depositAnalysis/[dailyAnalysis]",
            params: {
              tank: tank,
            },
          }}
          asChild
        >
          <TouchableOpacity className="bg-blue-500 p-4 rounded-md items-center mb-4">
            <Text className="text-white font-bold">
              NOVA ANÁLISE DE DEPOSITO
            </Text>
          </TouchableOpacity>
        </Link>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <AnalysisCard item={item} />}
          contentContainerStyle={{ gap: 16 }}
        />
      </View>
    </SafeAreaView>
  );
}

const AnalysisCard = ({ item }: { item: Analysis }) => {
  return (
    <View className="bg-white rounded-sm p-4 shadow">
      <View className="flex-row justify-between items-center mb-3">
        <Text className="text-2xl font-bold">{item.date}</Text>
        <TouchableOpacity>
          <Text className="text-blue-500">Detalhes</Text>
        </TouchableOpacity>
      </View>
      <View className="h-px bg-gray-200 mb-2" />
      <View className="space-y-2">
        <CardRow label="Etapa" value={item.stage} />
        <CardRow label="Densidade" value={item.density} />
        <CardRow label="Temperatura" value={`${item.temperature}°`} />
      </View>
    </View>
  );
};

const CardRow = ({ label, value }: { label: string; value: string }) => (
  <View className="flex-row justify-between">
    <Text className="text-gray-500 text-lg">{label}</Text>
    <Text className="font-medium text-xl">{value}</Text>
  </View>
);
