import { create } from "zustand";

interface IShipmentData {
  casta: string;
  datachegada: string;
  fkfuncionario: number;
  fkviticultor: number;
  numerolote: number;
  numerotalao: number;
  peso: number;
  sanidade: number;
  so2: string;
  tipodevinho: string;
  fkmostro?: number;
}

interface ShipmentState {
  shipmentData: IShipmentData;
  setShipmentData: (data: IShipmentData) => void;
  updateShipmentData: (data: Partial<IShipmentData>) => void;
}

export const useShipmentStore = create<ShipmentState>((set) => ({
  shipmentData: {
    numerotalao: 0,
    qttcaixa: 0,
    numerolote: 0,
    peso: 0,
    fkviticultor: 1,
    fkfuncionario: 0,
    casta: "Airen",
    datachegada: "",
    sanidade: 0,
    so2: "",
    tipodevinho: "",
    // fkmostro: undefined, // opcional
  },
  setShipmentData: (data) => set({ shipmentData: data }),
  updateShipmentData: (data) =>
    set((state) => ({
      shipmentData: { ...state.shipmentData, ...data },
    })),
}));
