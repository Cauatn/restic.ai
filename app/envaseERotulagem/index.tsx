import AppHeader from "@/components/AppHeader";
import { DefaultButton } from "@/components/DefaultButton";
import SafeAreaView from "@/components/SafeAreaView";
import { Link } from "expo-router";
import { CirclePlus } from "lucide-react-native";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface Item {
  id: number | string;
  lote: string;
  produto: string;
  data: string;
  volume: string;
  deposito: string;
}

const data = [
  {
    id: 1,
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
  {
    id: "2",
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
  {
    id: "3",
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
  {
    id: "4",
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
  {
    id: "5",
    lote: "24116F28",
    produto: "Cabernet Suave",
    data: "21/07/24",
    volume: "3000 L",
    deposito: "102",
  },
];
const Card = ({ item }: { item: Item }) => {
  return (
    <View className="shadow bg-white mb-3 rounded-md border border-neutral-250">
      <View className="flex-row justify-between items-center p-4">
        <Text className="font-semibold text-2xl">LOTE {item.lote}</Text>
        <TouchableOpacity>
          <Text className="text-md color-blue-500">Detalhes</Text>
        </TouchableOpacity>
      </View>
      <View className="h-[1px] w-full flex-row justify-center bg-neutral-250" />
      <View className="p-4">
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-light text-xl">Produto</Text>
          <Text className="font-medium text-2xl">{item.produto}</Text>
        </View>
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-light text-xl">Data</Text>
          <Text className="font-medium text-2xl">{item.data}</Text>
        </View>
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-light text-xl">Volume</Text>
          <Text className="font-medium text-2xl">{item.volume}</Text>
        </View>
        <View className="flex-row items-center justify-between mb-2">
          <Text className="font-light text-xl">Depósito</Text>
          <Text className="font-medium text-2xl">{item.deposito}</Text>
        </View>
      </View>
    </View>
  );
};

export default function envaseERotulagem() {
  return (
    <SafeAreaView>
      <AppHeader
        showReturnButton
        variant="secondary"
        mainText="Envase e Rotulagem"
        returnHref="/(tabs)"
      />
      <View className="flex-1 px-7">
        <Link href="/envaseERotulagem/newFilLab" asChild>
          <DefaultButton
            title="ADICIONAR NOVO PROCESSO"
            icon={<CirclePlus color="white" />}
          />
        </Link>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => <Card item={item} />}
          contentContainerStyle={{
            paddingVertical: 10,
            gap: 10,
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
}

// <CustomStatusBar barStyle="dark-content" />
//       <SafeAreaView
//         style={{ flex: 1, gap: 20 }}
//         edges={["right", "bottom", "left"]}
//       >
//         <AppHeader
//           variant="secondary"
//           mainText="Gestão de remessas"
//           showReturnButton
//         />
//         <View className="px-7">
//           <Link href="/" asChild>
//             <DefaultButton
//               title="ADICIONAR NOVA REMESSA"
//               icon={<CirclePlus color="white" />}
//             />
//           </Link>
//           <FlatList
//             data={data}
//             keyExtractor={(item) => String(item.id)}
//             showsVerticalScrollIndicator={false}
//             renderItem={({ item }) => <ShipmentCard {...item} />}
//             contentContainerStyle={{
//               paddingVertical: 20,
//               paddingBottom: 160,
//               gap: 10,
//             }}
//           ></FlatList>
//         </View>
//       </SafeAreaView>
