import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "DARK",
  toggle: () =>
    set((state) => ({ theme: state.theme === "DARK" ? "LIGHT" : "DARK" })),
}));

export default useThemeStore;
