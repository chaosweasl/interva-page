import { NextResponse } from "next/server";

// Placeholder for Linux download route
export async function GET() {
  try {
    const res = await fetch(
      "https://github.com/chaosweasl/interva/releases/latest/download/latest.json",
      {
        headers: {
          "Cache-Control": "no-cache",
        },
      }
    );

    if (!res.ok) {
      return NextResponse.json(
        { error: "Failed to fetch release info" },
        { status: 500 }
      );
    }

    const data = await res.json();
    const downloadUrl = data?.platforms?.["linux-x86_64"]?.url;

    if (!downloadUrl || !downloadUrl.endsWith(".AppImage")) {
      return NextResponse.json(
        { error: "Download URL missing or invalid" },
        { status: 400 }
      );
    }

    return NextResponse.redirect(downloadUrl);
  } catch (err) {
    return NextResponse.json(
      { error: "Unexpected error " + err },
      { status: 500 }
    );
  }
}
