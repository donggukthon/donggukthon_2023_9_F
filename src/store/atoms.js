import { atom } from "recoil";

export const testState = atom({
  key: "testState",
  default: {
    gender: "",
    T: 0,
    F: 0,
    E: 0,
    I: 0,
    X: 0,
    O: 0,
  },
});
