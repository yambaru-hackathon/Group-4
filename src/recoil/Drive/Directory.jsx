import { atom } from "recoil";

const directoryData = atom({
  key: "directoryData",
  default: {
    dirName: "",
    dirCreatedAt: "",
    dirChangeName: "",
  }
});

export {
  directoryData,
}