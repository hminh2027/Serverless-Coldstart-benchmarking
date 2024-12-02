import { baseRouter } from "@/app/_middlewares";
import { NextRequest, NextResponse } from "next/server";

const router = baseRouter();

router.get((req, ctx) => {
  try {
    return NextResponse.json(
      {
        data: [
          { id: 1, book: "The Fountainhead" },
          { id: 2, book: "Kill The Mocking Bird" },
        ],
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
});

export async function GET(request: NextRequest, ctx) {
  return router.run(request, ctx);
}
