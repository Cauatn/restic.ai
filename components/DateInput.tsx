import DateTimePicker, {
  DateTimePickerEvent,
} from "@react-native-community/datetimepicker";
import { CalendarDays } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface DateInputP {
  setSelectedDate: (date: Date) => void;
  selectedDate: Date;
  questionTitle: string;
}

export default function DateInput({
  selectedDate,
  setSelectedDate,
  questionTitle,
}: DateInputP) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  function handleDatePickEvent(event: DateTimePickerEvent, date: Date) {
    if (event.type === "set") {
      setSelectedDate(date);
    }
    setIsModalOpen(false);
  }
  return (
    <View>
      <Text className="text-xl">{questionTitle}</Text>
      <View className="flex flex-col justify-center bg-[#DEDEDE] py-3 px-3 rounded-lg h-14">
        <TouchableOpacity
          className="flex-row justify-between"
          onPress={() => setIsModalOpen(true)}
        >
          <Text className="text-xl">{selectedDate.toLocaleDateString()}</Text>
          <CalendarDays size={24} color="#171717" />
        </TouchableOpacity>
        {isModalOpen && (
          <DateTimePicker
            value={new Date()}
            onChange={(event, date) => {
              date ? handleDatePickEvent(event, date) : null;
            }}
            is24Hour
          />
        )}
      </View>
    </View>
  );
}
