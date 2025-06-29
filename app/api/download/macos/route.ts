import { NextResponse } from "next/server";

// Placeholder for macOS download route
// export async function GET() {
//   try {
//     const res = await fetch(
//       "https://github.com/chaosweasl/interva/releases/latest/download/latest.json",
//       {
//         headers: {
//           "Cache-Control": "no-cache",
//         },
//       }
//     );

//     if (!res.ok) {
//       return NextResponse.json(
//         { error: "Failed to fetch release info" },
//         { status: 500 }
//       );
//     }

//     const data = await res.json();
//     const downloadUrl = data?.platforms?.["darwin-aarch64"]?.url;

//     if (!downloadUrl || !downloadUrl.endsWith(".tar.gz")) {
//       return NextResponse.json(
//         { error: "Download URL missing or invalid" },
//         { status: 400 }
//       );
//     }

//     return NextResponse.redirect(downloadUrl);
//   } catch (err) {
//     return NextResponse.json(
//       { error: "Unexpected error " + err },
//       { status: 500 }
//     );
//   }
// }

// the API is supposed to download the .tar.gz file, but I'd rather it downloaded the .dmg file. the problem
// is that I can't make it download that since tauri relies on .tar.gz for auto-updaitng in the latest.json file

export async function GET() {
  return NextResponse.redirect(
    "https://github.com/chaosweasl/interva/releases/latest"
  );
}
