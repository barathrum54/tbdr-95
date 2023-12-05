import create from "zustand";
import { MenuItem } from "../types/menu-item.types";

type ShellState = {
  activeItems: MenuItem[];
  removeActiveItem: (item: MenuItem) => void;
  addActiveItem: (item: MenuItem) => void;
  resetActiveItems: () => void;
  zIndexCounter: number;
};

const actions = (set: any) => ({
  removeActiveItem: (item: MenuItem) =>
    set((state: ShellState) => ({
      activeItems: state.activeItems.filter((i) => i.title !== item.title),
    })),
  addActiveItem: (item: MenuItem) =>
    set((state: ShellState) => ({
      activeItems: [...state.activeItems, item],
    })),
  resetActiveItems: () => set({ activeItems: [] }),
});

export const useShellStore = create<ShellState>((set) => ({
  activeItems: [],
  ...actions(set),
  zIndexCounter: 10,
}));

export const getActiveItemByTitle = (title: string) => {
  const { activeItems } = useShellStore.getState();
  return activeItems.find((item) => item.title === title);
};
