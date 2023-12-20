import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

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

const { persistAtom } = recoilPersist({
  key: "recoil-persist",
  storage: sessionStorage,
});

export const loginState = atom({
  key: "loginState",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
