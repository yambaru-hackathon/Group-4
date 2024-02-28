import { atom } from "recoil";

const directoryData = atom({
  key: "directoryData",
  default: {
    dirName: "[ 無題 ]",
    dirCreatedAt: "2021-10-01T00:00:00.000Z",
  }
});

export {
  directoryData,
}