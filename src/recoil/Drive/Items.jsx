import { atom } from "recoil";

const directoryItems = atom({
    key: "directoryItems",
    default: [{
        type: "directory",
        name: "テストディレクトリ",
        uid: "ifgergwmd3768wzaa6uzs2tjusxsupi3w8wg9si4zc9wbiyibn",
        update_at: "2024-02-28T12:07:53.564Z",
        update_user: {
            user_name: "松田秀彦",
            user_id: "1",
        },
        create_at: "2024-02-28T12:00:00.564Z",
        create_user: {
            user_name: "鷲沢稜河",
            user_id: "2",
        },
        isLike: true,
        file_size: null,
        file_type: null,
    },{
        type: "directory",
        name: "テストディレクトリ2",
        uid: "gmz2dj2gfrzfga8ybyhpndy887mkasf4ng4pr4x2rig5inz4ym",
        update_at: "2024-02-27T12:07:53.564Z",
        update_user: {
            user_name: "前黒島櫂",
            user_id: "5",
        },
        create_at: "2024-02-27T12:00:00.564Z",
        create_user: {
            user_name: "饒平名珂成",
            user_id: "3",
        },
        isLike: false,
        file_size: null,
        file_type: null,
    },{
        type: "file",
        name: "テストファイル1",
        uid: "hbb6cb458ky4b9nhpeeznzgxmtbkaseytma93pucpa767n23xr",
        update_at: "2024-02-27T10:07:53.564Z",
        update_user: {
            user_name: "崎山瑠允",
            user_id: "4",
        },
        create_at: "2024-02-25T12:07:53.564ZZ",
        create_user: {
            user_name: "崎山瑠允",
            user_id: "4",
        },
        isLike: false,
        file_size: 104,
        file_type: "txt",
    },{
        type: "file",
        name: "テストファイル2",
        uid: "sxmwwn7tbuwtgrn5yt64tm6i6gitbf92dc39j762mdtwdr8n8p",
        update_at: "2024-02-27T12:07:53.564Z",
        update_user: {
            user_name: "饒平名珂成",
            user_id: "3",
        },
        create_at: "2024-02-25T12:07:53.564ZZ",
        create_user: {
            user_name: "饒平名珂成",
            user_id: "3",
        },
        isLike: false,
        file_size: 1363149,
        file_type: "pdf",
    },{
        type: "file",
        name: "テストファイル3",
        uid: "wsawihc4nsy9jcgtp2txni6hgufk7mwjfr8uiwc2km96j6wppk",
        update_at: "2024-02-27T12:07:53.564Z",
        update_user: {
            user_name: "鷲沢稜河",
            user_id: "2",
        },
        create_at: "2024-02-25T12:07:53.564ZZ",
        create_user: {
            user_name: "鷲沢稜河",
            user_id: "2",
        },
        isLike: false,
        file_size: 8808038,
        file_type: "pptx",
    },{
        type: "file",
        name: "テストファイル4",
        uid: "gcisgsmpiiy3jf94yg9h7hztiu57g98dcj4mhzinfuy38ynkz9",
        update_at: "2024-02-27T12:07:53.564Z",
        update_user: {
            user_name: "崎山瑠允",
            user_id: "4",
        },
        create_at: "2024-02-25T12:07:53.564ZZ",
        create_user: {
            user_name: "崎山瑠允",
            user_id: "4",
        },
        isLike: false,
        file_size: 1523,
        file_type: "c",
    },{
        type: "file",
        name: "テストファイル5",
        uid: "teijdg5as53fh2x7kewr377axk8f65uhffd9cfs55gg6ch584r",
        update_at: "2024-02-27T12:07:53.564Z",
        update_user: {
            user_name: "前黒島櫂",
            user_id: "5",
        },
        create_at: "2024-02-25T12:07:53.564ZZ",
        create_user: {
            user_name: "前黒島櫂",
            user_id: "5",
        },
        isLike: false,
        file_size: 110519910,
        file_type: "mp4",
    },{
        type: "zip",
        name: "zipファイル1",
        uid: "xru6fdzx3y74fkjp2rmyjbjbi5x2m6dbght4x26bs4a4ig8gnj",
        update_at: "2024-02-27T12:07:53.564Z",
        update_user: {
            user_name: "鷲沢稜河",
            user_id: "2",
        },
        create_at: "2024-02-25T12:07:53.564ZZ",
        create_user: {
            user_name: "鷲沢稜河",
            user_id: "2",
        },
        isLike: false,
        file_size: 1610612736,
        file_type: "zip",
    }],
});

const selectItems = atom({
    key: "selectItems",
    default: [],
});

export {
    directoryItems,
    selectItems,
};