import DateInput from "@/components/DateInput";
import { DefaultButton } from "@/components/DefaultButton";
import { useShipmentStore } from "@/context/NewShipmentContext";
import { useTokenStore } from "@/context/userData";

import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { CameraType, CameraView, useCameraPermissions } from "expo-camera";
import { ScanText } from "lucide-react-native";
import React, { useEffect, useState } from "react";
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function GrapeReception() {
  const { shipmentData } = useShipmentStore(); // gets the shipment data context
  const [isHourModalOpen, setIsHourModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedHour, setSelectedHour] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [facing, setFacing] = useState<CameraType>("back");
  const [permission, requestPermission] = useCameraPermissions();
  const { updateShipmentData } = useShipmentStore();
  const { userId } = useTokenStore();

  useEffect(() => {
    if (userId) updateShipmentData({ ["fkfuncionario"]: userId });
  }, []);

  useEffect(() => {
    // everytime the date and/or the hour changes the function gets called
    handleInputChange("datachegada", selectedDateTimeToIso());
  }, [selectedDate, selectedHour]);

  function selectedDateTimeToIso() {
    // join the date and time into a iso format
    const hourLength = selectedHour.toISOString().length;
    return (
      selectedDate.toISOString().substring(0, 10) +
      "T" +
      selectedHour.toISOString().substring(11, hourLength)
    );
  }

  function handleHourPickEvent(event: DateTimePickerEvent, date: Date) {
    if (event.type === "set") {
      setSelectedHour(date);
    }
    setIsHourModalOpen(false);
  }

  function handleInputChange(field: string, value: string | number) {
    updateShipmentData({ [field]: value });
  }

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos permissão da Camera.</Text>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Garantir permissão.</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1">
      <View className="flex flex-1 gap-2 px-7 mt-6">
        <DefaultButton
          title="SCANEAR DOCUMENTO"
          icon={<ScanText color="white" />}
          onPress={() => setIsModalOpen(!isModalOpen)}
        />
        <ScrollView
          contentContainerStyle={{ gap: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <DateInput
            questionTitle="Data"
            selectedDate={selectedDate}
            setSelectedDate={(date) => setSelectedDate(date)}
          />
          <View>
            <Text className="text-xl">Número da carrada</Text>
            <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="text-xl ml-2 flex-1"
                placeholder="3°"
                onChangeText={(value) =>
                  handleInputChange("numerotalao", Number(value))
                }
                keyboardType="numeric"
              />
            </View>
          </View>
          <View>
            <Text className="text-xl">Casta</Text>
            <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="text-xl ml-2 flex-1"
                placeholder="AIREN"
                onChangeText={(value) => handleInputChange("casta", value)}
              />
            </View>
          </View>
          <View>
            <Text className="text-xl">Lote</Text>
            <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="text-xl ml-2 flex-1"
                placeholder="101"
                onChangeText={(value) =>
                  handleInputChange("numerolote", Number(value))
                }
              />
            </View>
          </View>
          <View>
            <Text className="text-xl">Horário de saída</Text>
            <View className="flex flex-col justify-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TouchableOpacity onPress={() => setIsHourModalOpen(true)}>
                <Text className="text-xl">
                  {selectedHour.toLocaleTimeString()}
                </Text>
              </TouchableOpacity>
              {isHourModalOpen && (
                <DateTimePicker
                  mode="time"
                  value={new Date()}
                  onChange={(event, date) => {
                    date ? handleHourPickEvent(event, date) : null;
                  }}
                />
              )}
            </View>
          </View>
          <View>
            <Text className="text-xl">Caixas</Text>
            <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="text-xl ml-2 flex-1"
                placeholder="540"
                onChangeText={(value) =>
                  handleInputChange("qttcaixa", Number(value))
                }
                keyboardType="numeric"
              />
              <Text>unidades</Text>
            </View>
          </View>
          <View>
            <Text className="text-xl">Peso</Text>
            <View className="flex flex-row items-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
              <TextInput
                className="text-xl ml-2 flex-1"
                placeholder="1.450"
                onChangeText={(value) =>
                  handleInputChange("peso", Number(value))
                }
                keyboardType="numeric"
              />
              <Text>kg</Text>
            </View>
          </View>
        </ScrollView>
      </View>

      <Modal
        visible={isModalOpen}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setIsModalOpen(false)}
      >
        <View className="flex-1 justify-end items-center bg-black bg-opacity-50">
          <View className="w-full h-[80%] bg-white rounded-xl p-5 ">
            <CameraView
              facing={facing}
              style={{ width: "100%", height: "70%" }}
            >
              <View className="flex-row justify-center mt-5">
                <TouchableOpacity className=" rounded-lg py-4 px-16 mt-5"></TouchableOpacity>
              </View>
            </CameraView>
            <View className="flex flex-1 justify-between pb-5">
              <Text className="text-2xl flex-1 text-center font-medium">
                Aponte a câmera para o centro do documento
              </Text>
              <TouchableOpacity className="bg-blue-500 rounded-lg py-4 px-16 mt-5 items-center">
                <Text className="text-lg font-bold text-white ">
                  Tirar foto
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  message: {
    textAlign: "center",
    paddingBottom: 10,
  },
});
