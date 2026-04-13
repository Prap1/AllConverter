import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return NextResponse.json(
        { error: "No file provided for conversion." },
        { status: 400 }
      );
    }

    // Since we don't have a CloudConvert API key set up,
    // we simulate a network delay and return a mock PDF.

    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 2500));

    // A minimal valid PDF structure containing the text "Mock Converted PDF"
    const dummyPdfContent = `%PDF-1.4
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj
2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj
3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>
endobj
4 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>
endobj
5 0 obj
<< /Length 135 >>
stream
BT
/F1 14 Tf
50 700 Td
(DOC to PDF conversion requires a CloudConvert API Key.) Tj
0 -20 Td
(This is a mock PDF returned for demonstration purposes.) Tj
ET
endstream
endobj
xref
0 6
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000234 00000 n 
0000000321 00000 n 
trailer
<< /Size 6 /Root 1 0 R >>
startxref
507
%%EOF`;

    const buffer = Buffer.from(dummyPdfContent, 'utf-8');

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${file.name.replace(/\.(doc|docx)$/i, "")}_converted.pdf"`,
      },
    });
  } catch (error: any) {
    console.error("Doc to PDF error:", error);
    return NextResponse.json(
      { error: "Internal server error during conversion." },
      { status: 500 }
    );
  }
}
