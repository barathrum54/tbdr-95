import create from "zustand";
import { MenuItem } from "../types/menu-item.types";

type DesktopState = {
  activeItems: MenuItem[];
  selectedItems: MenuItem[];
  removeActiveItem: (item: MenuItem) => void;
  addActiveItem: (item: MenuItem) => void;
  resetActiveItems: () => void;
  addSelectedItem: (item: MenuItem) => void;
  removeSelectedItem: (item: MenuItem) => void;
  resetSelectedItems: () => void;
  idCounter: number;
};

const actions = (set: any) => ({
  removeActiveItem: (item: MenuItem) =>
    set((state: DesktopState) => ({
      activeItems: state.activeItems.filter((i) => i.id !== item.id),
    })),
  addActiveItem: (item: MenuItem) =>
    set((state: DesktopState) => ({
      activeItems: [...state.activeItems, item],
    })),
  resetActiveItems: () => set({ activeItems: [] }),
  addSelectedItem: (item: MenuItem) =>
    set((state: DesktopState) => ({
      selectedItems: [...state.selectedItems, item],
    })),
  removeSelectedItem: (item: MenuItem) =>
    set((state: DesktopState) => ({
      selectedItems: state.selectedItems.filter((i) => i.id !== item.id),
    })),
  resetSelectedItems: () => set({ selectedItems: [] }),
});

export const useDesktopStore = create<DesktopState>((set) => ({
  activeItems: [],
  selectedItems: [],
  ...actions(set),
  zIndexCounter: 10,
  idCounter: 0,
}));

export const getActiveItemById = (id: number) => {
  const { activeItems } = useDesktopStore.getState();
  return activeItems.find((item) => item.id === id);
};
