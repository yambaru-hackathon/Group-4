import { atom } from "recoil";

const columnFields = atom({
  key: "columnFields",
  default: [{
    fieldName: "名前",
    fieldId: "name",
    width: "250px",
  },{
    fieldName: "編集者",
    fieldId: "update_user",
    width: "150px",
  },{
    fieldName: "最終更新日",
    fieldId: "update_at",
    width: "180px",
  },{
    fieldName: "種類",
    fieldId: "file_type",
    width: "150px",
  },{
    fieldName: "サイズ",
    fieldId: "file_size",
    width: "120px",
  }]
});

export {
  columnFields,
}