import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface HourInputP {
  setSelectedHour: (date: Date) => void;
  selectedHour: Date;
  questionTitle: string;
}

export default function HourInput({
  selectedHour,
  setSelectedHour,
  questionTitle,
}: HourInputP) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleHourPickEvent(event: DateTimePickerEvent, date: Date) {
    if (event.type === "set") {
      setSelectedHour(date);
    }
    setIsModalOpen(false);
  }
  return (
    <View className="flex-1">
      <Text className="text-xl">{questionTitle}</Text>
      <View className="flex flex-col justify-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
        <TouchableOpacity onPress={() => setIsModalOpen(true)}>
          <Text className="text-xl">{selectedHour.toLocaleTimeString()}</Text>
        </TouchableOpacity>
        {isModalOpen && (
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
  );
}
