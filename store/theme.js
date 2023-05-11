import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "LIGHT",
  toggle: () =>
    set((state) => ({ theme: state.theme === "DARK" ? "LIGHT" : "DARK" })),
}));

export default useThemeStore;
