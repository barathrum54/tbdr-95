import create from "zustand";

type AppState = {
  isStartMenuOpen: boolean;
  toggleStartMenu: () => void;
  setStartMenu: (value: boolean) => void;
};

// Use the create function to create the store
export const useAppStore = create<AppState>((set) => ({
  isStartMenuOpen: false,
  toggleStartMenu: () =>
    set((state) => ({ isStartMenuOpen: !state.isStartMenuOpen })),
  setStartMenu: (value: boolean) => set(() => ({ isStartMenuOpen: value })),
}));
