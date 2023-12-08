import create from "zustand";
import { MenuItem } from "../types/menu-item.types";

type DesktopState = {
  activeItems: MenuItem[];
  removeActiveItem: (item: MenuItem) => void;
  addActiveItem: (item: MenuItem) => void;
  resetActiveItems: () => void;
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
});

export const useShellStore = create<DesktopState>((set) => ({
  activeItems: [],
  ...actions(set),
  zIndexCounter: 10,
  idCounter: 0,
}));

export const getActiveItemById = (id: number) => {
  const { activeItems } = useShellStore.getState();
  return activeItems.find((item) => item.id === id);
};
