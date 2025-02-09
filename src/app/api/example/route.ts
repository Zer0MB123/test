import { /* NextRequest ,*/ NextResponse } from "next/server";

/*

export function GET(request: NextRequest){
    return NextResponse.json({valan: "hi"}, {status: 200});
}

*/

export async function POST(/*request: NextRequest*/){
    return NextResponse.json({valan: "Larm"}, {status: 200});
}
