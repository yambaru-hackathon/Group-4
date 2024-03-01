import { NextResponse } from "next/server";

export async function GET(req, {
    params: {
        directory_id,
    }
}) {
    //
    const direcotry_id = directory_id;

    // ディレクトリ情報を取得

    return NextResponse.json({
        code: 0,
        result: true,
        direcotry_id: direcotry_id,
        directory_name: "教材一覧",
        change_name: false,     // ディレクトリ名変更可能か
        created_at: "2024-02-27T12:07:53.564Z",
        updated_at: "2024-02-27T12:10:53.564Z",
        created_user: {
            user_id: "1",
            user_name: "松田秀彦",
        },
        updated_user: {
            user_id: "2",
            user_name: "鷲沢稜河",
        },
    }, {
        status: 200
    });
}