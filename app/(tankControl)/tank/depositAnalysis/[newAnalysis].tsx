import AppHeader from "@/components/AppHeader";
import SafeAreaView from "@/components/SafeAreaView";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function DepositAnalysis() {
  const { tank } = useLocalSearchParams();
  const router = useRouter();

  const [date, setDate] = useState("09/07/24");
  const [densityValue, setDensityValue] = useState("1030");
  const [densityUnit, setDensityUnit] = useState("kg/m³");
  const [temperatureValue, setTemperatureValue] = useState("12");
  const [temperatureUnit, setTemperatureUnit] = useState("°C");

  const [ta, setTA] = useState("");
  const [taUnit, setTAUnit] = useState("");

  const [av, setAV] = useState("");
  const [avUnit, setAVUnit] = useState("");

  const [at, setAT] = useState("");
  const [atUnit, setATUnit] = useState("");

  const [ph, setPH] = useState("");

  const [so2l, setSO2L] = useState("");
  const [so2lUnit, setSO2LUnit] = useState("");

  const [mv, setMV] = useState("");
  const [mvUnit, setMVUnit] = useState("");

  const [es, setES] = useState("");
  const [esUnit, setESUnit] = useState("");

  const [ar, setAR] = useState("");
  const [arUnit, setARUnit] = useState("");

  const [ntu, setNTU] = useState("");
  const [ntuUnit, setNTUUnit] = useState("");

  const [ic, setIC] = useState("");
  const [icUnit, setICUnit] = useState("");

  const [temp, setTemp] = useState("");
  const [tempUnit, setTempUnit] = useState("");

  const [estProteica, setEstProteica] = useState("");
  const [estProteicaUnit, setEstProteicaUnit] = useState("");

  const [malLactica, setMalLactica] = useState("");
  const [malLacticaUnit, setMalLacticaUnit] = useState("");

  const [resp, setResp] = useState("");
  const [respUnit, setRespUnit] = useState("");

  return (
    <SafeAreaView>
      <AppHeader
        mainText={`Nova análise depósito`}
        variant="secondary"
        showReturnButton
        returnHref={router.back}
      />
      <ScrollView contentContainerStyle={{ padding: 4 }}>
        <Text className="text-2xl mb-4 text-black">{tank}</Text>

        <View className="mb-4">
          <Text className="text-lg mb-2">Data de registro</Text>

          <TextInput
            className="flex-1 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
            value={date}
            onChangeText={setDate}
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg mb-2">Densidade</Text>
          <View className="flex-row items-center gap-4">
            <TextInput
              className="flex-1 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
              value={densityValue}
              onChangeText={setDensityValue}
              keyboardType="numeric"
            />
            <TextInput
              className="flex-1 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
              value={densityUnit}
              onChangeText={setDensityUnit}
            />
          </View>
        </View>

        <View className="mb-4">
          <Text className="text-lg mb-2">Temperatura</Text>
          <View className="flex-row items-center gap-4">
            <TextInput
              className="flex-1 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
              value={temperatureValue}
              onChangeText={setTemperatureValue}
              keyboardType="numeric"
            />
            <TextInput
              className="flex-1 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
              value={temperatureUnit}
              onChangeText={setTemperatureUnit}
            />
          </View>
        </View>

        {/* Map through each item */}
        {[
          {
            label: "TA",
            value: ta,
            setValue: setTA,
            unit: taUnit,
            setUnit: setTAUnit,
          },
          {
            label: "AV",
            value: av,
            setValue: setAV,
            unit: avUnit,
            setUnit: setAVUnit,
          },
          {
            label: "AT",
            value: at,
            setValue: setAT,
            unit: atUnit,
            setUnit: setATUnit,
          },
          {
            label: "SO2L",
            value: so2l,
            setValue: setSO2L,
            unit: so2lUnit,
            setUnit: setSO2LUnit,
          },
          {
            label: "MV",
            value: mv,
            setValue: setMV,
            unit: mvUnit,
            setUnit: setMVUnit,
          },
          {
            label: "E.S",
            value: es,
            setValue: setES,
            unit: esUnit,
            setUnit: setESUnit,
          },
          {
            label: "AR",
            value: ar,
            setValue: setAR,
            unit: arUnit,
            setUnit: setARUnit,
          },
          {
            label: "NTU's",
            value: ntu,
            setValue: setNTU,
            unit: ntuUnit,
            setUnit: setNTUUnit,
          },
          {
            label: "I.C",
            value: ic,
            setValue: setIC,
            unit: icUnit,
            setUnit: setICUnit,
          },
          {
            label: "Temperatura",
            value: temp,
            setValue: setTemp,
            unit: tempUnit,
            setUnit: setTempUnit,
          },
          {
            label: "Est. Proteica",
            value: estProteica,
            setValue: setEstProteica,
            unit: estProteicaUnit,
            setUnit: setEstProteicaUnit,
          },
          {
            label: "Mal. Láctica",
            value: malLactica,
            setValue: setMalLactica,
            unit: malLacticaUnit,
            setUnit: setMalLacticaUnit,
          },
          {
            label: "Resp.",
            value: resp,
            setValue: setResp,
            unit: respUnit,
            setUnit: setRespUnit,
          },
        ].map((item, index) => (
          <View key={index} className="mb-4">
            <Text className="text-lg mb-2">{item.label}</Text>
            <View className="flex-row items-center gap-4">
              <TextInput
                className="flex-1 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
                value={item.value}
                onChangeText={item.setValue}
              />
              <TextInput
                className="flex-1 bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
                value={item.unit}
                onChangeText={item.setUnit}
              />
            </View>
          </View>
        ))}

        <View className="mb-4">
          <Text className="text-lg mb-2">PH</Text>
          <TextInput
            className="bg-[#DEDEDE] py-3 px-3 rounded-lg h-14 placeholder-gray-400"
            value={ph}
            onChangeText={setPH}
          />
        </View>

        <TouchableOpacity className="bg-blue-600 p-4 rounded-lg items-center mt-6 mb-4">
          <Text className="text-white text-lg font-bold">Concluir</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
