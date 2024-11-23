import ActivityCard from "@/components/ActivityCard";
import AppHeader from "@/components/AppHeader";
import SafeAreaView from "@/components/SafeAreaView";
import { useShipmentStore } from "@/context/remessasContext";
import { useFocusEffect, useLocalSearchParams, useRouter } from "expo-router";
import {
  ArrowRightLeft,
  ChevronDown,
  Cylinder,
  Grape,
  Microscope,
  Milk,
} from "lucide-react-native";
import React, { useCallback } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Tank() {
  const { tank, depositId, content, contentId } = useLocalSearchParams();
  const router = useRouter();
  const { clearShipments } = useShipmentStore();

  useFocusEffect(
    useCallback(() => {
      clearShipments();
      return;
    }, [])
  );
  const activityListItems = [
    {
      name: "Análises diárias",
      icon: <Cylinder size="28px" color="#000000" />,
      route: "/(tankControl)/tank/dailyAnalysis/[dailyAnalysis]",
      //type: "tank",
      param: [
        {
          tank: tank as string,
          depositId: Number(depositId),
          content: content,
          contentId: contentId,
        },
      ],
    },
    {
      name: "Análises de deposito",
      icon: <Microscope size="28px" color="#000000" />,
      route: "/(tankControl)/tank/depositAnalysis/listAnalysis/[listAnalysis]",
      //type: "tank",
      param: [{ tank: tank as string, depositId: Number(depositId) }],
    },
    {
      name: "Envase e rotulagem",
      icon: <Milk size="28px" color="#000000" />,
      route: "/envaseERotulagem/envase",
      //type: "tank",
      param: [{ tank: tank as string, depositId: Number(depositId) }],
    },
    {
      name: "Adicionar Vinho Base",
      icon: <Grape size="28px" color="#000000" />,
      route: "/(tankControl)/tank/addBaseWine/[addBaseWine]",
      //type: "tank",
      param: [{ tank: tank as string, depositId: Number(depositId) }],
    },
    {
      name: "Realizar Trasfega",
      icon: <ArrowRightLeft size="28px" color="#000000" />,
      route: "/(tankControl)/tank/realizarTrasfega/[trasfega]",
      //type: "",
      param: [{ tank: tank as string, depositId: Number(depositId) }],
    },
    {
      name: "Adicionar pé de Cuba",
      icon: <Grape size="28px" color="#000000" />,
      route: "/(tankControl)/tank/addPeDeCuba/[addPeDeCuba]",
      //type: "tank",
      param: [
        {
          tank: tank as string,
          depositId: Number(depositId),
        },
      ],
    },
  ];

  return (
    <SafeAreaView>
      <AppHeader
        showReturnButton
        variant="secondary"
        mainText={`${tank}`}
        returnHref={router.back}
      />
      <View>
        <Text className="text-zinc-950 font-bold text-2xl ml-7 mb-4">
          Ações
        </Text>
        <FlatList
          data={activityListItems}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => {
            return (
              <ActivityCard
                title={item.name}
                icon={item.icon}
                route={item.route}
                //type={item.type}
                param={item.param}
              />
            );
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: 25,
            gap: 10,
          }}
        />
      </View>
      <View className="px-7 gap-4">
        <View>
          <Text className="text-2xl">Remessas associadas</Text>
          <Card />
        </View>
        <CardNotEmpty />
      </View>
    </SafeAreaView>
  );
}

const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.subtitle}>Última remessa associada</Text>
      <View style={styles.row}>
        <Text style={styles.shipment}>101 - 2º Talão</Text>
        <Text style={styles.details}>Detalhes</Text>
      </View>
    </View>
  );
};

const CardNotEmpty = () => {
  return (
    <View>
      <Text className="text-2xl font-medium">Resumo da última análise</Text>
      <View className="bg-white" style={styles.card}>
        <Text className="text-xl text-black font-medium">09/08/24</Text>
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Densidade</Text>
          <View style={styles.bottomAligned}>
            <Text className="text-xl">996</Text>
            <Text className="text-gray-500">g/cm3</Text>
          </View>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Temperatura</Text>
          <View style={styles.bottomAligned}>
            <ChevronDown size="25px" color="red" />
            <Text className="text-xl">20</Text>
            <Text className="text-gray-500">ºC</Text>
          </View>
        </View>
        <View className="flex-row justify-between">
          <Text className="text-gray-500">Pressão</Text>
          <View style={styles.bottomAligned}>
            <ChevronDown
              size="25px"
              color="green"
              style={{
                transform: [{ rotate: "180deg" }],
              }}
            />
            <Text className="text-xl">5.7</Text>
            <Text className="text-gray-500">bar</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginTop: 8,
  },
  subtitle: {
    color: "gray",
    fontSize: 12,
    marginBottom: 2,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  shipment: {
    fontSize: 16,
  },
  details: {
    fontSize: 16,
    fontWeight: "semibold",
    color: "blue",
  },
  bottomAligned: {
    flexDirection: "row",
    alignItems: "flex-end",
    gap: 4, // Use this if gap is not supported, otherwise you can remove it
  },
});
