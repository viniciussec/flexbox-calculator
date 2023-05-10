import { create } from "zustand";

const useValueStore = create((set) => ({
  value: '0',
  set: (state) => set(() => ({ value: state })),
  clear: () => set({ value: '0' }),
}));

export default useValueStore;
