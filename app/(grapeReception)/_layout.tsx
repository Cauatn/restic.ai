import apiInstance from "@/api/apiInstance";
import AppHeader from "@/components/AppHeader";
import CustomStatusBar from "@/components/CustomStatusBar";
import SafeAreaView from "@/components/SafeAreaView";
import { useShipmentStore } from "@/context/NewShipmentContext";

import { Href, Link, Stack, usePathname, useRouter } from "expo-router";
import * as SecureStore from "expo-secure-store";
import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function GrapeReceptionLayout() {
  const [nextHref, setNextHref] = useState("");
  const currRoute = usePathname();
  const routes = [
    {
      route: "/",
      nextHref: "/(grapeReception)/grapeReceptionP2",
    },
    {
      route: "/grapeReceptionP2",
      nextHref: "/(tabs)/",
    },
  ];
  useEffect(() => {
    const r = routes.find((r) => r.route === currRoute);
    r ? setNextHref(r.nextHref) : null;
  }, [currRoute]);
  return (
    <>
      <CustomStatusBar barStyle="dark-content" />
      <SafeAreaView style={{ flex: 1 }} edges={["right", "bottom", "left"]}>
        <AppHeader
          showReturnButton={currRoute === "/" ? true : false}
          variant="secondary"
          mainText="Recepção de Uvas"
          returnHref="/(tabs)/shipment"
        />
        <Stack screenOptions={{ headerShown: false }} />
        <FormFooter
          nextHref={nextHref as Href<string>}
          isReturnButtonEnabled={currRoute === "/" ? false : true}
        />
      </SafeAreaView>
    </>
  );
}
//! IMPORTANT: made this because the formFooter is a reusable component,
//! but the context being used will change based on the data that the
//! user will provide (i dont know know to make this a reusable component in these circunstances)
interface FormFooterP {
  nextHref: Href<string>;
  isReturnButtonEnabled?: boolean;
}

function FormFooter({ nextHref, isReturnButtonEnabled = false }: FormFooterP) {
  const router = useRouter();
  const { shipmentData } = useShipmentStore();

  async function handleDataSubmit() {
    const token = await SecureStore.getItemAsync("user-token");

    apiInstance
      .post("/uva/register", shipmentData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.request);
        router.navigate("/(tabs)/shipment"); // navigate back to the shipments list
      })
      .catch((e) => {
        console.log(e);
      });
  }
  return (
    <View
      style={{
        height: 80,
        borderTopWidth: 1,
        paddingHorizontal: 20,
        borderTopColor: "#C0C0C0",
      }}
    >
      <View className="flex-1 flex-row items-center justify-between px-14">
        <TouchableOpacity
          onPress={() => router.dismiss(1)}
          disabled={!isReturnButtonEnabled}
        >
          <Text
            className="text-xl"
            style={{
              color: isReturnButtonEnabled ? "#93c5fd" : "#C0C0C0",
            }}
          >
            Anterior
          </Text>
        </TouchableOpacity>
        {isReturnButtonEnabled ? (
          <TouchableOpacity onPress={handleDataSubmit}>
            <Text className="text-xl text-blue-500">Concluir</Text>
          </TouchableOpacity>
        ) : (
          <Link href={nextHref} asChild>
            <TouchableOpacity>
              <Text className="text-xl text-blue-500">Próximo</Text>
            </TouchableOpacity>
          </Link>
        )}
      </View>
    </View>
  );
}
