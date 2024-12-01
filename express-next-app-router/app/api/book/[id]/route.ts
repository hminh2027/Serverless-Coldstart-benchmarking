import { baseRouter } from "@/app/_middlewares";
import { NextRequest, NextResponse } from "next/server";

const router = baseRouter();

interface RequestContext {
  params: {
    id: string;
  };
}

router.get((req, ctx) => {
  const { id } = ctx.params;
  try {
    return NextResponse.json(
      { data: { id, book: "The Fountainhead" } },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
});

export async function GET(request: NextRequest, ctx: RequestContext) {
  return router.run(request, ctx);
}
