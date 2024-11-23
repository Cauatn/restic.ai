import AppHeader from "@/components/AppHeader";
import { useRouter } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import React from "react";
import { Link } from "expo-router";
import { FlatList, Text, TouchableOpacity, View } from "react-native";
import SafeAreaView from "@/components/SafeAreaView";

interface Item {
  id: number | string;
  lote: string;
  produto: string;
  data: string;
  volume: string;
  deposito: string;
}

const data: Item[] = [
  {
    id: 1,
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
  {
    id: 2,
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
  {
    id: 3,
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
  {
    id: 4,
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
  {
    id: 5,
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
];

export default function EnvaseERotulagem() {
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={{ flex: 1, backgroundColor: "#F3F4F6" }}>
      <AppHeader
          variant="secondary"
          mainText="Envase e Rotulagem"
          showReturnButton
          returnHref={router.back}
        />
        <View style={{ alignItems: "center", marginVertical: 20 }}>
        <Link href="/envaseERotulagem/newFilLab/newFilLab" asChild>
          <TouchableOpacity
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#3B82F6",
              borderRadius: 12,
              paddingHorizontal: 24,
              paddingVertical: 12,
            }}
          >
            <AntDesign name="pluscircle" size={24} color="white" />
            <Text
              style={{
                color: "white",
                fontWeight: "600",
                fontSize: 16,
                marginLeft: 8,
              }}
            >
              ADICIONAR NOVO PROCESSO
            </Text>
          </TouchableOpacity>
        </Link>
        </View>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <EnvaseCard {...item} />}
          contentContainerStyle={{ paddingBottom: 160, paddingHorizontal: 16 }}
        />
      </SafeAreaView>
    </>
  );
}

export function EnvaseCard(item: Item) {
  return (
    <View
      style={{
        backgroundColor: "white",
        borderRadius: 12,
        borderWidth: 1,
        borderColor: "#E5E7EB",
        padding: 16,
        marginBottom: 12,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
        <Text style={{ fontWeight: "600", fontSize: 18 }}>LOTE {item.lote}</Text>
        <TouchableOpacity>
          <Text style={{ color: "#3B82F6" }}>Detalhes</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: 1, backgroundColor: "#E5E7EB", marginVertical: 8 }} />
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
        <Text style={{ color: "#6B7280", fontSize: 16 }}>Produto</Text>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.produto}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
        <Text style={{ color: "#6B7280", fontSize: 16 }}>Data</Text>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.data}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
        <Text style={{ color: "#6B7280", fontSize: 16 }}>Volume</Text>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.volume}</Text>
      </View>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginBottom: 8 }}>
        <Text style={{ color: "#6B7280", fontSize: 16 }}>Depósito</Text>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{item.deposito}</Text>
      </View>
    </View>
  );
}
