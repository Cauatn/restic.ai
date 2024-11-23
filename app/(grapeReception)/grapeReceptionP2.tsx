import YesNoButtonField from "@/components/YesNoButtonField";
import { useShipmentStore } from "@/context/NewShipmentContext";

import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

export default function GrapeRepectionP2() {
  const { shipmentData, updateShipmentData } = useShipmentStore();

  function handleInputChange(field: string, value: string | number) {
    updateShipmentData({ [field]: value });
  }

  return (
    <View className="flex-1">
      <View className="flex flex-1 gap-2 px-7 mt-6">
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <View>
            <Text className="text-xl">Sanidade</Text>
            <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="text-xl ml-2 flex-1"
                placeholder="Sanidade"
                onChangeText={(value) =>
                  handleInputChange("sanidade", parseFloat(value))
                }
                keyboardType="numeric"
              />
            </View>
          </View>
          <View className="flex-row justify-between gap-4">
            <View className="flex-1">
              <Text className="text-xl">SO2</Text>
              <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
                <TextInput
                  className="text-xl ml-2 flex-1"
                  placeholder="1.5"
                  value={shipmentData.so2}
                  onChangeText={(value) => handleInputChange("so2", value)}
                />
              </View>
            </View>
            <View className="flex-1">
              <Text className="text-xl">Unidade</Text>
              <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
                <TextInput
                  className="text-xl ml-2 flex-1"
                  placeholder="Sanidade"
                />
              </View>
            </View>
          </View>
          <View>
            <Text className="text-xl">Tipo de vinho</Text>
            <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="text-xl ml-2 flex-1"
                placeholder="ex: VB - Vinho branco"
                value={shipmentData.tipodevinho}
                onChangeText={(value) =>
                  handleInputChange("tipodevinho", value)
                }
              />
            </View>
          </View>
          <View>
            <Text className="text-xl">Cuba n°</Text>
            <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="text-xl ml-2 flex-1"
                placeholder="ex: VB - Vinho branco"
              />
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-3xl font-bold">Condições do caminhão</Text>
            <View className="flex flex-col gap-4">
              <YesNoButtonField
                yesDescription="Bom estado de conservação"
                noDescription="Estado de conservação ruim"
                question="Caminhão em bom estado de conservação?"
              />
              <YesNoButtonField
                yesDescription="Boas condições de higiene"
                noDescription="Condições de higiene ruins"
                question="Caminhão em boas condições de higiene?"
              />
              <YesNoButtonField
                yesDescription="Boas condições de uso"
                noDescription="Condições de uso ruins"
                question="Contentores de uva em boas condições de uso?"
              />
              <YesNoButtonField
                yesDescription="Boas práticas sendo mantidas"
                noDescription="Boas práticas não mantidas"
                question="As boas práticas estão sendo mantidas?"
              />
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
