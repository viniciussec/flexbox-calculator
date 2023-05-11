import { create } from "zustand";

const INITIAL_STATE = {
  firstValue: "0",
  secondValue: "0",
  mainOperator: "",
  result: "0",
  display: "0",
  blocked: false,
  history: {
    firstValue: "0",
    secondValue: "0",
    mainOperator: "",
  },
};

const useValueStore = create((set) => ({
  value: INITIAL_STATE,
  setNumber: (value) =>
    set((prev) => {
      if (prev.value.mainOperator === "") {
        return {
          value: {
            ...prev.value,
            firstValue: value,
            display: value,
          },
        };
      } else {
        return {
          value: {
            ...prev.value,
            secondValue: value,
            display: value,
          },
        };
      }
    }),
  setOperator: (value) =>
    set((prev) => ({
      value: { ...prev.value, mainOperator: value, display: "0" },
    })),
  setResult: (value) =>
    set((prev) => ({
      value: {
        ...INITIAL_STATE,
        result: value,
        display: value,
        firstValue: value,
        history: {
          firstValue: prev.value.firstValue,
          secondValue: prev.value.secondValue,
          mainOperator: prev.value.mainOperator,
        },
      },
    })),
  clear: () => set({ value: INITIAL_STATE }),
  block: () => set((prev) => ({ value: { ...prev.value, blocked: true } })),
}));

export default useValueStore;
