import { create } from "zustand";

interface ShipmentState {
  selectedShipments: number[];
  toggleShipment: (shipmentId: number) => void;
  isShipmentSelected: (shipmentId: number) => boolean;
  clearShipments: () => void;
}

export const useShipmentStore = create<ShipmentState>((set, get) => ({
  selectedShipments: [],
  toggleShipment: (shipmentId) => {
    const { selectedShipments } = get();
    if (selectedShipments.includes(shipmentId)) {
      // Remove o ID da lista se já estiver selecionado
      set({
        selectedShipments: selectedShipments.filter((id) => id !== shipmentId),
      });
    } else {
      // Adiciona o ID à lista se não estiver selecionado
      set({
        selectedShipments: [...selectedShipments, shipmentId],
      });
    }
  },
  isShipmentSelected: (shipmentId) => {
    const { selectedShipments } = get();
    return selectedShipments.includes(shipmentId);
  },
  clearShipments: () => {
    set({ selectedShipments: [] });
  },
}));
