import AppHeader from "@/components/AppHeader";
import DateInput from "@/components/DateInput";
import FormFooter from "@/components/FormFooter";
import HourInput from "@/components/HourInput";
import SafeAreaView from "@/components/SafeAreaView";
import YesNoButtonField from "@/components/YesNoButtonField";
import { useRouter } from "expo-router";
import {
  ChevronsUpDown,
  Droplet,
  Package,
  Rows3,
  Tag,
} from "lucide-react-native";
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

interface StageInfo {
  title: string;
  icon: React.JSX.Element;
  description: string;
  value: string;
}

export default function newFilLab() {
  const stages: StageInfo[] = [
    {
      title: "Despaletização",

      icon: (
        <View className="justify-center p-3 bg-green-100 rounded-lg">
          <Rows3 color="#00A64E" />
        </View>
      ),
      description: "Lorem Ipsum",
      value: "depalletization",
    },
    {
      title: "Enchimento",
      icon: (
        <View className="justify-center p-3 bg-red-100 rounded-lg">
          <Droplet color="#EB1203" />
        </View>
      ),
      description: "Lorem Ipsum",
      value: "filling",
    },
    {
      title: "Rotulagem",
      icon: (
        <View className="justify-center p-3 bg-purple-100 rounded-lg">
          <Tag color="#8C5EE8" />
        </View>
      ),
      description: "Lorem Ipsum",
      value: "labelling",
    },
    {
      title: "Embalamento",
      icon: (
        <View className="justify-center p-3 bg-blue-100 rounded-lg">
          <Package color="#0052FF" />
        </View>
      ),
      description: "Lorem Ipsum",
      value: "packaging",
    },
  ];

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [startHour, setStartHour] = useState(new Date());
  const [finishHour, setFinishHour] = useState(
    new Date(startHour.getTime() + 2 * 60 * 60 * 1000)
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<StageInfo | null>(null);
  const router = useRouter();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }} edges={["right", "bottom", "left"]}>
        <AppHeader
          showReturnButton
          variant="secondary"
          mainText="Envase e Rotulagem"
          returnHref={router.back}
        />
        <ScrollView contentContainerClassName="p-7 gap-6">
          <TouchableOpacity
            onPress={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex flex-row items-center justify-between bg-[#DEDEDE] py-3 px-3 rounded-lg h-14"
          >
            <Text className="text-xl">
              {selectedStage ? selectedStage.title : "Etapas"}
            </Text>
            <ChevronsUpDown color="black" />
          </TouchableOpacity>
          {isDropdownOpen ? (
            <Modal
              transparent
              animationType="fade"
              className="bg-[#DEDEDE] py-3 px-3 rounded-b-lg"
            >
              <View
                className="flex-1"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
              >
                <Pressable
                  className="flex-1"
                  onPress={() => setIsDropdownOpen(false)}
                />
                <View className="bg-white px-10 py-5 gap-4 rounded-t-3xl">
                  {stages.map((s) => (
                    <TouchableOpacity
                      key={s.value}
                      className="flex-row items-center gap-4"
                      onPress={() => {
                        setSelectedStage(s);
                        setIsDropdownOpen(false);
                      }}
                    >
                      {s.icon}
                      <View className="">
                        <Text className="text-2xl font-semibold">
                          {s.title}
                        </Text>
                        <Text className="text-neutral-400">
                          {s.description}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            </Modal>
          ) : (
            ""
          )}
          <View className="flex-row justify-between gap-4">
            <View className="flex-1">
              <Text className="text-xl">Produto</Text>
              <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
                <TextInput className="text-xl ml-2 flex-1" placeholder="1.5" />
              </View>
            </View>
            <View className="flex-1">
              <Text className="text-xl">Lote</Text>
              <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
                <TextInput className="text-xl ml-2 flex-1" placeholder="123" />
              </View>
            </View>
          </View>
          <View className="flex-row justify-between gap-4">
            <View className="flex-1">
              <Text className="text-xl">Depósito</Text>
              <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
                <TextInput className="text-xl ml-2 flex-1" placeholder="1.5" />
              </View>
            </View>
            <View className="flex-1">
              <Text className="text-xl">Volume</Text>
              <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
                <TextInput className="text-xl ml-2 flex-1" placeholder="3000" />
              </View>
            </View>
          </View>
          <DateInput
            questionTitle="Data"
            selectedDate={selectedDate}
            setSelectedDate={(date) => setSelectedDate(date)}
          />
          <View className="flex-row justify-between gap-4">
            <HourInput
              questionTitle="Hora início"
              setSelectedHour={(date) => setStartHour(date)}
              selectedHour={startHour}
            />
            <HourInput
              questionTitle="Hora fim"
              setSelectedHour={(date) => setFinishHour(date)}
              selectedHour={finishHour}
            />
          </View>
          <View>
            <Text className="text-2xl font-bold">
              Condições de despaletização
            </Text>
            <View className="flex flex-col gap-4">
              <YesNoButtonField
                yesDescription="Bom estado de conservação"
                noDescription="Estado de conservação ruim"
                question="Está em boas condições?"
              />
            </View>
          </View>
          <View>
            <Text className="text-2xl font-bold">Condições de rotulagem</Text>
            <View className="flex flex-col gap-4">
              <YesNoButtonField
                yesDescription="Bom estado de conservação"
                noDescription="Estado de conservação ruim"
                question="Está em boas condições?"
              />
            </View>
          </View>
        </ScrollView>
        <FormFooter nextHref="/envaseERotulagem" />
      </SafeAreaView>
    </>
  );
}
